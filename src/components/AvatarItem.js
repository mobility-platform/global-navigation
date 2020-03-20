import styled from "@emotion/styled";
import { h } from "preact";
import { useTranslation } from "../utils/i18n";

const Wrapper = styled("div")({
  display: "flex"
});

const TextWrapper = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  marginLeft: "10px"
});

const Title = styled("span")({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontWeight: "600",
  color: "currentColor"
});

const Link = styled("a")({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontSize: "12px",
  opacity: 0.8,
  color: "currentColor",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline"
  }
});

const AvatarItem = ({ children, title, link }) => {
  const { label, ...rest } = link;
  const t = useTranslation();
  return (
    <Wrapper>
      {children}
      <TextWrapper>
        <Title>{title}</Title>
        <Link rel="noopener nofollow" {...rest}>
          {t(label)}
        </Link>
      </TextWrapper>
    </Wrapper>
  );
};

export default AvatarItem;
