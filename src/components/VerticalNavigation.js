import { setPragma, styled } from "goober";
import { h, Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";
import AppLinks from "./AppLinks";
import Avatar from "./Avatar";
import AvatarItem from "./AvatarItem";
import Brand from "./Brand";
import Burger from "./Burger";
import Links from "./Links";
import { fetchTheme, fetchApplications } from "../utils/api";
import { defaultTheme, ThemeProvider, withTheme } from "./Theme";
import isTextLegibleOverBackground from "../utils/isTextLegibleOverBackground";
import CollapsedLink from "./CollapsedLink";

setPragma(h);

const globalLinks = [
  {
    href: "#",
    label: "My Home",
    icon: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="17"
        fill="none"
        viewBox="0 0 16 17"
      >
        <defs />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 6.3L8 1l7 5.3v8.2c0 .8-.7 1.5-1.6 1.5H2.6c-.9 0-1.6-.7-1.6-1.5V6.2z"
          clip-rule="evenodd"
        />
      </svg>
      `
  },
  {
    href: "#",
    label: "My Organization",
    icon: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        viewBox="0 0 448 512"
      >
        <defs />
        <path d="M352 320a95.6 95.6 0 00-59.8 20.9l-102.5-64a96.6 96.6 0 000-41.7L292.2 171a96 96 0 10-34-54.3l-102.4 64a96 96 0 100 150.2l102.5 64.2A96.3 96.3 0 00256 416a96 96 0 1096-96z" />
      </svg>
      `
  }
];

const Collapsed = withTheme(
  styled("div")(({ theme }) => ({
    position: "fixed",
    top: "0",
    left: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "60px",
    height: "100%",
    paddingBottom: "20px",
    boxSizing: "border-box",
    boxShadow: "2px 0 8px -3px rgba(0, 0, 0, .2)",
    background: theme.primary,
    color: isTextLegibleOverBackground("#ffffff", theme.primary)
      ? "#ffffff"
      : "#333333",
    fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
  }))
);

const Extended = withTheme(
  styled("div")(({ theme }) => ({
    position: "fixed",
    top: "0",
    left: "0",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    maxWidth: "320px",
    boxShadow: "2px 0 8px -3px rgba(0, 0, 0, .2)",
    transition: "transform 200ms",
    background: theme.background,
    color: isTextLegibleOverBackground("#ffffff", theme.background)
      ? "#ffffff"
      : "#333333",
    fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
  }))
);

const Shadow = styled("div")(({ isCollapsed }) => ({
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100%",
  opacity: isCollapsed ? 0 : 1,
  backgroundColor: "rgba(0, 0, 0, .1)",
  transition: "opacity 200ms",
  pointerEvents: isCollapsed ? "none" : "auto"
}));

const Content = styled("div")(({ isCollapsed }) => ({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  alignItems: isCollapsed ? "center" : "flex-start",
  padding: isCollapsed ? "0" : "0 12px"
}));

const AvatarItemWrapper = styled("div")({
  padding: "8px 16px 8px 16px",
  marginTop: "8px",
  borderTop: "1px solid rgba(0, 0, 0, .1)"
});

const VerticalNavigation = ({ footerLinks, getToken, apiUrl }) => {
  if (!apiUrl || !getToken) {
    throw new Error(
      "`VerticalNavigation` requires the `apiUrl` and `getToken` props. See https://mobility-platform-docs.netlify.com/"
    );
  }

  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    (async () => {
      const apiTheme = await fetchTheme({ getToken, apiUrl });
      setTheme(apiTheme);
    })();
  }, []);

  const [applications, setApplications] = useState();

  useEffect(() => {
    (async () => {
      const apiApplications = await fetchApplications({ getToken, apiUrl });
      setApplications(apiApplications);
    })();
  }, []);

  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Shadow
          isCollapsed={isCollapsed}
          onClick={() => setIsCollapsed(true)}
        />

        <Collapsed>
          <Brand isCollapsed={true} />
          <Content isCollapsed={true}>
            <Burger isCollapsed={true} handler={() => setIsCollapsed(false)} />
            <Links isCollapsed={true} data={globalLinks} />
            <AppLinks isCollapsed={true} data={applications} />
            <div
              style={{
                marginTop: "auto",
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <Links isCollapsed={true} data={footerLinks} />
              <CollapsedLink onClick={() => setIsCollapsed(false)}>
                <Avatar src={"https://i.pravatar.cc/40"} size={"22px"} />
              </CollapsedLink>
            </div>
          </Content>
        </Collapsed>

        <Extended
          style={{
            transform: isCollapsed ? "translateX(-100%)" : "translateX(0)"
          }}
        >
          <Brand />
          <div
            style={{
              padding: "10px 16px",
              borderTop: "1px solid rgba(0, 0, 0, .1)",
              borderBottom: "1px solid rgba(0, 0, 0, .1)",
              marginBottom: "16px"
            }}
          >
            <Burger handler={() => setIsCollapsed(true)} />
          </div>
          <Content>
            <Links title={"Global"} data={globalLinks} />
            <div style={{ marginTop: "12px", width: "100%" }}>
              <AppLinks title={"Apps"} data={applications} />
            </div>
            <div style={{ marginTop: "auto", width: "100%" }}>
              <Links title={"Others"} data={footerLinks} />
            </div>
          </Content>
          <AvatarItemWrapper>
            <AvatarItem
              title={"Johanes Does"}
              linkLabel={"Voir le profil"}
              href={"#"}
              target={"_blank"}
            >
              <Avatar src={"https://i.pravatar.cc/40"} size={"40px"} />
            </AvatarItem>
          </AvatarItemWrapper>
        </Extended>
      </Fragment>
    </ThemeProvider>
  );
};

export default VerticalNavigation;
