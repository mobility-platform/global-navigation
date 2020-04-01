import styled from "@emotion/styled-base";
import { h } from "preact";
import CollapsedLink from "./CollapsedLink";
import Link from "./Link";

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  width: "100%"
});

const ImageWrapper = styled("div")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "22px",
  height: "22px",
  overflow: "hidden",
  boxSizing: "border-box",
  borderRadius: "50%"
});

const Image = styled("img")({
  height: "22px"
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
            <CollapsedLink rel="noopener nofollow" href={link.url} key={index} tooltip={link.name}>
              <ImageWrapper>
                <Image src={link.icon} />
              </ImageWrapper>
            </CollapsedLink>
          ) : (
            <Link rel="noopener nofollow" href={link.url} key={index}>
              <ImageWrapper>
                <Image src={link.icon} />
              </ImageWrapper>
              <Text>{link.name}</Text>
            </Link>
          );
        })}
    </Wrapper>
  );
};

export default AppLinks;
