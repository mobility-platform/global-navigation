import { setPragma, styled } from "goober";
import { h, render } from "preact";
import VerticalNavigation from "./components/VerticalNavigation";

setPragma(h);

const Container = styled("div")({
  height: "100vh"
});

function App() {
  return (
    <Container>
      <VerticalNavigation />
    </Container>
  );
}

render(h(App), document.body);
