import styled from "@emotion/styled";
import { h } from "preact";
import Link from "./Link";
import CollapsedLink from "./CollapsedLink";

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  width: "100%"
});

const Image = styled("img")({
  position: "relative",
  width: "20px",
  height: "20px",
  objectFit: "cover",
  boxSizing: "border-box"
});

const Text = styled("span")({
  margin: "0 0 0 12px",
  color: "currentColor",
  fontSize: "14px"
});

const Title = styled("div")({
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

const AppLinks = ({ data, isCollapsed, title }) => {
  return (
    <Wrapper>
      {data && title && !isCollapsed && <Title>{title}</Title>}
      {data &&
        data.map((link, index) => {
          return isCollapsed ? (
            <CollapsedLink href={link.href} key={index} tooltip={link.name}>
              <Image src={link.icon} />
            </CollapsedLink>
          ) : (
            <Link href={link.href} key={index}>
              <Image src={link.icon} />
              <Text>{link.name}</Text>
            </Link>
          );
        })}
    </Wrapper>
  );
};

export default AppLinks;
