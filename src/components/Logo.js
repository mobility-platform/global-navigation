import styled from "@emotion/styled-base";
import { h } from "preact";
import { MichelinLogo } from "../utils/SVG";

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: 80,
  overflow: "hidden",
  boxSizing: "border-box",
  backgroundColor: theme.background,
  padding: 6,
  svg: {
    height: "100%",
  },
}));

const Logo = () => {
  return (
    <Wrapper>
      <MichelinLogo />
    </Wrapper>
  );
};

export default Logo;
