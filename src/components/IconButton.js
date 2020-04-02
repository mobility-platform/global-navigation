import styled from "@emotion/styled-base";

const IconButton = styled("button")(({ tooltip }) => ({
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
  padding: 0,
  border: 0,
  textDecoration: "none",
  "&::before": {
    content: "''",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    backgroundColor: "currentColor",
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
    transition: "opacity 125ms cubic-bezier(0.4, 0.0, 0.2, 1)",
    pointerEvents: "none",
    overflowWrap: "normal",
    whiteSpace: "nowrap",
    textDecoration: "none"
  },
  "&:hover, &:focus": {
    outline: "none",
    "&::before": {
      opacity: "0.15"
    },
    "&::after": {
      opacity: "1"
    }
  },
  "svg, i": {
    width: 22,
    height: 22
  }
}));

IconButton.defaultProps = {
  rel: "noopener nofollow"
};

export default IconButton;
