import styled from "@emotion/styled";
import { h, Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";
import { ThemeProvider } from "emotion-theming";
import defaultTheme from "../utils/defaultTheme";
import isTextLegibleOverBackground from "../utils/isTextLegibleOverBackground";
import { fetchTheme, fetchApplications, fetchProfile } from "../utils/api";
import { displayName, displayPicture } from "../utils/userInfo";
import getNavigationLinks from "../utils/getNavigationLinks";
import AppLinks from "./AppLinks";
import CollapsedLink from "./CollapsedLink";
import Links from "./Links";
import Avatar from "./Avatar";
import AvatarItem from "./AvatarItem";
import Brand from "./Brand";
import Burger from "./Burger";

const Collapsed = styled("nav")(({ theme }) => ({
  position: "fixed",
  top: "0",
  left: "0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "60px",
  height: "100%",
  boxSizing: "border-box",
  boxShadow: "2px 0 8px -3px rgba(0, 0, 0, .2)",
  background: theme.primary,
  color: isTextLegibleOverBackground("#ffffff", theme.primary) ? "#ffffff" : "#333333",
  fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
}));

const Extended = styled("nav")(({ theme }) => ({
  position: "fixed",
  top: "0",
  left: "0",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  maxWidth: "320px",
  boxShadow: "2px 0 8px -3px rgba(0, 0, 0, .2)",
  background: theme.background,
  color: isTextLegibleOverBackground("#ffffff", theme.background) ? "#ffffff" : "#333333",
  fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
}));

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
  padding: isCollapsed ? "10px 0" : "0 12px"
}));

const AvatarItemWrapper = styled("div")({
  padding: "8px 16px 8px 16px",
  marginTop: "8px",
  borderTop: "1px solid rgba(0, 0, 0, .1)"
});

const VerticalNavigation = ({ footerLinks, getToken, apiUrl, backofficeUrl, profileApiUrl }) => {
  if (!apiUrl || !getToken || !profileApiUrl) {
    throw new Error(
      "`VerticalNavigation` requires the `apiUrl`, `profileApiUrl` and `getToken` props. See https://mobility-platform-docs.netlify.com/"
    );
  }

  const { globalLinks, profileLink } = getNavigationLinks(backofficeUrl);

  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    (async () => {
      const apiTheme = await fetchTheme({ getToken, apiUrl });
      setTheme(apiTheme);
    })();
  }, [apiUrl, getToken]);

  const [applications, setApplications] = useState();

  useEffect(() => {
    (async () => {
      const apiApplications = await fetchApplications({ getToken, apiUrl });
      setApplications(apiApplications);
    })();
  }, [apiUrl, getToken]);

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    (async () => {
      const apiProfile = await fetchProfile({ getToken, profileApiUrl });
      setUserInfo(apiProfile);
    })();
  }, [profileApiUrl, getToken]);

  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Shadow isCollapsed={isCollapsed} onClick={() => setIsCollapsed(true)} />

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
              <CollapsedLink aria-label="Open the menu" onClick={() => setIsCollapsed(false)}>
                <Avatar src={displayPicture(userInfo)} size={"22px"} />
              </CollapsedLink>
            </div>
          </Content>
        </Collapsed>

        <Extended
          style={{
            transform: isCollapsed ? "translateX(-100%)" : "translateX(0)",
            opacity: isCollapsed ? "0" : "1",
            transition: isCollapsed
              ? "transform 200ms, opacity 0ms 200ms"
              : "opacity 0ms, transform 200ms"
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
            <AvatarItem title={displayName(userInfo)} link={profileLink}>
              <Avatar src={displayPicture(userInfo)} size={"40px"} />
            </AvatarItem>
          </AvatarItemWrapper>
        </Extended>
      </Fragment>
    </ThemeProvider>
  );
};

export default VerticalNavigation;
