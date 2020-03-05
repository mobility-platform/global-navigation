import { setPragma, styled } from "goober";
import { h } from "preact";
import { withTheme } from "./Theme";

setPragma(h);

const Link = withTheme(
  styled("a")(({ theme }) => ({
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
    "&:hover": {
      color: "currentColor",
      "&::before": {
        opacity: "0.05"
      }
    }
  }))
);
export default Link;
