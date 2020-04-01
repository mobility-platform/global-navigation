import styled from "@emotion/styled-base";
import { h } from "preact";
import { useTranslation } from "../utils/i18n";

const UserProfileWrapper = styled("div")({
  display: "flex"
});

const UserInformation = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  marginLeft: "10px"
});

const UserName = styled("span")({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontWeight: "600",
  color: "currentColor"
});

const UserProfileLink = styled("a")({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontSize: "12px",
  opacity: 0.8,
  color: "currentColor",
  textDecoration: "none",
  "&:hover, &:focus": {
    textDecoration: "underline"
  }
});

const UserProfile = ({ children, title, link }) => {
  const t = useTranslation();
  return (
    <UserProfileWrapper>
      {children}
      <UserInformation>
        <UserName>{title}</UserName>
        <UserProfileLink href={link} rel="noopener nofollow">
          {t("View my profile")}
        </UserProfileLink>
      </UserInformation>
    </UserProfileWrapper>
  );
};

export default UserProfile;
