import styled from "@emotion/styled-base";

export const Link = styled("a")(({ theme }) => ({
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
  fontSize: "14px",
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

Link.defaultProps = {
  rel: "noopener nofollow"
};

export const LinkIcon = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "22px",
  height: "22px",
  backgroundColor: "transparent",
  cursor: "pointer",
  color: "currentColor",
  fill: "currentColor",
  stroke: "currentColor",
  boxSizing: "border-box",
  marginRight: 12,
  "&:last-child": {
    marginRight: 0
  },
  "svg, img": {
    position: "relative",
    width: "22px",
    height: "22px"
  },
  img: {
    borderRadius: "50%"
  }
});
