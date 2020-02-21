import { setPragma, styled } from "goober";
import { h } from "preact";
import { useState } from "preact/hooks";
import Burger from "./Burger";

setPragma(h);

const Layout = styled("div")(({ width }) => ({
  background: "#f5f5f5",
  height: "100%",
  width,
  transition: "200ms"
}));

const VerticalNavigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigationWidth = isCollapsed ? "80px" : "200px";
  return (
    <Layout width={navigationWidth}>
      <Burger
        isCollapsed={isCollapsed}
        handler={() => {
          setIsCollapsed(isCollapsed ? false : true);
        }}
      />
    </Layout>
  );
};

export default VerticalNavigation;
