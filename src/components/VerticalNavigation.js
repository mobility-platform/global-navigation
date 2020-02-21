import { setPragma, styled } from "goober";
import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import Burger from "./Burger";
import Brand from "./Brand";
import AvatarItem from "./AvatarItem";
import Avatar from "./Avatar";
import Button from "./Button";
import Links from "./Links";

setPragma(h);

const userLinksData = [
  {
    href: "#",
    text: "My Home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="17"
        fill="none"
        viewBox="0 0 16 17"
      >
        <defs />
        <path
          stroke="#00205B"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 6.3L8 1l7 5.3v8.2c0 .8-.7 1.5-1.6 1.5H2.6c-.9 0-1.6-.7-1.6-1.5V6.2z"
          clip-rule="evenodd"
        />
      </svg>
    )
  },
  {
    href: "#",
    text: "My Organization",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="17"
        fill="none"
        viewBox="0 0 16 17"
      >
        <defs />
        <path
          stroke="#00205B"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12.3 5.5a2.3 2.3 0 100-4.5 2.3 2.3 0 000 4.5zM3.3 10.8a2.3 2.3 0 100-4.6 2.3 2.3 0 000 4.5zM12.3 16a2.3 2.3 0 100-4.5 2.3 2.3 0 000 4.5z"
          clip-rule="evenodd"
        />
        <path
          stroke="#00205B"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5.2 9.6l5.1 3M10.3 4.4l-5.1 3"
        />
      </svg>
    )
  }
];

const footerLinksData = [
  {
    link: "#",
    text: "Developers",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="12"
        fill="none"
        viewBox="0 0 19 12"
      >
        <defs />
        <path
          stroke="#00205B"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 11l5-5-5-5M6 1L1 6l5 5"
        />
      </svg>
    )
  },
  {
    link: "#",
    text: "Terms of use",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 18 18"
      >
        <defs />
        <path
          stroke="#00205B"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8.3V9a8 8 0 11-4.7-7.3"
        />
        <path
          stroke="#00205B"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 2l-7.7 8L7 7.6"
        />
      </svg>
    )
  },
  {
    link: "#",
    text: "Help",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        fill="none"
        viewBox="0 0 19 19"
      >
        <defs />
        <path
          stroke="#00205B"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9.5 18a8.5 8.5 0 100-17 8.5 8.5 0 000 17z"
          clip-rule="evenodd"
        />
        <path
          stroke="#00205B"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 6.7A2.6 2.6 0 019.9 5C11 5.2 12 6.3 12 7.5 12 9.2 9.4 10 9.4 10"
        />
        <path
          fill="#00205B"
          fill-rule="evenodd"
          d="M9 14a1 1 0 100-2 1 1 0 000 2z"
          clip-rule="evenodd"
        />
      </svg>
    )
  }
];

const base64Logo =
  "data:image/png;base64,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";
