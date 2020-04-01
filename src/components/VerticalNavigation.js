import styled from "@emotion/styled-base";
import { h } from "preact";
import { useState } from "preact/hooks";
import { useTranslation } from "../utils/i18n";
import isTextLegibleOverBackground from "../utils/isTextLegibleOverBackground";
import { FiHome, FiUsers } from "../utils/SVG";
import { displayName, displayPicture } from "../utils/userInfo";
import Avatar from "./Avatar";
import Brand from "./Brand";
import Burger from "./Burger";
import CollapsedLink from "./CollapsedLink";
import Icon from "./Icon";
import { Link, LinkIcon } from "./Link";
import NavLinks from "./NavLinks";
import UserProfile from "./UserProfile";

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

const UserProfileWrapper = styled("div")({
  padding: "8px 16px 8px 16px",
  marginTop: "8px",
  borderTop: "1px solid rgba(0, 0, 0, .1)"
});

const VerticalNavigation = ({ applications, userInfo, footerLinks, backofficeUrl }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const t = useTranslation();
  return (
    <>
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

          {/* Global links */}
          <NavLinks>
            <CollapsedLink tooltip={t("My Home")} href={backofficeUrl}>
              <FiHome />
            </CollapsedLink>
            <CollapsedLink tooltip={t("My Organization")} href={`${backofficeUrl}/groups`}>
              <FiUsers />
            </CollapsedLink>
          </NavLinks>

          {/* Application links */}
          {applications && (
            <NavLinks>
              {applications.map(application => (
                <CollapsedLink
                  key={application.id}
                  tooltip={application.name}
                  href={application.url}
                >
                  <LinkIcon>
                    <img src={application.icon} alt={application.name} />
                  </LinkIcon>
                </CollapsedLink>
              ))}
            </NavLinks>
          )}

          {/* Footer links */}
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            {footerLinks && (
              <NavLinks>
                {footerLinks.map(({ label, icon, ...rest }, index) => (
                  <CollapsedLink key={index} tooltip={label} {...rest}>
                    <Icon as={LinkIcon} content={icon} />
                  </CollapsedLink>
                ))}
              </NavLinks>
            )}
            <CollapsedLink
              as="button"
              aria-label={t("Open the menu")}
              onClick={() => setIsCollapsed(false)}
            >
              <Avatar src={displayPicture(userInfo)} size={22} />
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
          {/* Global links */}
          <NavLinks title={t("Global")}>
            <Link rel="noopener nofollow" href={backofficeUrl}>
              <LinkIcon>
                <FiHome />
              </LinkIcon>
              <span>{t("My Home")}</span>
            </Link>
            <Link rel="noopener nofollow" href={`${backofficeUrl}/groups`}>
              <LinkIcon>
                <FiUsers />
              </LinkIcon>
              <span>{t("My Organization")}</span>
            </Link>
          </NavLinks>

          {/* Application links */}
          <div style={{ marginTop: "12px", width: "100%" }}>
            {applications && (
              <NavLinks title={t("Apps")}>
                {applications.map(application => (
                  <Link key={application.id} href={application.url}>
                    <LinkIcon>
                      <img src={application.icon} alt={application.name} />
                    </LinkIcon>
                    <span>{application.name}</span>
                  </Link>
                ))}
              </NavLinks>
            )}
          </div>

          {/* Footer links */}
          {footerLinks && (
            <div style={{ marginTop: "auto", width: "100%" }}>
              <NavLinks title={t("Others")}>
                {footerLinks.map(({ label, icon, ...rest }, index) => (
                  <Link key={index} {...rest}>
                    <Icon as={LinkIcon} content={icon} />
                    <span>{label}</span>
                  </Link>
                ))}
              </NavLinks>
            </div>
          )}
        </Content>
        <UserProfileWrapper>
          <UserProfile title={displayName(userInfo)} link={`${backofficeUrl}/users/me`}>
            <Avatar src={displayPicture(userInfo)} size={40} />
          </UserProfile>
        </UserProfileWrapper>
      </Extended>
    </>
  );
};

export default VerticalNavigation;
