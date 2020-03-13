import styled from "@emotion/styled";
import { h } from "preact";
import { withTheme } from "./Theme";

const Wrapper = withTheme(
  styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "80px",
    overflow: "hidden",
    pointerEvents: "none",
    boxSizing: "border-box",
    backgroundColor: theme.background
  }))
);

const Logo = styled("div")(({ isCollapsed }) => ({
  width: isCollapsed ? "60px" : "120px"
}));

const Brand = ({ isCollapsed }) => {
  return (
    <Wrapper>
      <Logo isCollapsed={isCollapsed}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 161 71">
          <title>Michelin Logo</title>
          <defs />
          <path
            fill="#27509B"
            fill-rule="evenodd"
            d="M57.4 69.4c-.3.1-2.9.6-5.5.6-4.8.2-9-1.7-9-5.2-.1-6 6-9.3 10.4-10.2 2-.4 5.9-.9 9.7 0l-2.2 5.5c-.7-1.5-2.3-1.5-3-1.5-1.6 0-3 .4-4 .8-2.2 1-4.2 4.3-1 5.6 1.8.7 4 .2 6.4-.2l-1.8 4.6zM150.7 54.5l-3.8 10.4.4-7.6c0-1-.2-1.7-.6-2.2-.6-.6-1.4-.6-1.4-.6h-8.6l-5.5 15.2h6.2l4-10.8-.5 10.8h10.4l5.6-15.2h-6.2zM118.6 64.6h-7.2l3.8-10.1H108l-5.6 15.2h14.4l1.8-5zM102.5 58.5l1.5-4H88.6L83 69.7h15.6l1.5-4.1h-8.6l.6-1.7h8l1.4-3.7h-8l.6-1.7h8.4zM78.8 69.7l5.6-15.2h-7l-2 5.4h-3.7l2-5.4h-7L61 69.7h7l2-5.2h3.6l-1.9 5.2h7zM37.5 69.7L43 54.5h-7.4l-5.6 15.2h7.4zM26 69.7l5.6-15.2H21l-5.3 8.2.4-5.3c0-.8 0-3-2-3H5.8L.1 69.8h6.7l4-11-.8 11h6L23.1 59l-4 10.8H26zM127 69.7l5.5-15.2h-7.3l-5.6 15.2h7.3zM9 45.6l-1.4 3.8h151.1l1.4-3.8H9z"
            clip-rule="evenodd"
          />
          <path
            fill="#000"
            fill-rule="evenodd"
            d="M81 45.6h.3l.2-.2c1.1-.3 3.6-1.6 4.5-3.4a8.7 8.7 0 004-2.8c1.6-.3 2.9-1 3.6-1.3a10.7 10.7 0 004.6-4.7l2-1.2c2.8-1.9 3.4-5.3 3.5-5.7V26h.4c2.8 0 6.5-1.7 8.5-2.7l.7-.3c.7-.3 2-1 3.4-2 1.8-1.2 3-2.3 3.7-3.3l.2-.5 1.2-.7c.3-.2.6-.5.8-.9l.6-.4c1-.6 1.4-1.6 1-2.6-.3-.9-1-2-2.4-2.3a2.8 2.8 0 00-3.3-1.5l-2.5.6-3.3.8a3 3 0 000-2.4c-.5-1-1.4-1.5-2.4-1.5-.3 0-.6 0-1 .2l-6.1 4h-.2a23.8 23.8 0 00-4.7 5.4l-.4-.3a9 9 0 00-3.6-.7c-2.3 0-3.8.9-4.2 1.1a17.2 17.2 0 00-3.7 3c-.8.1-1.5.4-2 .7-.7.3-1.3.8-2 1.3l-.4.4c-.3.2-1 .8-1.8 1.8-.2 0-1 .2-2.2.8l-.9.5c-.6 0-1.7.1-3 .5a11.8 11.8 0 00-6.2.4c-.4 0-1.5.5-2.7 1.3a39 39 0 00-7-1 9.7 9.7 0 002.1-6.7c-.5-4-3.2-6.3-4.2-7-1.7-7-6.5-10-10.6-10.5-.8-.9-2.3-1.5-4-1.5-.7 0-1.3.1-2 .3-2.1.6-3.8 2.2-4.2 4a13.7 13.7 0 00-4.5 13c-.8 1-2.4 3.8-1.3 8 .7 3 2.5 5 5.2 6.1-2.1 1-4 2.3-5.5 3.7l-.2.2a14 14 0 00-9.5 4.4c-1.9 1.9-3.1 4-4 6H81z"
            clip-rule="evenodd"
          />
          <path
            fill="#fff"
            fill-rule="evenodd"
            d="M80.8 43.3c-.7.2-2 .7-3.9.7h-.1c-2 0-4.2-1-5.8-2.8a9.4 9.4 0 01-2.3-7.1 8.2 8.2 0 015.2-6.8l.6-.1-.1.1a9.9 9.9 0 00.9 11.9 8.9 8.9 0 006.9 3.2h.4l-1.8.9"
            clip-rule="evenodd"
          />
          <path
            fill="#fff"
            fill-rule="evenodd"
            d="M84.8 40a7 7 0 01-5.5-.1 8.2 8.2 0 01-4-4.5c-.8-1.6-1-4.6.6-7 .9-1.3 2.1-2 3.1-2.5-.6 1.9-.9 4.8 1.1 8.2v.1a10.2 10.2 0 007 4.7c-.7.5-1.6.9-2.3 1.1"
            clip-rule="evenodd"
          />
          <path
            fill="#fff"
            fill-rule="evenodd"
            d="M92.5 35.9c-1 .5-2.1 1.1-3.6 1.2h-.3a8 8 0 01-6.8-4 7.4 7.4 0 011.4-10l2-1.4a8.9 8.9 0 00.2 6.1 9.4 9.4 0 009.8 6c-.8 1-2 1.7-2.7 2M23.8 45.6a17.3 17.3 0 013.2-8c-2.3.6-4.4 1.7-6.1 3.5a16.6 16.6 0 00-3.1 4.5h6zM64.3 45.6l-1-1a12.5 12.5 0 01-1.6-13.9c.4-.8 1-1.5 1.5-2.2-3-.5-5.9-.6-6.8-.6l-.5.6c-1 1-2 1.2-1.3.5.6-.7.6-1.5.4-1.7h-.6c-1.7.7-2 .4-1.7.2 1.6-1 2.5-1.9 3-2.4 1.4-1.6 2.5-3.8 2.2-5.8a8.3 8.3 0 00-3-5.4l-.3-.3h-.1c-.2-.2-.5-.4-.8-.4-.3-.1-.2-.4.2-.5l-.1-.6-.2-.5c-1.6-5.4-5.4-7.6-8.5-8h-1.5c-.5-.1-.2-.3 0-.4.2 0 .2-.2.2-.2-.4-.6-2-1.1-3.8-.6-1 .3-1.8.8-2.2 1.4l-.2.4v.1c-.2.2.1.1.1.1.8-.1 1.2 0 .5.4l-1.3 1c-1 .7-2.2 1.9-3.1 3.7-.8 1.7-1.2 3.7-1.1 5.8v1c0 .3.2.5.7.4.7 0 1.2-.2.5.3l-1.5 1.5c-1 1.2-1.7 3.5-1 6.3.7 2.4 2.2 4 4.6 4.7 1.4.4 4.6 1 7.1.8.3 0 .4 0 .3.2l-.4.2-2.8.4c-.3 0-.6.2-.6.4-.2.7 1.1 1.2 1.3 1.3.5.1.3.4 0 .5-.9.1-2.6-.3-3.5-.3L36 33c-2.2 1-4 2.2-5.5 3.6a15.6 15.6 0 00-4.7 9h38.4z"
            clip-rule="evenodd"
          />
          <path
            fill="#fff"
            fill-rule="evenodd"
            d="M64.7 43.3c.8.8 1.7 1.7 3.2 2.3h6.5l-1.4-.5a10.3 10.3 0 01-5.7-6.5 12 12 0 01-.5-4.7c.2-1.5.7-3 1.6-4.4a10 10 0 012.2-2.4h-.3s-1 .1-1.9.4c-.8.2-3.6 1.3-5 4.1a10 10 0 00-1 7c.3 1.5 1.3 3.7 2.3 4.7M122.2 13.6l-.7.4a2 2 0 00-1.3-1c-.8-.2-1.9 0-3.3 1a20 20 0 01-5.2 2c-.2.1-.4.3-.3.6 0 .1.2.3.4.3h.1c.2 0 3.4-.8 5.5-2.2 1.2-.8 2-1.1 2.7-1 .3.1.5.3.7.6.2.4 0 .6 0 .6l-1.5 1c-.2-.3-.6-.7-1.3-.7-.7-.1-1.5.2-2.3 1-1.8 1.7-3.8 2.3-3.9 2.3-.2 0-.3.3-.3.5s.3.3.4.3h.2s2.2-.6 4.2-2.5c.6-.6 1.1-.8 1.6-.8s.8.4.8.4.1.2 0 .4c-1.1 1.8-5 4-6.2 4.5-.8.4-4.2 2.1-6.9 2.7l-1 .2c-.4 0-2.3 0-2.8-.5-.8-.8-1.1-.3-.9.8L98.4 26c-.9.5-2 0-2.3 0-.5 0 .7 1.3 1.6 1.5 1 .1 3-1 3-1l.7-.5s-.5 2.7-2.5 4.1a17 17 0 01-2.3 1.4c-.3.1-1.3.6-2.7.6-1 0-2.2-.2-3.6-1a8 8 0 01-3.7-7.6s.4-2.5 2.3-4L91 18s1.3-.8 3-.8c.9 0 1.8.2 2.7.6a4 4 0 00-.7.6c-.3.6-.9 1.9-.5 1.9.3 0 .4-.7 1.3-1.1l2.5-1.4s0-.4.2-.6l.7-1.3.3-.3a38 38 0 013.5-3.5l5.9-3.9h.1c.5 0 1.2.8.4 2a10.6 10.6 0 01-2.8 2.3c-.8.3-2 1-2.1 1.2-.2.1-.2.4 0 .3a1812 1812 0 0013.2-3.3h.2c.3 0 .8 0 1 .7l-8.7 2.7c-.2 0-.4.3-.3.5l.3.3h.2l7.8-2.3 1-.3.6-.1c.8 0 1.2.6 1.4 1 .2.2.1.3 0 .4"
            clip-rule="evenodd"
          />
          <path
            fill="#000"
            fill-rule="evenodd"
            d="M47.3 13c-.2-.6-.4-1.4-.3-2.3 0-1.2.7-1.9 1.4-2.1.9-.3 1.9.2 2.4.8.4.4.6 1 .9 1.6v.2l.3.4c.2.7.3 1.3.3 2 0 .3-.1.7-.3 1 0 .3-.3.8-.7 1l-.5.2h-.2l-.7.1h-.5c-.7-.2-1-.7-1.3-1v-.1l-.7-1.1v-.2l-.1-.3V13zM40 16c-.3-.6-.5-1.3-.6-2-.1-.6-.2-1.3 0-2 0-.6.4-1.2 1-1.5a2.6 2.6 0 011.9-.5c1.4.3 2 1.4 2.6 3 .6 1.8.2 4-1 4.4l-.7.3-.9.1c-.3 0-.6 0-1-.2-.5-.4-1-1-1.3-1.6zm13.8 2.5c-.1 0-.2 0-.2-.2l-.9.9-.3.3-.4.7-.1.1-.6 1c-.4.5-.8 1-1.3 1.2a5 5 0 01-3.4.7l-1.7-.6c-.5-.2-1-.5-1.4-.5H42c-.2 0-.4-.1-.4-.3-.1-.3 0-.6.3-.6h.8c2 .2 4-.2 5.9-.7 1.2-.4 2.3-.9 3.3-1.6l1.1-1 .2-.1h-.2l.1-.3.6.1.2.5c.1.1 0 .4 0 .4zm-12 2.4c-.5.3-.6.6-.7.8V22.3h-.4c-.1-.4 0-1.2.4-1.5l.5-.3s.3-.1.4 0l-.2.4zm3.6 1c2-.2 4-.8 5.7-1.7-.2.5-.6 1-1 1.3a4.6 4.6 0 01-3 1c-.6-.1-1.2-.3-1.7-.6zm-3.7-4.8c-.5-.3-.9-.8-1.2-1.4l-.3-.9c-.2-.7-.7-3.2 1.3-3.8 1.4-.4 2.2.6 2.6 1.4v.1c-.4-.8-1-1.2-1.7-1-.3 0-.5.2-.7.5.2 0 .5.3.6.6.1.4 0 .9-.4 1-.3 0-.5-.1-.7-.3l.1 1c.4 1.4 1.4 2.4 2.2 2.1.6 0 1-.7 1.1-1.6v.8c-.2.7-.5 1.2-.8 1.3l-.6.2h-.1a3 3 0 01-.7.1l-.7-.1zm6-4.1a6 6 0 01-.2-1.6c0-.5.2-1 .5-1.5.2-.3.7-.6 1.2-.6h.2c.6.2 1 .6 1.3 1l.3.5c-.4-.6-1-1-1.4-.8a1 1 0 00-.7.4c.3 0 .6.2.7.6.1.4 0 .9-.4 1-.2 0-.5-.1-.6-.4v1c.4 1.4 1.2 2.3 2 2.1.8-.2 1.3-1.4 1-2.7l.2 1.5-.2.9c-.1.3-.2.5-.5.7a2.3 2.3 0 01-.7.2 3 3 0 01-.5 0h-.4c-.5-.1-.8-.5-1-.9-.4-.4-.6-1-.7-1.4z"
            clip-rule="evenodd"
          />
        </svg>
      </Logo>
    </Wrapper>
  );
};

export default Brand;