const base64LogoCollapsed =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAmCAYAAABXn8xMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUsSURBVHgB7ZrvUfJKFMaPd+53sQJzK5AO3tgBHUAH0IF0gLcC7ECtAG8FeCsINmC0grznt+zBJW4CwxiSeSfPzBnCksSzz56/u4r06NGjR48eDeNCzoeJyi+VD5X/VR7kD8Lf0jwGKqvBYDCcTCain/Lw8CCbzQZS/1N5ki25PQ5gquQVWZYVhsfHx2I+nxdpmhb6e6ZyJz1qMVIpxuNxked5EcNqtSqSJIHQnswKJCrZaDQqDgFrxWr1/rH0+IYllha6dIxAXBxXXywWEJnLNqZ2BeiCp6xkaxitINPkskfc/f29I269XrvvkAeZw+HQub6PmXNpH0ZgPp1Oi+VyaXoxnqosVB5VltIwhirO0sJYiEAuhAEU9EoWmskdybJNPom0B3R3RsAis8CEJ8aurq5yrjEAjAEDEE/mX9IMnHuqa38NaNnD95eXF3l9fXWiirhxcHl5KZqURCfAQ2250lj1WeuCJ7rATsfb21u5ubkRxt7f3weMX1xcyPPzs3Ct90+kQaQqe/GRlcXqsEYSC9ZpVonlhveS5WVL5jmRoLOFHfTFre0aHQlNfDIP9A9DUVOdTaqyogBn1QxY48fHtvZWF/n2kBbpzmq5R92IoVsek+Z0TP01Sv1S4kZKVvTmp6cnp9fb25vzIuaiYxv96R9pEBkZu6p2LIP7WG2zBnB9fc1qz+TnkaIfXkEcJC4T6w7pi24W0/EeOUMsT1V2rhsCBcyF+bQOZzabOQVDeCLn8nMgGLsGgWQRAhcNF7EO6EzSkW1SahQTKcXH8qqaFfCJJZZJ9Cte+In/BFwm5p13d3dFbIHrgKWio4+JKzkDiWAiFUTGJhBzJ18GIYmcjsTrMsGCsKRj9TLyrFzzXRcEpnJGuBoSMk5B0C4eKnYTLwP5KqApkjMv9p5dXCMO1gHvsDo3IG8mLXZbbJsdHXcMwQaGETn3E0nlq6tgcrm/Zyf8PWItIYNrLNDc0cB4VUJBV543y5Uzue8hJOKtghU+hlDuwYohkskjAak7YdzqTp6BHOo9CLLYaokOYkLP4Fms7pAe/m91pudPVNbiCbDkEsvmBiwoZjG0ZRBWTkq804pmez60QIhEwt8PlTm+Zc2kA9g1/OItyCzj2LoyMrG9vh1YGAjfCeGhxZWJNfJDckNYHJUObJxMVXKshzLj2AxZB4go7yIByCiPcy/tmwGSw3Y0JAtCLUTYdl6QYFoFycEReIrlxcB7pKK4L1tfjEhgRxohII5F8Ls3ocylZSxOydKHYMkjZtkQWSYNcspuy2JggVXlGO/wljiXlpGIr9V+GnVEWp8cAleFlNh7zJ0hznZyfKfSGRLXKNgEjMiYpRsRZUBYLJnwLnrsgDySIeEolZbhEoutdFPAwmK1H3EzVmBbZxRzZe6FZNmSmEgHAIm7xCL+qKAJYEFVJ5FWWpVhrowQAuysyJc2Z9m5OQaJSm67KFiG+Kx3an8dA++FJKyrqrWrsz5ALLR3yFfbmUhHsAybf1ac7xCrv+1iVF0HEwOkkLDCiVv/bJ8xED/N8sp/k3d6V+5EQikjCzN02CmY4mF9FvbOTNYEd7V+OrCYPVLMCq27qbI8qwutNy+9k3ZvIg3jlH+iSjj9M+hkxb5z3qKZ0V1zvmGnhZ+fn+48hjE7s+Fezj54VnfD3Xeuw5NHA2c/PK9Euk+1/r37uOYEkt9UPlT+1eFXLxvpKL6drTSVaMqwTQfxmyCWiIJdItq7TiSSY7AKXaxuE6Ap4PbUhMFOOhu6rRL4G+jVQ/hBjkXkAAAAAElFTkSuQmCC";

const Layout = styled("div")(({ width }) => ({
  display: "flex",
  flexDirection: "column",
  background: "#f5f5f5",
  height: "100%",
  width,
  transition: "200ms"
}));

const AvatarWrapper = styled("div")(
  ({ foreground, background, isCollapsed }) => ({
    position: "relative",
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    width: "100%",
    height: isCollapsed ? "100px" : "200px",
    padding: "0 20px",
    boxSizing: "border-box",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    color: "#ffffff",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: foreground ? foreground : "transparent",
      opacity: 0.7,
      zIndex: 0
    }
  })
);

const AvatarWrapperContent = styled("div")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column"
});

const UserLinks = styled("div")({
  marginTop: "40px"
});

const FooterLinks = styled("div")({
  marginTop: "auto",
  marginBottom: "20px"
});

const VerticalNavigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigationWidth = isCollapsed ? "80px" : "200px";
  return (
    <Layout width={navigationWidth}>
      <div style={{ position: "absolute" }}>
        <Burger
          isCollapsed={isCollapsed}
          handler={() => {
            setIsCollapsed(isCollapsed ? false : true);
          }}
        />
      </div>
      <Brand
        isCollapsed={isCollapsed}
        logo={base64Logo}
        collapsedLogo={base64LogoCollapsed}
      />
      <AvatarWrapper
        isCollapsed={isCollapsed}
        foreground="#2196F3"
        background={
          "https://images.pexels.com/photos/1149056/pexels-photo-1149056.jpeg?crop=entropy&cs=srgb&dl=4k-wallpaper-automobile-automotive-branding-1149056.jpg&fit=crop&fm=jpg&h=426&w=640"
        }
      >
        <AvatarWrapperContent>
          {isCollapsed ? (
            <div style={{ marginBottom: "-22px" }}>
              <Avatar size="45px" src="https://picsum.photos/45" />
            </div>
          ) : (
            <Fragment>
              <AvatarItem
                primaryText={`John Doe`}
                secondaryText={`john.doe@gmail.com`}
              >
                <Avatar size="45px" src="https://picsum.photos/45" />
              </AvatarItem>
              <Button
                background="#27509B"
                color="#ffffff"
                style={{
                  fontSize: "12px",
                  marginTop: "20px",
                  marginBottom: "-18px"
                }}
              >
                Mon Profil
              </Button>
            </Fragment>
          )}
        </AvatarWrapperContent>
      </AvatarWrapper>
      <UserLinks>
        <Links links={userLinksData} isCollapsed={isCollapsed} />
      </UserLinks>
      <FooterLinks>
        <Links
          links={footerLinksData}
          isCollapsed={isCollapsed}
          hideIcons={true}
        />
      </FooterLinks>
    </Layout>
  );
};

export default VerticalNavigation;
