import { setPragma, styled } from "goober";
import { h } from "preact";
import Icon from "./Icon";
import { withTheme } from "./Theme";

setPragma(h);

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  padding: "0 8px"
});

const Link = withTheme(
  styled("a")(({ theme }) => ({
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
    "&:hover": {
      color: "currentColor",
      "&::before": {
        opacity: "0.05"
      }
    }
  }))
);

const CollapsedLink = styled("a")(({ tooltip }) => ({
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
  "&::after": {
    content: `"${tooltip}"`,
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
    transition: "100ms",
    pointerEvents: "none",
    overflowWrap: "normal",
    whiteSpace: "nowrap"
  },
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, .3)",
    "&::after": {
      opacity: "1"
    }
  },
  svg: {
    width: "20px",
    height: "20px"
  },
  i: {
    width: "20px",
    height: "20px"
  }
}));

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
          const { icon, label, ...rest } = link;
          return isCollapsed ? (
            <Icon
              as={CollapsedLink}
              key={index}
              tooltip={label}
              content={icon}
              {...rest}
            />
          ) : (
            <Link key={index} {...rest}>
              {hideIcons ? null : <Icon as={IconWrapper} content={icon} />}
              <Text hideIcons={hideIcons}>{label}</Text>
            </Link>
          );
        })}
    </Wrapper>
  );
};

export default Links;
