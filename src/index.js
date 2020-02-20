import { setPragma, styled } from "goober";
import { h, render } from "preact";

setPragma(h);

const Heading = styled("h1")(({ color }) => ({
  textAlign: "center",
  color
}));

function App() {
  return <Heading color="red">Hello World</Heading>;
}

render(h(App), document.body);
