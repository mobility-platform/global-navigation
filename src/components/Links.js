import { setPragma, styled } from "goober";
import { h } from "preact";

setPragma(h);

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box"
});

const Link = styled("a")(({ isCollapsed }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: isCollapsed ? "center" : "flex-start",
  width: "100%",
  padding: "8px 8px",
  textDecoration: "none",
  color: "currentColor",
  boxSizing: "border-box",
  "&::before": {
    content: "''",
    position: "absolute",
    left: 0,
    top: 0,
    width: "4px",
    height: "100%",
    borderTopRightRadius: "2px",
    borderBottomRightRadius: "2px",
    transition: "100ms",
    backgroundColor: "#FCE500",
    opacity: 0
  },
  "&:hover": {
    "&::before": {
      opacity: 1
    }
  }
}));

const Icon = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "24px",
  height: "24px",
  margin: "0 8px",
  fill: "currentColor",
  stroke: "currentColor",
  boxSizing: "border-box"
});

const Text = styled("span")(({ hideIcons }) => ({
  margin: hideIcons ? "0 16px" : "0 8px",
  color: "currentColor",
  lineHeight: "24px"
}));

const Title = styled("div")({
  margin: "12px 16px 0 16px",
  padding: "8px 8px",
  overflowX: "hidden",
  fontSize: "10px",
  fontWeight: "600",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  textTransform: "uppercase",
  opacity: "0.7",
  boxSizing: "border-box",
});

const Links = ({ links, isCollapsed, hideIcons, title }) => {
  return (
    <Wrapper>
      {title && !isCollapsed && <Title>{title}</Title>}
      {links &&
        links.map((link, index) => {
          return (
            <Link
              href={link.href}
              key={index}
              isCollapsed={isCollapsed}
              hideIcons={hideIcons}
            >
              {hideIcons && !isCollapsed ? null : <Icon>{link.icon}</Icon>}
              {isCollapsed ? null : (
                <Text hideIcons={hideIcons}>{link.text}</Text>
              )}
            </Link>
          );
        })}
    </Wrapper>
  );
};

export default Links;
