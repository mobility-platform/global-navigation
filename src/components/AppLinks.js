import { setPragma, styled } from "goober";
import { h } from "preact";
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
      {title && !isCollapsed && <Title>{title}</Title>}
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
