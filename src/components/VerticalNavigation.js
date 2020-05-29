import styled from "@emotion/styled-base";
import { Fragment, h } from "preact";
import { getContrastColor, isLight } from "../utils/color";
import { useTranslation } from "../utils/i18n";
import { FiArrowLeft, FiHome, FiMenu } from "../utils/SVG";
import useDisclosure from "../utils/useDisclosure";
import Avatar from "./Avatar";
import { Button, ButtonIcon, ButtonText } from "./Button";
import CustomIcon from "./CustomIcon";
import IconButton from "./IconButton";
import ImageSkeleton from "./ImageSkeleton";
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

const VerticalNavigation = ({ userInfo, footerLinks, backofficeUrl, myshowcaseUrl }) => {
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
            {userInfo ? <Avatar src={userInfo.picture} size={22} /> : <ImageSkeleton />}
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

          <Spacer />

          {/* Footer links */}
          {footerLinks && (
            <Fragment>
              <NavHeading>{t("Others")}</NavHeading>
              {footerLinks.map(({ label, ...rest }, index) => (
                <Button as="a" key={index} {...rest}>
                  <ButtonText>{label}</ButtonText>
                </Button>
              ))}
            </Fragment>
          )}
        </Content>

        {/* User profile */}
        <UserProfileWrapper>
          <UserProfile
            avatar={<Avatar src={userInfo?.picture} size={40} />}
            name={userInfo?.name}
            link={`${backofficeUrl}/users/me`}
          />
        </UserProfileWrapper>
      </Container>
    </Fragment>
  );
};

export default VerticalNavigation;
