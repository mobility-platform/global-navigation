import { setPragma, styled } from "goober";
import { h } from "preact";
import { withTheme } from "./Theme";
import isTextLegibleOverBackground from "../utils/isTextLegibleOverBackground";

setPragma(h);

const CollapsedLink = withTheme(
  styled("a")(({ theme, tooltip }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    backgroundColor: "transparent",
    borderRadius: "50%",
    cursor: "pointer",
    color: "currentColor",
    fill: "currentColor",
    stroke: "currentColor",
    boxSizing: "border-box",
    margin: "4px 0",
    "&::before": {
      content: "''",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      backgroundColor: isTextLegibleOverBackground("#ffffff", theme.background)
        ? "#333333"
        : "#ffffff",
      opacity: "0"
    },
    "&::after": {
      content: tooltip ? `"${tooltip}"` : "none",
      display: "inline-block",
      position: "absolute",
      top: "50%",
      left: "110%",
      transform: "translateY(-50%)",
      color: "#fff",
      backgroundColor: "#333",
      fontSize: "11px",
      fontWeight: "400",
      padding: "2px 4px",
      borderRadius: "4px",
      opacity: "0",
      transition: "100ms",
      pointerEvents: "none",
      overflowWrap: "normal",
      whiteSpace: "nowrap"
    },
    "&:hover": {
      "&::before": {
        opacity: "0.15"
      },
      "&::after": {
        opacity: "1"
      }
    },
    svg: {
      width: "20px",
      height: "20px"
    },
    i: {
      width: "20px",
      height: "20px"
    }
  }))
);

export default CollapsedLink;
