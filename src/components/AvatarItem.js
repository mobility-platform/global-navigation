import { setPragma, styled } from "goober";
import { h } from "preact";

setPragma(h);

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

const AvatarItem = ({ children, title, linkLabel, ...rest }) => {
  return (
    <Wrapper>
      {children}
      <TextWrapper>
        <Title>{title}</Title>
        <Link {...rest}>{linkLabel}</Link>
      </TextWrapper>
    </Wrapper>
  );
};

export default AvatarItem;
