import styled from "@emotion/styled-base";

const Link = styled("a")({
  display: "inline",
  textDecoration: "none",
  color: "currentColor",
  fontSize: "12px",
  "&:hover, &:focus": {
    outline: "none",
    textDecoration: "underline"
  }
});

Link.defaultProps = {
  rel: "noopener nofollow"
};

export default Link;
