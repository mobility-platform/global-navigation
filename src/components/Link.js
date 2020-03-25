import styled from "@emotion/styled";
import { h } from "preact";

const Link = styled("a")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  textDecoration: "none",
  color: "currentColor",
  boxSizing: "border-box",
  padding: "8px",
  marginBottom: "4px",
  "&::before": {
    content: "''",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    borderRadius: "4px",
    backgroundColor: theme.primary,
    opacity: "0"
  },
  "&:hover, &:focus": {
    color: "currentColor",
    "&::before": {
      opacity: "0.05"
    }
  }
}));
export default Link;
