import styled from "@emotion/styled-base";
import { h } from "preact";

const NavLinksWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  width: "100%"
});

const NavLinksTitle = styled("div")({
  margin: "0 0 8px 0",
  padding: "0 8px",
  fontSize: "11px",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  overflowX: "hidden",
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  opacity: "0.8"
});

const NavLinks = ({ title, children }) => {
  return (
    <NavLinksWrapper>
      {title && <NavLinksTitle>{title}</NavLinksTitle>}
      {children}
    </NavLinksWrapper>
  );
};

export default NavLinks;
