import { setPragma, styled } from "goober";
import { h } from "preact";

setPragma(h);

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  padding: "0 8px"
});

const Link = styled("a")(({ isCollapsed }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: isCollapsed ? "center" : "flex-start",
  width: "100%",
  textDecoration: "none",
  color: "currentColor",
  boxSizing: "border-box",
  padding: isCollapsed ? "4px" : "8px",
  marginBottom: "4px",
  "&::before": {
    content: "''",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    borderRadius: "4px",
    backgroundColor: "rgba(0, 103, 255, .05)",
    opacity: "0"
  },
  "&:hover": {
    color: "currentColor",
    "&::before": {
      opacity: "1"
    }
  }
}));

const Icon = styled("div")({
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
  svg: {
    width: "20px",
    height: "20px"
  },
  i: {
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
      {title && !isCollapsed && <Title>{title}</Title>}
      {data &&
        data.map((link, index) => {
          return (
            <Link
              href={link.href}
              key={index}
              isCollapsed={isCollapsed}
              hideIcons={hideIcons}
            >
              {hideIcons && !isCollapsed ? null : <Icon>{link.icon}</Icon>}
              {isCollapsed ? null : (
                <Text hideIcons={hideIcons}>{link.label}</Text>
              )}
            </Link>
          );
        })}
    </Wrapper>
  );
};

export default Links;
