import styled from "@emotion/styled";
import { h } from "preact";
import Icon from "./Icon";
import Link from "./Link";
import CollapsedLink from "./CollapsedLink";

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  width: "100%"
});

const IconWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "20px",
  height: "20px",
  backgroundColor: "transparent",
  cursor: "pointer",
  color: "currentColor",
  fill: "currentColor",
  stroke: "currentColor",
  boxSizing: "border-box",
  "&:first-child": {
    position: "relative",
    width: "20px",
    height: "20px"
  }
});

const Text = styled("span")(({ hideIcons }) => ({
  margin: hideIcons ? "0" : "0 0 0 12px",
  color: "currentColor",
  fontSize: "14px"
}));

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

const Links = ({ data, isCollapsed, hideIcons, title }) => {
  return (
    <Wrapper>
      {data && title && !isCollapsed && <Title>{title}</Title>}
      {data &&
        data.map((link, index) => {
          const { icon, label, ...rest } = link;
          return isCollapsed ? (
            <Icon
              rel="noopener nofollow"
              as={CollapsedLink}
              key={index}
              tooltip={label}
              content={icon}
              {...rest}
            />
          ) : (
            <Link rel="noopener nofollow" key={index} {...rest}>
              {hideIcons ? null : <Icon as={IconWrapper} content={icon} />}
              <Text hideIcons={hideIcons}>{label}</Text>
            </Link>
          );
        })}
    </Wrapper>
  );
};

export default Links;
