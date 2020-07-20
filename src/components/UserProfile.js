import styled from "@emotion/styled-base";
import { h } from "preact";
import { isLight } from "../utils/color";
import { useConfiguration } from "../utils/Configuration";
import { useTranslation } from "../utils/i18n";
import { FiBell, FiUser } from "../utils/SVG";
import { useUserInfo } from "../utils/UserInfo";
import Avatar from "./Avatar";
import { Button, ButtonIcon, ButtonText } from "./Button";
import IconButton from "./IconButton";
import { NotificationIndicator } from "./Notification";
import { Text } from "./Text";

const UserProfileWrapper = styled("div")({
  display: "flex",
});

const ExtendedUserProfileWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 10,
  borderTop: isLight(theme.background)
    ? "1px solid rgba(0, 0, 0, .1)"
    : "1px solid rgba(255, 255, 255, .1)",
}));

const UserInformation = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginLeft: 10,
  overflow: "hidden",
  width: "100%",
});

const UserName = styled(Text)({
  width: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontWeight: "600",
  color: "currentColor",
});

const UserProfileLink = styled(Text)({
  display: "inline",
  textDecoration: "none",
  color: "currentColor",
  fontSize: 12,
  opacity: 0.8,
  "&:hover, &:focus": {
    outline: "none",
    textDecoration: "underline",
  },
});

const UserProfile = ({ avatar, name, link }) => {
  const t = useTranslation();
  return (
    <UserProfileWrapper>
      {avatar}
      <UserInformation>
        <UserName>{name}</UserName>
        <UserProfileLink as="a" href={link} rel="noopener nofollow" target="_blank">
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
      <IconButton aria-label={t("Open the menu")} onClick={onClick}>
        <Avatar src={userInfo.picture} size={22} />
        <NotificationIndicator />
      </IconButton>
    );
  } else {
    return (
      loginUrl && (
        <IconButton aria-label={t("Open the menu")} onClick={onClick}>
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
      <Button as="a" rel="noopener nofollow" href={loginUrl} target="_blank">
        <ButtonIcon>
          <FiUser />
        </ButtonIcon>
        <ButtonText>{t("Login")}</ButtonText>
      </Button>
    )
  );
};

export default UserProfile;
