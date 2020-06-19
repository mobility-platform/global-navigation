import { keyframes } from "@emotion/core";
import styled from "@emotion/styled-base";
import { isLight } from "../utils/color";

const skeletonAnimation = keyframes({
  "0%": {
    opacity: 0.25
  },
  "50%": {
    opacity: 0.05
  },
  "100%": {
    opacity: 0.25
  }
});

const ImageSkeleton = styled("span")(({ theme }) => ({
  position: "absolute",
  top: 8,
  left: 8,
  display: "block",
  animationName: skeletonAnimation,
  animationDuration: "1.5s",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
  borderRadius: "50%",
  height: 22,
  width: 22,
  backgroundColor: isLight(theme.primary) ? "#000" : "#fff",
  "@media (prefers-reduced-motion: reduce)": {
    animation: "none"
  }
}));

export default ImageSkeleton;
