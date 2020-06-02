import styled from "@emotion/styled-base";
import { Fragment, h } from "preact";
import { getContrastColor, isLight } from "../utils/color";
import { useTranslation } from "../utils/i18n";
import { FiArrowLeft, FiHome, FiMenu, FiLogIn, FiGrid } from "../utils/SVG";
import useDisclosure from "../utils/useDisclosure";
import Avatar from "./Avatar";
import { Button, ButtonIcon, ButtonText } from "./Button";
import CustomIcon from "./CustomIcon";
import IconButton from "./IconButton";
import Logo from "./Logo";
import NavHeading from "./NavHeading";
import UserProfile from "./UserProfile";

const Spacer = styled("div")({
  flex: 1
});

const Container = styled("nav")(
  {
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    boxShadow: "2px 0 8px -3px rgba(0, 0, 0, .2)",
    fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    transition: "transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1), visibility 200ms",
    "&[aria-hidden=true]": {
      visibility: "hidden"
    }
  },
  ({ variant, theme }) =>
    variant === "collapsed" && {
      alignItems: "center",
      maxWidth: 60,
      background: theme.primary,
      color: getContrastColor(theme.primary)
    },
  ({ variant, theme }) =>
    variant === "extended" && {
      maxWidth: 320,
      background: theme.background,
      color: getContrastColor(theme.background),
      "&[aria-hidden=true]": {
        transform: "translateX(-100%)"
      }
    }
);

const Backdrop = styled("div")(
  {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, .15)",
    transition: "opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)",
    opacity: 0,
    pointerEvents: "none"
  },
  ({ isVisible }) =>
    isVisible && {
      opacity: 1,
      pointerEvents: "auto"
    }
);

const MenuButtonWrapper = styled("div")(({ theme }) => ({
  padding: 10,
  borderTop: isLight(theme.background)
    ? "1px solid rgba(0, 0, 0, .1)"
    : "1px solid rgba(255, 255, 255, .1)",
  borderBottom: isLight(theme.background)
    ? "1px solid rgba(0, 0, 0, .1)"
    : "1px solid rgba(255, 255, 255, .1)"
}));

const Content = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 10
});

const UserProfileWrapper = styled("div")(({ theme }) => ({
  padding: 10,
  borderTop: isLight(theme.background)
    ? "1px solid rgba(0, 0, 0, .1)"
    : "1px solid rgba(255, 255, 255, .1)"
}));

const VerticalNavigation = ({ userInfo, footerLinks, backofficeUrl, myshowcaseUrl, logInUrl }) => {
  const t = useTranslation();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Fragment>
      <Backdrop isVisible={isOpen} onClick={onClose} />

      {/* Collapsed container */}
      <Container variant="collapsed" aria-hidden={isOpen}>
        <Logo />

        <Content>
          {/* Menu button */}
          <IconButton onClick={onOpen} aria-label={t("Open the menu")}>
            <FiMenu />
          </IconButton>

          {/* Global links */}
          <IconButton as="a" tooltip={t("My Showcase")} href={myshowcaseUrl}>
            <FiHome />
          </IconButton>
          <IconButton as="a" tooltip={t("My Shop")} href={"https://myshop.services.michelin.com/"}>
            <FiGrid />
          </IconButton>

          {/* Application links */}
          <IconButton
            as="a"
            tooltip={"Mobility Platform BO"}
            href="https://stbomobilityplatform001.z6.web.core.windows.net"
          >
            <ButtonIcon>
              <img
                src="https://stbomobilityplatform001.z6.web.core.windows.net/logo192.png"
                alt="Mobility Platform BackOffice logo"
              />
            </ButtonIcon>
          </IconButton>
          <IconButton
            as="a"
            tooltip={"My Inspection"}
            href="https://myinspection-bo-dev.azurewebsites.net"
          >
            <ButtonIcon>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/effidrive-967c0.appspot.com/o/application-launcher%2F61f8514e339ede3de5229a1a08883a9c.png?alt=media"
                alt="My Inspection"
              />
            </ButtonIcon>
          </IconButton>

          <Spacer />

          {/* Footer links */}
          {footerLinks &&
            footerLinks.map(({ label, icon, ...rest }, index) => (
              <IconButton as="a" key={index} tooltip={label} {...rest}>
                <CustomIcon as={ButtonIcon} content={icon} />
              </IconButton>
            ))}

          {/* Avatar button */}
          <IconButton as="button" aria-label={t("Open the menu")} onClick={onOpen}>
            {userInfo ? <Avatar src={userInfo.picture} size={22} /> : <FiLogIn />}
          </IconButton>
        </Content>
      </Container>

      {/* Extended container */}
      <Container variant="extended" aria-hidden={!isOpen}>
        <Logo />

        {/* Menu button */}
        <MenuButtonWrapper>
          <IconButton onClick={onClose} aria-label={t("Close the menu")}>
            <FiArrowLeft />
          </IconButton>
        </MenuButtonWrapper>

        <Content>
          {/* Global links */}
          <NavHeading>{t("Global")}</NavHeading>
          <Button as="a" href={myshowcaseUrl}>
            <ButtonIcon>
              <FiHome />
            </ButtonIcon>
            <ButtonText>{t("My Showcase")}</ButtonText>
          </Button>
          <Button as="a" href={"https://myshop.services.michelin.com/"}>
            <ButtonIcon>
              <FiGrid />
            </ButtonIcon>
            <ButtonText>{t("My Shop")}</ButtonText>
          </Button>

          {/* Application links */}
          {userInfo && (
            <Fragment>
              <NavHeading>{t("Apps")}</NavHeading>
              <Button as="a" href="https://stbomobilityplatform001.z6.web.core.windows.net">
                <ButtonIcon>
                  <img
                    src="https://stbomobilityplatform001.z6.web.core.windows.net/logo192.png"
                    alt="Mobility Platform back-office logo"
                  />
                </ButtonIcon>
                <ButtonText>Mobility Platform BO</ButtonText>
              </Button>
              <Button as="a" href="https://myinspection-bo-dev.azurewebsites.net">
                <ButtonIcon>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/effidrive-967c0.appspot.com/o/application-launcher%2F61f8514e339ede3de5229a1a08883a9c.png?alt=media"
                    alt="My Inspection"
                  />
                </ButtonIcon>
                <ButtonText>My Inspection</ButtonText>
              </Button>
            </Fragment>
          )}

          <Spacer />

          {/* Footer links */}
          {footerLinks && (
            <Fragment>
              <NavHeading>{t("Others")}</NavHeading>
              {footerLinks.map(({ label, icon, ...rest }, index) => (
                <Button as="a" key={index} {...rest}>
                  <ButtonIcon>
                    <CustomIcon content={icon} />
                  </ButtonIcon>
                  <ButtonText>{label}</ButtonText>
                </Button>
              ))}
            </Fragment>
          )}

          {!userInfo && (
            <Button as="a" href={logInUrl}>
              <ButtonIcon>
                <FiLogIn />
              </ButtonIcon>
              <ButtonText>{t("Login")}</ButtonText>
            </Button>
          )}
        </Content>

        {/* User profile */}
        {userInfo && (
          <UserProfileWrapper>
            <UserProfile
              avatar={<Avatar src={userInfo?.picture} size={40} />}
              name={userInfo?.name}
              link={`${backofficeUrl}/users/me`}
            />
          </UserProfileWrapper>
        )}
      </Container>
    </Fragment>
  );
};

export default VerticalNavigation;
