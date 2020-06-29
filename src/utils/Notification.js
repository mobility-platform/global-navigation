import styled from "@emotion/styled-base";
import { createContext, Fragment, h } from "preact";
import { useCallback, useContext, useEffect, useState } from "preact/hooks";
import { ButtonIcon } from "../components/Button";
import { Text } from "../components/Text";
import { useLanguage, useTranslation } from "../utils/i18n";
import { isLight } from "./color";
import { useConfiguration } from "./Configuration";
import { FiInbox } from "./SVG";
import { timeSince } from "./timesince";

export const NotificationIndicatorWrapper = styled("div")(({ number }) => ({
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
    color: "#ffffff",
  },
}));

export const NotificationIndicator = () => {
  const notifications = useNotifications();
  return (
    <NotificationIndicatorWrapper
      number={
        notifications ? notifications.filter((notification) => !notification.isRead).length : null
      }
    />
  );
};

const Content = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Title = styled(Text)({
  boxSizing: "border-box",
  display: "block",
  marginTop: 8,
  marginBottom: 8,
  paddingLeft: 10,
  paddingRight: 10,
  fontSize: 11,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  overflow: "hidden",
  whiteSpace: "nowrap",
  opacity: 0.6,
});

const Action = styled(Text)(({ theme }) => ({
  boxSizing: "border-box",
  display: "block",
  marginTop: 8,
  marginBottom: 8,
  paddingLeft: 10,
  paddingRight: 10,
  border: 0,
  boxShadow: "none",
  fontSize: 12,
  background: "none",
  color: theme.primary,
  opacity: 0.7,
  ":hover": {
    cursor: "pointer",
    opacity: 1,
  },
}));

const NotificationsWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flex: "1",
  flexDirection: "column",
  backgroundColor: isLight(theme.background) ? "rgba(0, 0, 0, .1)" : "rgba(255, 255, 255, .1)",
  "&:last-child": {
    "&:after": {
      content: "none",
    },
  },
}));

const NotificationWrapper = styled("a")(({ isRead, theme }) => ({
  border: "none",
  outline: "inherit",
  textAlign: "left",
  position: "relative",
  width: "100%",
  textDecoration: "none",
  color: "currentColor",
  boxSizing: "border-box",
  padding: 16,
  fontSize: 14,
  opacity: isRead ? 0.6 : 1,
  backgroundColor: theme.background,
  borderTop: isLight(theme.background)
    ? "1px solid rgba(0, 0, 0, .1)"
    : "1px solid rgba(255, 255, 255, .1)",
  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    // backgroundColor: isRead ? "transparent" : theme.primary,
    opacity: 0.05,
  },
  "&:hover, &:focus": {
    cursor: "pointer",
    outline: "none",
    color: "currentColor",
    textDecoration: "none",
    opacity: 1,
  },
}));

const NotificationHeader = styled("div")(({ isRead }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  marginBottom: 6,
  fontWeight: isRead ? "400" : "700",
}));

const NotificationTitle = styled(Text)({
  boxSizing: "border-box",
  border: 0,
  boxShadow: "none",
  fontSize: 12,
  background: "none",
  opacity: 1,
});

const NotificationTime = styled(Text)({
  boxSizing: "border-box",
  border: 0,
  boxShadow: "none",
  fontSize: 12,
  background: "none",
  opacity: 1,
  paddingLeft: 6,
});

const NotificationBody = styled("p")({
  fontSize: "14px",
  margin: 0,
  padding: 0,
  maxHeight: 60,
  overflow: "hidden",
  WebkitLineClamp: 3,
});

const EmptyState = styled("div")({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  paddingLeft: 8,
  paddingRight: 8,
  opacity: "0.8",
  svg: {
    width: "80px",
    height: "80px",
    strokeWidth: "1px",
    opacity: "0.8",
  },
});

const patchNotifications = (getToken, configuration, notifications) => {
  return getToken().then((token) =>
    Promise.all(
      notifications
        .filter((notifications) => !notifications.isRead)
        .map((notification) =>
          fetch(`${configuration.notificationsApiUrl}/${notification._id}`, {
            headers: { Authorization: `Bearer ${token}`, "content-type": "application/json" },
            method: "PATCH",
            body: JSON.stringify({ isRead: true }),
          })
        )
    )
  );
};

const Notification = ({ getToken, configuration, notification }) => {
  const notificationsRefetch = useNotificationsRefetch();
  return (
    <NotificationWrapper
      onClick={() => {
        patchNotifications(getToken, configuration, [notification]).then(notificationsRefetch);
      }}
      href={notification.target}
      target="_blank"
      isRead={notification.isRead}
    >
      <NotificationHeader isRead={notification.isRead}>
        <ButtonIcon>
          <img src={notification.icon} alt={notification.title} />
        </ButtonIcon>
        <NotificationTitle>{notification.title}</NotificationTitle>{" "}
        <NotificationTime>{timeSince(notification.createdAt)}</NotificationTime>
      </NotificationHeader>
      <NotificationBody>{notification.body}</NotificationBody>
    </NotificationWrapper>
  );
};

export const Notifications = ({ getToken }) => {
  const t = useTranslation();
  const notifications = useNotifications();
  const notificationsRefetch = useNotificationsRefetch();
  const configuration = useConfiguration();
  return (
    <Content>
      {configuration && notifications && notifications?.length > 0 ? (
        <Fragment>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <Title>{t("Notifications")}</Title>
            <Action
              as="button"
              onClick={() => {
                patchNotifications(getToken, configuration, notifications).then(
                  notificationsRefetch
                );
              }}
            >
              {t("Mark all as read")}
            </Action>
          </div>
          <NotificationsWrapper>
            {notifications.map((notification, index) => (
              <Notification
                key={index}
                notification={notification}
                getToken={getToken}
                configuration={configuration}
              />
            ))}
          </NotificationsWrapper>
        </Fragment>
      ) : (
        <EmptyState>
          <FiInbox />
          <Text>{t("You currently have no notifications")}</Text>
        </EmptyState>
      )}
    </Content>
  );
};

const NotificationsContext = createContext();

export const NotificationsProvider = ({ getToken, children }) => {
  const configuration = useConfiguration();
  const language = useLanguage();
  const notificationState = useFetchNotifications(getToken, configuration, language);
  return (
    <NotificationsContext.Provider value={notificationState}>
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => {
  const { notifications } = useContext(NotificationsContext);
  return notifications;
};

export const useNotificationsRefetch = () => {
  const { refetch } = useContext(NotificationsContext);
  return refetch;
};

const useFetchNotifications = (getToken, configuration, language) => {
  const [state, setState] = useState(null);

  const refetch = useCallback(() => {
    if (configuration && language) {
      getToken()
        .then((token) =>
          fetch(`${configuration.notificationsApiUrl}?language=${language}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
        )
        .then((response) => response.json())
        .then(setState);
    }
  }, [configuration, getToken, language]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { notifications: state, refetch };
};
