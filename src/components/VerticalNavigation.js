import { setPragma, styled } from "goober";
import { h } from "preact";
import { useState } from "preact/hooks";
import Burger from "./Burger";
import Brand from "./Brand";
import AvatarItem from "./AvatarItem";
import Avatar from "./Avatar";
import Links from "./Links";
import CollapsedLinks from "./CollapsedLinks";
import { ThemeProvider, defaultTheme, withTheme } from "./Theme";

setPragma(h);

const userLinksData = [
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

const footerLinksData = [
  {
    href: "#",
    label: "Developers",
    icon: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        viewBox="0 0 640 512"
      >
        <defs />
        <path d="M278.9 511.5l-61-17.7a12 12 0 01-8.2-14.9L346.2 8.7A12 12 0 01361.1.5l61 17.7a12 12 0 018.2 14.9L293.8 503.3a12 12 0 01-14.9 8.2zm-114-112.2l43.5-46.4a12 12 0 00-.8-17.2L117 256l90.6-79.7a12 12 0 00.8-17.2l-43.5-46.4a12 12 0 00-17-.5L3.8 247.2a12 12 0 000 17.5l144.1 135.1a12 12 0 0017-.5zm327.2.6l144.1-135.1a12 12 0 000-17.5L492.1 112.1a12.1 12.1 0 00-17 .5L431.6 159a12 12 0 00.8 17.2L523 256l-90.6 79.7a12 12 0 00-.8 17.2l43.5 46.4a12 12 0 0017 .6z" />
      </svg>
      `
  },
  {
    href: "#",
    label: "Terms of use",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <defs />
        <path d="M256 8a248 248 0 100 496 248 248 0 000-496zm0 48a199.9 199.9 0 110 400 199.9 199.9 0 110-400m140.2 130.3l-22.5-22.8a12 12 0 00-17 0L215.3 303.7l-59.7-60.3a12 12 0 00-17 0l-22.7 22.5a12 12 0 00-.1 17l90.8 91.5a12 12 0 0017 0L396 203.2a12 12 0 00.1-17z" />
      </svg>
      `
  },
  {
    href: "#",
    label: "Help",
    icon: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        viewBox="0 0 512 512"
      >
        <defs />
        <path d="M256 8a248 248 0 100 496 248 248 0 000-496zm0 448a200 200 0 11-.1-400.1A200 200 0 01256 456zm107.2-255.2c0 67-72.4 68-72.4 92.9v6.3a12 12 0 01-12 12h-45.6a12 12 0 01-12-12v-8.7c0-35.7 27-50 47.6-61.5 17.5-9.8 28.3-16.5 28.3-29.6 0-17.2-22-28.6-39.8-28.6-23.2 0-33.9 11-49 30a12 12 0 01-16.6 2l-27.8-21a12 12 0 01-2.7-16.4C184.8 131.5 215 112 261.8 112c49 0 101.4 38.3 101.4 88.8zM298 368a42 42 0 11-84 0 42 42 0 0184 0z" />
      </svg>
      `
  }
];

const Layout = styled("div")({
  position: "relative",
  height: "100%",
  width: "60px",
  fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
});

const Collapsed = withTheme(
  styled("div")(({ theme }) => ({
    position: "absolute",
    top: "0",
    left: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "60px",
    height: "100%",
    paddingBottom: "20px",
    boxSizing: "border-box",
    boxShadow: "2px 0 8px -3px rgba(0, 0, 0, .2)",
    background: theme.collapsed.background,
    color: theme.collapsed.color
  }))
);

const Extended = withTheme(
  styled("div")(({ isCollapsed, theme }) => ({
    position: "absolute",
    top: "0",
    left: "0",
    transform: isCollapsed ? "translateX(-210px)" : "translateX(0)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "200px",
    height: "100%",
    boxShadow: "2px 0 8px -3px rgba(0, 0, 0, .2)",
    transition: "transform 200ms",
    background: theme.extended.background,
    color: theme.extended.color
  }))
);

const Shadow = styled("div")(({ isCollapsed }) => ({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100%",
  opacity: isCollapsed ? 0 : 1,
  backgroundColor: "rgba(0, 0, 0, .1)",
  transition: "opacity 200ms",
  pointerEvents: "none"
}));

const Footer = styled("div")({
  marginTop: "auto"
});

const AvatarWrapper = styled("button")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  margin: "4px 0",
  padding: "0",
  cursor: "pointer",
  backgroundColor: "transparent",
  borderRadius: "50%",
  border: "none",
  boxSizing: "border-box",
  "&::before": {
    content: "''",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, .3)",
    opacity: "0",
  },
  "&:hover": {
    "&::before": {
      opacity: "1"
    }
  }
});

const AvatarItemWrapper = styled("div")({
  padding: "8px 16px 8px 16px",
  marginTop: "8px",
  borderTop: "1px solid rgba(0, 0, 0, .1)"
});

const VerticalNavigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <ThemeProvider defaultTheme={defaultTheme}>
      <Layout>
        <Shadow isCollapsed={isCollapsed} />
        <Collapsed isCollapsed={true}>
          <Brand isCollapsed={true} />
          <div style={{ margin: "8px 0 4px 0" }}>
            <Burger isCollapsed={true} handler={() => setIsCollapsed(false)} />
          </div>
          <CollapsedLinks data={userLinksData} />
          <Footer>
            <CollapsedLinks data={footerLinksData} />
            <AvatarWrapper onClick={() => setIsCollapsed(false)}>
              <Avatar src={"https://i.pravatar.cc/40"} size={"22px"} />
            </AvatarWrapper>
          </Footer>
        </Collapsed>

        <Extended isCollapsed={isCollapsed}>
          <Brand isCollapsed={false} />
          <div
            style={{
              padding: "10px 16px",
              borderTop: "1px solid rgba(0, 0, 0, .1)",
              borderBottom: "1px solid rgba(0, 0, 0, .1)",
              marginBottom: "16px"
            }}
          >
            <Burger isCollapsed={false} handler={() => setIsCollapsed(true)} />
          </div>
          <Links title={"Global"} data={userLinksData} />
          <Footer>
            <Links title={"Others"} data={footerLinksData} />
            <AvatarItemWrapper>
              <AvatarItem
                primaryText={"Johanes Does"}
                secondaryText={"Voir le profil"}
              >
                <Avatar src={"https://i.pravatar.cc/40"} size={"40px"} />
              </AvatarItem>
            </AvatarItemWrapper>
          </Footer>
        </Extended>
      </Layout>
    </ThemeProvider>
  );
};

export default VerticalNavigation;
