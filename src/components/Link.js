import styled from "@emotion/styled-base";
import { Text } from "./Text";

const Link = styled(Text)({
  display: "inline",
  textDecoration: "none",
  color: "currentColor",
  fontSize: 12,
  "&:hover, &:focus": {
    outline: "none",
    textDecoration: "underline",
  },
});

Link.defaultProps = {
  as: "a",
  rel: "noopener nofollow",
};

export default Link;
