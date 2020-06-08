import styled from "@emotion/styled-base";
import { h } from "preact";
import { useTranslation } from "../utils/i18n";
import { ButtonIcon } from "./Button";
import { Text } from "./Text";

export const NotificationIndicator = styled("div")(({ number }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  "&::before": {
    content: number ? `"${number}"` : "none",
    position: "absolute",
    top: 0,
    right: 0,
    padding: 0,
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    fontSize: "10px",
    fontWeight: "700",
    textAlign: "center",
    lineHeight: "16px",
    backgroundColor: "#fd7b6f",
    color: "#ffffff"
  }
}));

const Content = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 10
});

const Title = styled(Text)({
  boxSizing: "border-box",
  display: "block",
  marginTop: 6,
  marginBottom: 8,
  paddingLeft: 8,
  paddingRight: 8,
  fontSize: 11,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  overflow: "hidden",
  whiteSpace: "nowrap",
  opacity: 0.6
});

const Action = styled(Text)(({ theme }) => ({
  boxSizing: "border-box",
  display: "block",
  marginTop: 6,
  marginBottom: 8,
  paddingLeft: 8,
  paddingRight: 8,
  border: 0,
  boxShadow: "none",
  fontSize: 12,
  background: "none",
  color: theme.primary,
  opacity: 0.7,
  ":hover": {
    cursor: "pointer",
    opacity: 1
  }
}));

const NotificationWrapper = styled("div")(({ isRead, theme }) => ({
  position: "relative",
  width: "100%",
  textDecoration: "none",
  color: "currentColor",
  boxSizing: "border-box",
  padding: 8,
  marginBottom: 8,
  fontSize: 14,
  opacity: isRead ? 0.9 : 1,
  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderTop: `1px solid ${theme.primary}`,
    opacity: 0.2
  },
  "&::after": {
    content: "''",
    position: "absolute",
    top: 10,
    right: 10,
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: theme.primary,
    opacity: isRead ? 0 : 1
  },
  "&:hover, &:focus": {
    outline: "none",
    color: "currentColor",
    textDecoration: "none"
  }
}));

const NotificationTitle = styled(Text)({
  boxSizing: "border-box",
  border: 0,
  boxShadow: "none",
  fontSize: 12,
  background: "none",
  opacity: 0.9,
  ":hover": {
    cursor: "pointer",
    opacity: 1
  }
});

const NotificationBody = styled(Text)({
  fontSize: "14px"
});

const Notification = ({ notification }) => {
  return (
    <NotificationWrapper isRead={notification._id}>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          marginBottom: 12
        }}
      >
        <ButtonIcon>
          <img src={notification.icon} alt={notification.title} />
        </ButtonIcon>
        <NotificationTitle>{notification.title}</NotificationTitle>
      </div>
      <NotificationBody>{notification.body}</NotificationBody>
    </NotificationWrapper>
  );
};

export const Notifications = ({ notifications }) => {
  const t = useTranslation();
  return (
    <Content>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        <Title>{t("Notifications")}</Title>
        <Action as="button">{t("Mark all as read")}</Action>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          paddingLeft: 8,
          paddingRight: 8
        }}
      >
        {notifications.map((notification, index) => (
          <Notification key={index} notification={notification} />
        ))}
      </div>
    </Content>
  );
};
