import styled from "@emotion/styled";
import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import isTextLegibleOverBackground from "../utils/isTextLegibleOverBackground";
import { displayName, displayPicture } from "../utils/userInfo";
import AppLinks from "./AppLinks";
import Avatar from "./Avatar";
import AvatarItem from "./AvatarItem";
import Brand from "./Brand";
import Burger from "./Burger";
import CollapsedLink from "./CollapsedLink";
import Links from "./Links";
import { useTranslation } from "../utils/i18n";

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

const VerticalNavigation = ({ applications, userInfo, footerLinks, globalLinks, profileLink }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const t = useTranslation();
  return (
    <Fragment>
      <Shadow isCollapsed={isCollapsed} onClick={() => setIsCollapsed(true)} />

      <Collapsed
        style={{
          visibility: isCollapsed ? "visible" : "hidden"
        }}
        aria-hidden={!isCollapsed}
      >
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
            <CollapsedLink
              as={"button"}
              style={{ border: "none", padding: 0 }}
              aria-label={t("Open the menu")}
              onClick={() => setIsCollapsed(false)}
            >
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
            ? "transform 200ms, opacity 0ms 200ms, visibility 0ms 200ms"
            : "opacity 0ms, transform 200ms",
          visibility: isCollapsed ? "hidden" : "visible"
        }}
        aria-hidden={isCollapsed}
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
          <Links title={t("Global")} data={globalLinks} />
          <div style={{ marginTop: "12px", width: "100%" }}>
            <AppLinks title={t("Apps")} data={applications} />
          </div>
          <div style={{ marginTop: "auto", width: "100%" }}>
            <Links title={t("Others")} data={footerLinks} />
          </div>
        </Content>
        <AvatarItemWrapper>
          <AvatarItem title={displayName(userInfo)} link={profileLink}>
            <Avatar src={displayPicture(userInfo)} size={"40px"} />
          </AvatarItem>
        </AvatarItemWrapper>
      </Extended>
    </Fragment>
  );
};

export default VerticalNavigation;
