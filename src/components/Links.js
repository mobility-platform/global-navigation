import { setPragma, styled } from "goober";
import { h } from "preact";

setPragma(h);

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column"
});

const Link = styled("a")(({ isCollapsed }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: isCollapsed ? "center" : "start",
  width: "100%",
  margin: "12px 0",
  padding: "6px 0",
  textDecoration: "none",
  "&::before": {
    content: "''",
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "#FCE500",
    width: "3px",
    height: "100%",
    borderTopRightRadius: "2px",
    borderBottomRightRadius: "2px",
    transition: "100ms",
    opacity: 0
  },
  "&:hover": {
    "&::before": {
      opacity: 1
    }
  }
}));

const Icon = styled("div")({
  width: "16px",
  height: "16px",
  margin: "0 20px"
});

const Text = styled("span")(({ hideIcons }) => ({
  color: "#00205B",
  margin: hideIcons ? "0 20px" : "0",
}));

const Links = ({ links, isCollapsed, hideIcons }) => {
  return (
    <Wrapper>
      {links &&
        links.map((link, index) => {
          return (
            <Link href={link.href} key={index} isCollapsed={isCollapsed} hideIcons={hideIcons}>
              {hideIcons && !isCollapsed ? null : <Icon>{link.icon}</Icon>}
              {isCollapsed ? null : <Text hideIcons={hideIcons}>{link.text}</Text>}
            </Link>
          );
        })}
    </Wrapper>
  );
};

export default Links;
