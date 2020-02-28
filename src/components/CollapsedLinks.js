import { setPragma, styled } from "goober";
import { h } from "preact";

setPragma(h);

const Wrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  boxSizing: "border-box"
});

const Link = styled("a")(({ tooltip }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
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
    left: "120%",
    transform: "translateY(-50%)",
    backgroundColor: "#172b4d",
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
    backgroundColor: "#1c5ace",
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

const CollapsedLinks = ({ data }) => {
  return (
    <Wrapper>
      {data &&
        data.map((link, index) => {
          return (
            <Link href={link.href} key={index} tooltip={link.label}>
              {link.icon}
            </Link>
          );
        })}
    </Wrapper>
  );
};

export default CollapsedLinks;
