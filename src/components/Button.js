import { keyframes } from "@emotion/core";
import styled from "@emotion/styled-base";
import { Text } from "./Text";

const fadeIn = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

export const Button = styled("button")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  textDecoration: "none",
  color: "currentColor",
  boxSizing: "border-box",
  padding: 8,
  marginBottom: 4,
  fontSize: 14,
  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 5,
    backgroundColor: theme.primary,
    opacity: 0,
  },
  "&:hover, &:focus": {
    outline: "none",
    color: "currentColor",
    textDecoration: "none",
    "&::before": {
      opacity: 0.05,
    },
  },
}));

Button.defaultProps = {
  rel: "noopener nofollow",
};

export const ButtonText = styled(Text)({
  fontSize: 14,
});

export const ButtonIcon = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 22,
  height: 22,
  backgroundColor: "transparent",
  cursor: "pointer",
  color: "currentColor",
  fill: "currentColor",
  stroke: "currentColor",
  boxSizing: "border-box",
  marginRight: 12,
  "&:last-child": {
    marginRight: 0,
  },
  "svg, img": {
    position: "relative",
    width: 22,
    height: 22,
  },
  img: {
    borderRadius: "50%",
    animationName: fadeIn,
    animationDuration: "225ms",
    animationTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  },
});
