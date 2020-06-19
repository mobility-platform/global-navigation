import styled from "@emotion/styled-base";
import { h, Fragment } from "preact";
import { useTranslation } from "../utils/i18n";
import Link from "./Link";
import { Text } from "./Text";
import { useUserInfo } from "../utils/UserInfo";
import Avatar from "./Avatar";
import IconButton from "./IconButton";
import { FiBell, FiUser } from "../utils/SVG";
import { NotificationIndicator } from "../utils/Notification";
import { useConfiguration } from "../utils/Configuration";
import { Button, ButtonIcon, ButtonText } from "./Button";
import { isLight } from "../utils/color";

const UserProfileWrapper = styled("div")({
  display: "flex"
});

const ExtendedUserProfileWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 10,
  borderTop: isLight(theme.background)
    ? "1px solid rgba(0, 0, 0, .1)"
    : "1px solid rgba(255, 255, 255, .1)"
}));

const UserInformation = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginLeft: 10,
  overflow: "hidden",
  width: "100%"
});

const UserName = styled(Text)({
  width: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontWeight: "600",
  color: "currentColor"
});

const UserProfileLink = styled(Link)({
  opacity: 0.8
});

const UserProfile = ({ avatar, name, link }) => {
  const t = useTranslation();
  return (
    <UserProfileWrapper>
      {avatar}
      <UserInformation>
        <UserName>{name}</UserName>
        <UserProfileLink href={link} rel="noopener nofollow">
          {t("View my profile")}
        </UserProfileLink>
      </UserInformation>
    </UserProfileWrapper>
  );
};

export const CollapsedUserProfile = ({ onClick, loginUrl }) => {
  const userInfo = useUserInfo();
  const t = useTranslation();
  if (userInfo) {
    return (
      <IconButton as="button" aria-label={t("Open the menu")} onClick={onClick}>
        <Avatar src={userInfo.picture} size={22} />
        <NotificationIndicator />
      </IconButton>
    );
  } else {
    return (
      loginUrl && (
        <IconButton as="button" aria-label={t("Open the menu")} onClick={onClick}>
          <FiUser />
        </IconButton>
      )
    );
  }
};

export const ExtendedUserProfile = ({ onClick, notificationIsOpen }) => {
  const userInfo = useUserInfo();
  const configuration = useConfiguration();
  const t = useTranslation();
  return (
    userInfo && (
      <ExtendedUserProfileWrapper>
        <UserProfile
          avatar={<Avatar src={userInfo?.picture} size={40} />}
          name={userInfo?.name}
          link={configuration?.profileUrl}
        />
        <div>
          <IconButton onClick={onClick} aria-label={t("Open the notification")}>
            <FiBell style={{ fill: notificationIsOpen ? "currentColor" : "none" }} />
            <NotificationIndicator />
          </IconButton>
        </div>
      </ExtendedUserProfileWrapper>
    )
  );
};

export const LoginUserProfile = ({ loginUrl }) => {
  const userInfo = useUserInfo();
  const t = useTranslation();
  return (
    !userInfo && (
      <Button as="a" href={loginUrl}>
        <ButtonIcon>
          <FiUser />
        </ButtonIcon>
        <ButtonText>{t("Login")}</ButtonText>
      </Button>
    )
  );
};

export default UserProfile;
