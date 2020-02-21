import { setPragma, styled } from "goober";
import { h } from "preact";

setPragma(h);

const Button = styled("a")(({ color, background }) => ({
  display: "block",
  width: "auto",
  padding: "10px 24px",
  borderRadius: "40px",
  textAlign: "center",
  color,
  background
}));

export default Button;
