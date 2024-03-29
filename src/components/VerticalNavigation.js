import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/core";
import styled from "@emotion/styled-base";
import { Fragment, h } from "preact";
import { useCallback } from "preact/hooks";
import extraScopePlugin from "stylis-plugin-extra-scope";
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
import { Notifications, NotificationsProvider } from "./Notification";
import { CollapsedUserProfile, ExtendedUserProfile, LoginUserProfile } from "./UserProfile";

const Spacer = styled("div")({
  flex: 1,
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
      visibility: "hidden",
    },
  },
  ({ variant, theme }) =>
    variant === "collapsed" && {
      alignItems: "center",
      maxWidth: 60,
      background: theme.primary,
      color: getContrastColor(theme.primary),
    },
  ({ variant, theme }) =>
    variant === "extended" && {
      maxWidth: 320,
      width: "100vw",
      background: theme.background,
      color: getContrastColor(theme.background),
      "&[aria-hidden=true]": {
        transform: "translateX(-100%)",
      },
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
    pointerEvents: "none",
  },
  ({ isVisible }) =>
    isVisible && {
      opacity: 1,
      pointerEvents: "auto",
    }
);

const MenuButtonWrapper = styled("div")(({ theme }) => ({
  padding: 10,
  borderTop: isLight(theme.background)
    ? "1px solid rgba(0, 0, 0, .1)"
    : "1px solid rgba(255, 255, 255, .1)",
  borderBottom: isLight(theme.background)
    ? "1px solid rgba(0, 0, 0, .1)"
    : "1px solid rgba(255, 255, 255, .1)",
}));

const Content = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 10,
});

const CollapsedSections = () => {
  const configuration = useConfiguration();
  const userInfo = useUserInfo();
  const t = useTranslation();
  return (
    configuration &&
    configuration.sections
      .filter((section) => (userInfo ? section : !section.requiresAuthentification))
      .map((section, index) => (
        <Fragment key={index}>
          {section.links
            .filter((application) =>
              userInfo ? application : !application.requiresAuthentification
            )
            .map((link, index) => (
              <IconButton
                key={index}
                as="a"
                rel="noopener nofollow"
                target="_blank"
                tooltip={t(link.title)}
                href={link.href}
              >
                <CustomIcon as={ButtonIcon} content={link.icon} />
              </IconButton>
            ))}
        </Fragment>
      ))
  );
};

const ExtendedSections = () => {
  const configuration = useConfiguration();
  const userInfo = useUserInfo();
  const t = useTranslation();
  return (
    configuration &&
    configuration.sections
      .filter((section) => (userInfo ? section : !section.requiresAuthentification))
      .map((section, index) => (
        <Fragment key={index}>
          <NavHeading>{t(section.title)}</NavHeading>
          {section.links
            .filter((application) =>
              userInfo ? application : !application.requiresAuthentification
            )
            .map((link, index) => (
              <Button key={index} as="a" rel="noopener nofollow" target="_blank" href={link.href}>
                <CustomIcon as={ButtonIcon} content={link.icon} />
                <ButtonText>{t(link.title)}</ButtonText>
              </Button>
            ))}
        </Fragment>
      ))
  );
};

const CollapsedFooterLinks = () => {
  const t = useTranslation();
  const configuration = useConfiguration();
  const footerLinks = configuration?.footerLinks;
  return footerLinks
    ? footerLinks.map(({ label, icon, ...rest }, index) => (
        <IconButton key={index} as="a" rel="noopener nofollow" tooltip={t(label)} {...rest}>
          <CustomIcon as={ButtonIcon} content={icon} />
        </IconButton>
      ))
    : null;
};

const ExtendedFooterLinks = () => {
  const t = useTranslation();
  const configuration = useConfiguration();
  const footerLinks = configuration?.footerLinks;
  return footerLinks ? (
    <Fragment>
      <NavHeading>{t("Others")}</NavHeading>
      {footerLinks.map(({ label, icon, ...rest }, index) => (
        <Button key={index} as="a" rel="noopener nofollow" {...rest}>
          <ButtonIcon>
            <CustomIcon content={icon} />
          </ButtonIcon>
          <ButtonText>{t(label)}</ButtonText>
        </Button>
      ))}
    </Fragment>
  ) : null;
};

const cache = createCache({
  stylisPlugins: [extraScopePlugin(".mpgn")],
});

const VerticalNavigation = ({ getToken, loginUrl, configurationUrl, preferredLanguage }) => {
  if (!configurationUrl || !getToken) {
    throw new Error(
      `Global Navigation requires the \`configurationUrl\` and \`getToken\` props. See https://mobility-platform-docs.netlify.com/`
    );
  }

  const t = useTranslation();
  const {
    isOpen: notificationIsOpen,
    onClose: notificationOnClose,
    onToggle: notificationOnToggle,
  } = useDisclosure();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const close = useCallback(() => {
    onClose();
    notificationOnClose();
  }, [onClose, notificationOnClose]);

  return (
    <div className="mpgn">
      <CacheProvider value={cache}>
        <ConfigurationProvider url={configurationUrl}>
          <TranslationProvider value={preferredLanguage}>
            <ThemeProvider getToken={getToken}>
              <UserInfoProvider getToken={getToken}>
                <NotificationsProvider getToken={getToken}>
                  <Backdrop isVisible={isOpen} onClick={close} data-testid="backdrop" />

                  {/* Collapsed container */}
                  <Container
                    variant="collapsed"
                    aria-hidden={isOpen ? "true" : "false"}
                    aria-label={t("Collapsed global navigation")}
                  >
                    <Logo />

                    <Content>
                      {/* Menu button */}
                      <IconButton onClick={onOpen} aria-label={t("Open the menu")}>
                        <FiMenu />
                      </IconButton>

                      {/* Main content */}
                      <CollapsedSections />
                      <Spacer />
                      <CollapsedFooterLinks />

                      {/* User profiles */}
                      <CollapsedUserProfile loginUrl={loginUrl} onClick={onOpen} />
                    </Content>
                  </Container>

                  {/* Extended container */}
                  <Container
                    variant="extended"
                    aria-hidden={isOpen ? "false" : "true"}
                    aria-label={t("Extended global navigation")}
                  >
                    <Logo />

                    {/* Menu button */}
                    <MenuButtonWrapper>
                      <IconButton onClick={close} aria-label={t("Close the menu")}>
                        <FiArrowLeft />
                      </IconButton>
                    </MenuButtonWrapper>

                    {/* Main content of the sidenav, toggles between links and notifications */}
                    {notificationIsOpen ? (
                      <Notifications getToken={getToken} />
                    ) : (
                      <Content style={{ display: notificationIsOpen ? "none" : "flex" }}>
                        <ExtendedSections />
                        <Spacer />
                        <ExtendedFooterLinks />
                        {loginUrl && <LoginUserProfile loginUrl={loginUrl} />}
                      </Content>
                    )}

                    {/* User profile */}
                    <ExtendedUserProfile onClick={notificationOnToggle} />
                  </Container>
                </NotificationsProvider>
              </UserInfoProvider>
            </ThemeProvider>
          </TranslationProvider>
        </ConfigurationProvider>
      </CacheProvider>
    </div>
  );
};

export default VerticalNavigation;
