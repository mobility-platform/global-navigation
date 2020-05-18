import styled from "@emotion/styled-base";
import { h } from "preact";
import { useTranslation } from "../utils/i18n";
import Link from "./Link";
import { Text } from "./Text";

const UserProfileWrapper = styled("div")({
  display: "flex"
});

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

export default UserProfile;
