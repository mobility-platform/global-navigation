import styled from "@emotion/styled-base";
import { Fragment, h } from "preact";
import { getContrastColor, isLight } from "../utils/color";
import { ConfigurationProvider, useConfiguration } from "../utils/Configuration";
import { TranslationProvider, useTranslation } from "../utils/i18n";
import { FiArrowLeft, FiMenu } from "../utils/SVG";
import { ThemeProvider } from "../utils/Theme";
import useDisclosure from "../utils/useDisclosure";
import { UserInfoProvider, useUserInfo } from "../utils/UserInfo";
import { Button, ButtonIcon, ButtonText } from "./Button";
import CustomIcon from "./CustomIcon";
import IconButton from "./IconButton";
import Logo from "./Logo";
import NavHeading from "./NavHeading";
import { Notifications, NotificationsProvider } from "../utils/Notification";
import { CollapsedUserProfile, ExtendedUserProfile, LoginUserProfile } from "./UserProfile";

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

const ExtendedSections = () => {
  const configuration = useConfiguration();
  const userInfo = useUserInfo();
  const t = useTranslation();
  return (
    configuration &&
    configuration.sections
      .filter(section => (userInfo ? section : !section.requiresAuthentification))
      .map((section, index) => (
        <Fragment key={index}>
          {section.links
            .filter(application => (userInfo ? application : !application.requiresAuthentification))
            .map((link, index) => (
              <IconButton key={index} as="a" tooltip={t(link.title)} href={link.href}>
                <CustomIcon as={ButtonIcon} content={link.icon} />
              </IconButton>
            ))}
        </Fragment>
      ))
  );
};

const CollapsedSections = () => {
  const configuration = useConfiguration();
  const userInfo = useUserInfo();
  const t = useTranslation();
  return (
    configuration &&
    configuration.sections
      .filter(section => (userInfo ? section : !section.requiresAuthentification))
      .map((section, index) => (
        <Fragment key={index}>
          <NavHeading>{t(section.title)}</NavHeading>
          {section.links
            .filter(application => (userInfo ? application : !application.requiresAuthentification))
            .map((link, index) => (
              <Button key={index} as="a" href={link.href}>
                <CustomIcon as={ButtonIcon} content={link.icon} />
                <ButtonText>{t(link.title)}</ButtonText>
              </Button>
            ))}
        </Fragment>
      ))
  );
};

const VerticalNavigation = ({
  getToken,
  loginUrl,
  configurationUrl,
  preferredLanguage,
  footerLinks
}) => {
  if (!configurationUrl || !getToken || !loginUrl) {
    throw new Error(
      `Global Navigation requires the \`configurationUrl\`, \`loginUrl\` and \`getToken\` props. See https://mobility-platform-docs.netlify.com/`
    );
  }

  const t = useTranslation();
  const {
    isOpen: notificationIsOpen,
    onClose: notificationOnClose,
    onOpen: notificationOnOpen
  } = useDisclosure();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <ConfigurationProvider url={configurationUrl}>
      <TranslationProvider value={preferredLanguage}>
        <ThemeProvider getToken={getToken}>
          <UserInfoProvider getToken={getToken}>
            <NotificationsProvider getToken={getToken}>
              <Backdrop
                isVisible={isOpen}
                onClick={() => {
                  onClose();
                  notificationOnClose();
                }}
              />

              {/* Collapsed container */}
              <Container variant="collapsed" aria-hidden={isOpen}>
                <Logo />

                <Content>
                  {/* Menu button */}
                  <IconButton onClick={onOpen} aria-label={t("Open the menu")}>
                    <FiMenu />
                  </IconButton>

                  <ExtendedSections />
                  <Spacer />

                  {/* Footer links */}
                  {footerLinks &&
                    footerLinks.map(({ label, icon, ...rest }, index) => (
                      <IconButton as="a" key={index} tooltip={label} {...rest}>
                        <CustomIcon as={ButtonIcon} content={icon} />
                      </IconButton>
                    ))}

                  <CollapsedUserProfile onClick={onOpen} />
                </Content>
              </Container>

              {/* Extended container */}
              <Container variant="extended" aria-hidden={!isOpen}>
                <Logo />

                {/* Menu button */}
                <MenuButtonWrapper>
                  <IconButton
                    onClick={() => {
                      onClose();
                      notificationOnClose();
                    }}
                    aria-label={t("Close the menu")}
                  >
                    <FiArrowLeft />
                  </IconButton>
                </MenuButtonWrapper>

                {notificationIsOpen ? (
                  <Notifications getToken={getToken} />
                ) : (
                  <Content style={{ display: notificationIsOpen ? "none" : "flex" }}>
                    <CollapsedSections />

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

                    <LoginUserProfile loginUrl={loginUrl} />
                  </Content>
                )}
                <ExtendedUserProfile
                  onClick={notificationIsOpen ? notificationOnClose : notificationOnOpen}
                  notificationIsOpen={notificationIsOpen}
                />
              </Container>
            </NotificationsProvider>
          </UserInfoProvider>
        </ThemeProvider>
      </TranslationProvider>
    </ConfigurationProvider>
  );
};

export default VerticalNavigation;
