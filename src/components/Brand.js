import { setPragma, styled } from "goober";
import { h } from "preact";

setPragma(h);

const Wrapper = styled("div")(({ isCollapsed }) => ({
  display: "flex",
  alignItems: isCollapsed ? "flex-end" : "center",
  justifyContent: "center",
  width: '100%',
  height: '80px',
  overflow: "hidden"
}));

const Logo = styled("img")({
});

const CollapsedLogo = styled("img")({
});

const Brand = ({ logo, collapsedLogo, isCollapsed }) => {
  return (
    <Wrapper isCollapsed={isCollapsed}>
      {isCollapsed ? (
        <CollapsedLogo src={collapsedLogo} />
      ) : (
        <Logo src={logo} />
      )}
    </Wrapper>
  );
};

export default Brand;
