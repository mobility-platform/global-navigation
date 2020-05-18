import styled from "@emotion/styled-base";
import { Fragment, h } from "preact";
import { useCallback, useRef } from "preact/hooks";
import { getContrastColor, isDark } from "../utils/color";
import { useTranslation } from "../utils/i18n";
import { FiHome, FiMenu, FiUsers, FiX, MichelinLogo } from "../utils/SVG";
import useClickOutside from "../utils/useClickOutside";
import useDisclosure from "../utils/useDisclosure";
import Avatar from "./Avatar";
import { Button, ButtonIcon, ButtonText } from "./Button";
import Link from "./Link";
import NavHeading from "./NavHeading";
import UserProfile from "./UserProfile";

const FooterLinks = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  width: "100%",
  padding: 10,
  opacity: "0.8",
  marginTop: 10,
  borderTop: isDark(theme.background)
    ? "1px solid rgba(255, 255, 255, .1)"
    : "1px solid rgba(0, 0, 0, .1)"
}));

const UserProfileWrapper = styled("div")(({ theme }) => ({
  color: getContrastColor(theme.primary),
  backgroundColor: theme.primary,
  padding: 10,
  width: "100%",
  boxSizing: "border-box"
}));

const LinksWrapper = styled("div")({
  color: "currentColor",
  padding: 10
});

const FloatingActionButton = styled("button")(({ size, theme }) => ({
  position: "relative",
  height: size,
  width: size,
  color: getContrastColor(theme.primary),
  backgroundColor: theme.primary,
  borderRadius: "50%",
  border: "none",
  margin: 0,
  padding: 0,
  cursor: "pointer",
  overflow: "hidden",
  transition: "box-shadow 125ms cubic-bezier(0.4, 0.0, 0.2, 1)",
  "&:hover, &:focus": {
    outline: "none",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
  }
}));

const Modal = styled("div")(({ theme }) => ({
  position: "absolute",
  flexDirection: "column",
  width: 260,
  boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  overflow: "hidden",
  borderRadius: 10,
  fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  color: getContrastColor(theme.background),
  backgroundColor: theme.background,
  transition:
    "opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1), visibility 200ms, transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)",
  opacity: 0,
  transform: "scale(0.95)",
  visibility: "hidden",
  "&[aria-hidden=false]": {
    opacity: 1,
    visibility: "visible",
    transform: "none"
  }
}));

const defineOrientation = (buttonSize, orientation) => {
  const gap = 14;
  const basePosition = 0;
  const pushedPosition = `${buttonSize + gap}px`;
  switch (orientation) {
    case "top right":
      return { bottom: pushedPosition, left: basePosition, transformOrigin: "bottom left" };
    case "top left":
      return { bottom: pushedPosition, right: basePosition, transformOrigin: "bottom right" };
    case "bottom right":
      return { top: pushedPosition, left: basePosition, transformOrigin: "top left" };
    case "bottom left":
      return { top: pushedPosition, right: basePosition, transformOrigin: "top right" };
    case "right top":
      return { bottom: basePosition, left: pushedPosition, transformOrigin: "bottom left" };
    case "left top":
      return { bottom: basePosition, right: pushedPosition, transformOrigin: "bottom right" };
    case "right bottom":
      return { top: basePosition, left: pushedPosition, transformOrigin: "top left" };
    case "left bottom":
      return { top: basePosition, right: pushedPosition, transformOrigin: "top right" };
    default:
      return { bottom: pushedPosition, right: basePosition, transformOrigin: "bottom right" };
  }
};

const ApplicationSwitcher = ({
  applications,
  userInfo,
  footerLinks,
  backofficeUrl,
  orientation
}) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const buttonSize = 40;
  const t = useTranslation();
  const modalRef = useRef(null);

  useClickOutside(onClose, modalRef);

  const handleToggle = useCallback(
    e => {
      e.stopPropagation();
      onToggle();
    },
    [onToggle]
  );

  return (
    <Fragment>
      <FloatingActionButton
        size={buttonSize}
        isOpen={isOpen}
        onClick={handleToggle}
        aria-label={isOpen ? t("Close the menu") : t("Open the menu")}
      >
        <div style={{ position: "absolute", top: "15%", right: "25%" }}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
        <MichelinLogo
          style={{ bottom: "-28%", left: "-20%", width: "175%", position: "absolute" }}
        />
      </FloatingActionButton>

      <Modal
        style={{ ...defineOrientation(buttonSize, orientation) }}
        transformOrigin={orientation}
        ref={modalRef}
        aria-hidden={!isOpen}
      >
        {/* User profile */}
        <UserProfileWrapper>
          <UserProfile
            avatar={<Avatar src={userInfo?.picture} size={40} />}
            name={userInfo?.name}
            link={`${backofficeUrl}/users/me`}
          />
        </UserProfileWrapper>

        <LinksWrapper>
          {/* Global links */}
          <NavHeading>{t("Global")}</NavHeading>
          <Button as="a" href={backofficeUrl}>
            <ButtonIcon>
              <FiHome />
            </ButtonIcon>
            <ButtonText>{t("My Home")}</ButtonText>
          </Button>
          <Button as="a" href={`${backofficeUrl}/groups`}>
            <ButtonIcon>
              <FiUsers />
            </ButtonIcon>
            <ButtonText>{t("My Organization")}</ButtonText>
          </Button>

          {/* Application links */}
          {applications && (
            <Fragment>
              <NavHeading>{t("Apps")}</NavHeading>
              {applications.map(application => (
                <Button as="a" key={application.id} href={application.url}>
                  <ButtonIcon>
                    <img src={application.icon} alt={application.name} />
                  </ButtonIcon>
                  <ButtonText>{application.name}</ButtonText>
                </Button>
              ))}
            </Fragment>
          )}

          {/* Footer links */}
          {footerLinks && (
            <FooterLinks>
              {footerLinks.map(({ label, ...rest }, index) => (
                <Fragment key={index}>
                  {index !== 0 && <span> - </span>}
                  <Link key={index} {...rest}>
                    {label}
                  </Link>
                </Fragment>
              ))}
            </FooterLinks>
          )}
        </LinksWrapper>
      </Modal>
    </Fragment>
  );
};

export default ApplicationSwitcher;
