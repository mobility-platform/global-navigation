import styled from "@emotion/styled-base";

const NavHeading = styled("span")({
  boxSizing: "border-box",
  display: "block",
  width: "100%",
  marginTop: 12,
  marginBottom: 8,
  paddingLeft: 8,
  paddingRight: 8,

  fontSize: "11px",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  overflow: "hidden",
  whiteSpace: "nowrap",
  opacity: 0.6,

  "&:first-child": {
    marginTop: 6
  }
});

export default NavHeading;
