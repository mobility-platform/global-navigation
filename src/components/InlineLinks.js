import styled from "@emotion/styled-base";
import { h } from "preact";
import isTextLegibleOverBackground from "../utils/isTextLegibleOverBackground";

const InlineLinksWrapper = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  width: "100%",
  padding: "8px",
  color: "currentColor",
  opacity: "0.8",
  borderTop: isTextLegibleOverBackground("#ffffff", theme.background)
    ? "1px solid rgba(255, 255, 255, .1)"
    : "1px solid rgba(0, 0, 0, .1)"
}));

export const InlineLink = styled("a")({
  display: "inline-block",
  textDecoration: "none",
  color: "currentColor",
  fontSize: "12px",
  "&:hover, &:focus": {
    textDecoration: "underline"
  }
});

InlineLink.defaultProps = {
  rel: "noopener nofollow"
};

const InlineLinks = ({ children }) => {
  return <InlineLinksWrapper>{children}</InlineLinksWrapper>;
};

export default InlineLinks;
