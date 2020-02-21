import { setPragma, styled } from "goober";
import { h, render } from "preact";
import VerticalNavigation from "./components/VerticalNavigation";

setPragma(h);

const Container = styled("div")({
  height: "100vh",
  fontFamily: "sans-serif"
});

document.querySelector("body").style.margin = 0;

function App() {
  return (
    <Container>
      <VerticalNavigation />
    </Container>
      /* <Burger />
    <BrandSection>
      <Logo />
    </BrandSection>
    <ProfileSection>
      <AvatarItem />
    </ProfileSection>
    <UserLinks>

    </UserLinks>
    <AppsList>
      <Links />
    </AppsList>
    <NavigationFooter>
      <Links />
    </NavigationFooter> */
  );
}

render(h(App), document.body);
