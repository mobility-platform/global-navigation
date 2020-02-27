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
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12.3 5.5a2.3 2.3 0 100-4.5 2.3 2.3 0 000 4.5zM3.3 10.8a2.3 2.3 0 100-4.6 2.3 2.3 0 000 4.5zM12.3 16a2.3 2.3 0 100-4.5 2.3 2.3 0 000 4.5z"
          clip-rule="evenodd"
        />
        <path
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
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8.3V9a8 8 0 11-4.7-7.3"
        />
        <path
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
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9.5 18a8.5 8.5 0 100-17 8.5 8.5 0 000 17z"
          clip-rule="evenodd"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 6.7A2.6 2.6 0 019.9 5C11 5.2 12 6.3 12 7.5 12 9.2 9.4 10 9.4 10"
        />
        <path
          fill-rule="evenodd"
          d="M9 14a1 1 0 100-2 1 1 0 000 2z"
          clip-rule="evenodd"
        />
      </svg>
    )
  }
];

const Layout = styled("div")(({ width }) => ({
  display: "flex",
  flexDirection: "column",
  background: "#27509B",
  color: "#ffffff",
  height: "100%",
  width,
  transition: "200ms",
  fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
}));

const AvatarWrapper = styled("div")(
  ({ foreground, background, isCollapsed }) => ({
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
    height: isCollapsed ? "100px" : "200px",
    padding: "0 20px",
    boxSizing: "border-box",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    color: "currentColor",
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
