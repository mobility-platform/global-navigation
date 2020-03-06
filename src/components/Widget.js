import { setPragma, styled } from "goober";
import { Fragment, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { fetchApplications, fetchTheme } from "../utils/api";
import { defaultTheme, ThemeProvider, withTheme } from "./Theme";
import isTextLegibleOverBackground from "../utils/isTextLegibleOverBackground";
import AvatarItem from "./AvatarItem";
import Avatar from "./Avatar";
import Links from "./Links";
import AppLinks from "./AppLinks";
import InlineLinks from "./InlineLinks";

setPragma(h);

const globalLinks = [
  {
    href: "#",
    label: "My Home",
    icon: `
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
      `
  },
  {
    href: "#",
    label: "My Organization",
    icon: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        viewBox="0 0 448 512"
      >
        <defs />
        <path d="M352 320a95.6 95.6 0 00-59.8 20.9l-102.5-64a96.6 96.6 0 000-41.7L292.2 171a96 96 0 10-34-54.3l-102.4 64a96 96 0 100 150.2l102.5 64.2A96.3 96.3 0 00256 416a96 96 0 1096-96z" />
      </svg>
      `
  }
];

const AvatarItemWrapper = withTheme(
  styled("div")(({ theme }) => ({
    color: isTextLegibleOverBackground("#ffffff", theme.primary)
      ? "#ffffff"
      : "#333333",
    backgroundColor: theme.primary,
    padding: "8px 16px 8px 16px",
    marginBottom: "8px",
    width: "100%",
    boxSizing: "border-box"
  }))
);

const LinksWrapper = styled("div")({
  color: "currentColor",
  padding: "8px 16px 8px 16px"
});

const Button = withTheme(
  styled("button")(({ theme }) => ({
    position: "relative",
    height: "40px",
    width: "40px",
    color: isTextLegibleOverBackground("#ffffff", theme.primary)
      ? "#ffffff"
      : "#333333",
    backgroundColor: theme.primary,
    borderRadius: "50%",
    border: "none",
    margin: "0",
    padding: "0",
    cursor: "pointer"
  }))
);

const Window = withTheme(
  styled("div")(({ isOpen, theme, orientation }) => ({
    position: "absolute",
    display: isOpen ? "flex" : "none",
    flexDirection: "column",
    width: "240px",
    marginBottom: "8px",
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    overflow: "hidden",
    borderRadius: "10px",
    fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    color: isTextLegibleOverBackground("#ffffff", theme.background)
      ? "#ffffff"
      : "#333333",
    backgroundColor: theme.background,
    ...orientation
  }))
);

const ButtonSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        width: "100%",
        top: 0,
        left: 0
      }}
      fill="none"
      viewBox="0 0 56 56"
    >
      <defs />
      <g fill-rule="evenodd" clip-path="url(#clip0)" clip-rule="evenodd">
        <path
          fill="#000"
          d="M11.22 22.2a4.8 4.8 0 00-.96.26 2.34 2.34 0 00-1.31 1.39.65.65 0 01-.13.22c-.29.28-.8.9-1.03 1.26-.5.78-.72 1.38-.9 2.38-.07.4-.07.5-.09 1.44l-.01 1-.2.3c-.3.47-.46.87-.56 1.46-.05.25-.05 1.48 0 1.66l.07.31a3.37 3.37 0 00.93 1.67c.24.26.38.37.66.56l.45.3.1.05-.14.05a17.9 17.9 0 00-2.05.85c-.5.25-.96.54-1.43.9-.3.22-.98.92-1.16 1.18a4.01 4.01 0 00-.57 1.3c-.01.04-.12.12-.33.23-.3.15-.63.36-1.03.65a6.72 6.72 0 00-1.64 2A4.86 4.86 0 00-.63 46c0 .5.01.58.08.88.04.18.1.43.15.57l.07.24-.16.26a5.05 5.05 0 00-.94 3.09 4.58 4.58 0 00.09 1.25c.01.04-.05.1-.2.2-.25.18-.7.64-.85.88-.18.28-.3.52-.38.79-.1.3-.17.78-.17 1.07 0 .19 0 .21-.06.24-.24.1-.89.7-1.17 1.06a5 5 0 00-.87 3.23l.02.45-.17.1a3.31 3.31 0 00-1.51 2.96c0 .47 0 .58.06.8.08.32.24.72.35.88l.1.13-.09.14a4.7 4.7 0 00-.34.97c-.07.28-.21.58-.56 1.18a81.82 81.82 0 00-.69 1.22c-.36.61-.88 1.8-1 2.26-.14.6-.14 1.28 0 1.82.07.25.07.27.04.54-.04.38-.02 1.4.04 1.7.13.7.39 1.2.72 1.43.2.13.55.23.76.22.1-.01.2-.03.22-.05.03 0 .1-.04.16-.07.12-.06.42-.47.47-.64.04-.14.06-.15.28-.21.33-.1.54-.25.66-.49.09-.19.1-.37.04-.7-.05-.29-.05-.3 0-.44.1-.32.13-.4.16-.7.03-.29.03-.29-.04-.43-.1-.2-.1-.3.01-.4.09-.08.14-.09.14-.03 0 .02.05.1.1.17.07.08.12.18.13.22v.45c-.04.65-.04 1.11.02 1.27.08.24.27.45.53.58l.21.12h.33c.29 0 .36-.02.56-.08.62-.21.75-.47.85-1.64A9.7 9.7 0 00-2.45 71a5.03 5.03 0 00-.1-.44 4.29 4.29 0 01-.27-1.36l-.02-.36.1-.09c.29-.21.71-.72.8-.95l.04-.09.42-.01c.43-.02.86-.1 1.25-.22a2.7 2.7 0 001.17-.83c.54-.59.86-1.34.9-2.12l.01-.34.13-.05a5.81 5.81 0 001.78-1.38c.02 0 .04.06.07.14a6 6 0 00.2.42c.11.25.13.31.12.4-.01.05-.15.35-.3.66a7.82 7.82 0 00-.83 3.56c-.03.75-.01 1.78.05 2.06l.08.43c.02.14.13.48.24.78l.19.53-.1.22c-.1.21-.37 1.25-.41 1.57a15.1 15.1 0 00-.03 2.35c.15 1.33.53 2.56.97 3.16l.11.15-.07.19c-.12.32-.16.63-.16 1.2 0 .65.08 1 .34 1.52l.08.17-.05.13c-.1.23-.33 1.1-.36 1.37-.06.62 0 1.91.12 2.44.1.39.33.93.65 1.43l.07.12-.08.29a5 5 0 00-.17 1.99c.1 1.21.24 1.67.81 2.69.32.57 1 1.22 1.64 1.58.18.1.19.11.23.26.08.25.07.99-.01 1.38-.28 1.35-1.1 2.6-2.48 3.81l-.88.77c-.93.83-1.42 1.43-1.55 1.93-.15.55-.17.69-.17 1 0 .87.23 1.1 1.27 1.37.42.11 1.14.14 1.8.07a16.23 16.23 0 002.04-.33 6.05 6.05 0 003.18-1.55c.33-.26.67-.43 1.42-.7a5.58 5.58 0 001.77-.88c.29-.16.41-.4.46-.87a5.62 5.62 0 00-.13-1.93c-.04-.3-.17-.77-.35-1.24a14.77 14.77 0 01-.82-3.19c-.01-.14-.01-.15.06-.2.21-.14.5-.42.78-.74l.31-.36.03.15c.08.38.39 1.08.67 1.52.2.3.63.76.94 1l.24.18v.13a29.19 29.19 0 01-.58 4.27 7.8 7.8 0 00-.23 1.61c-.02.39-.01.5.04.77.03.17.06.41.06.53l.02.48c.03.22.05.3.14.5.15.3.43.6.84.86l.6.4c.35.23.28.12.64.9.17.38.33.61.6.88.34.34.8.6 1.56.91.97.4 1.61.55 2.4.57.66.02 1.22-.06 1.76-.25.89-.3 1.25-.8 1.3-1.83.03-.36-.01-.75-.13-1.21a3 3 0 00-.32-.88c-.1-.14-.43-.59-.69-.9-.52-.61-.75-.91-1.07-1.38-.6-.87-1.15-1.99-1.36-2.75-.22-.81-.3-1.4-.25-2 .04-.5.1-1 .13-1.03a3.4 3.4 0 00.9-.48 4.93 4.93 0 001.67-2.65 6.01 6.01 0 00-.1-3.94c-.02-.04 0-.09.11-.2.4-.46.77-1.28.94-2.08.25-1.21.14-2.69-.28-3.66l-.13-.32.14-.2a2.46 2.46 0 00.52-1.7c0-.51-.03-.77-.15-1.19l-.07-.23.12-.08c.12-.1.64-.66.78-.85.28-.4.61-1.14.8-1.83.28-.98.4-1.86.4-2.93 0-1.03-.07-1.47-.34-2.31l-.1-.29.1-.23c.14-.36.27-.86.37-1.41.13-.75.13-.81.15-1.5a9.48 9.48 0 00-1.2-5.04l-.08-.12.12-.14c.45-.5.89-1.43 1.03-2.18a9.2 9.2 0 00.1-2.43 5.6 5.6 0 00-.32-1.31l-.12-.3.06-.1c.15-.2.45-.72.54-.91.21-.43.44-1.26.51-1.84.05-.37.05-1.65 0-2-.1-.8-.34-1.68-.61-2.2-.08-.16-.1-.24-.09-.27a11.22 11.22 0 00.73-1.17c.08-.19.38-1.05.38-1.11 0-.02.15-.07.36-.11a4.85 4.85 0 002.16-1.15l.34-.3.48-.05c.82-.06 1.53-.2 1.95-.4a4.34 4.34 0 001.5-1l.49-.55c.15-.18.18-.2.38-.27.22-.07.87-.49 1.12-.71.2-.2.7-.8.85-1.07l.15-.26.48-.12c.54-.13.7-.2 1.2-.47.27-.15.42-.25.73-.52.42-.36.64-.61.93-1.05.2-.32.2-.3.44-.44A4 4 0 0043.26 37c.28-.55.4-1.12.42-1.91l.01-.52.09-.04c.18-.1.65-.28 1.14-.43.6-.18 1.7-.58 2.03-.73l.5-.24c.15-.08.44-.2.64-.27.43-.16.55-.23 1.02-.56a4.14 4.14 0 001.23-1.3c.06-.11.2-.28.48-.56.33-.33.4-.42.49-.6l.1-.24c0-.02.1-.14.22-.27.12-.12.25-.29.3-.36.06-.14.06-.17.06-.5 0-.32 0-.36-.07-.5-.08-.19-.33-.46-.44-.5-.05 0-.1-.05-.15-.17-.1-.19-.3-.4-.46-.45a2.4 2.4 0 00-.61-.04c-.62 0-.7.02-2.12.46-1.26.39-1.15.36-1.13.27.13-.6.07-.96-.19-1.27-.17-.2-.31-.27-.6-.28-.34-.01-.47.03-.9.3-.5.3-.98.57-1.59.87a5.15 5.15 0 00-1.54 1.04c-.08.06-.28.24-.43.4-.23.24-.3.32-.38.5-.45.97-.5 1.05-.75 1.1-.12.03-.18.02-.46-.04-.3-.07-.38-.08-.97-.08-.57 0-.67 0-.94.06a4.06 4.06 0 00-2.37 1.42c-.09.12-.13.16-.23.18a4.4 4.4 0 00-2.06 1.4l-.12.15-.37-.01c-.32 0-.44 0-.76.06a2.9 2.9 0 00-.9.28c-.17.1-.18.1-.35.07a6.8 6.8 0 00-1.91.18 4.3 4.3 0 00-1.04.43l-.23.12-.33-.07a6.62 6.62 0 00-2.36-.04c-.73.13-.9.19-1.6.53l-.61.31-.33-.07a16.05 16.05 0 00-3.45-.37c-.04-.01-.03-.03.04-.13.2-.24.48-.75.67-1.18.4-.93.5-2.1.27-3a4.6 4.6 0 00-1.72-2.62l-.25-.2-.09-.26a7.16 7.16 0 00-2.58-3.54 5.14 5.14 0 00-2.04-.78l-.2-.03-.25-.24a1.6 1.6 0 00-.86-.47 3.7 3.7 0 00-1.01-.04"
        />
        <path
          fill="#fff"
          d="M12.21 23.11c.22.06.39.2.4.3 0 .02-.06.1-.14.16l-.13.12.08.02c.05.02.2.03.34.03.32 0 .78.07 1.04.15l.44.14c.4.13.68.3 1.17.69a6.8 6.8 0 011.91 2.89l.1.27-.07.08c-.12.13-.08.19.23.34A3.5 3.5 0 0119 29.75a3.81 3.81 0 01.23 2.55l-.15.36c-.12.28-.44.9-.61 1.17a5.12 5.12 0 01-1.38 1.27c-.24.13-.72.44-.72.47 0 .02.04.05.08.07.11.05.37-.02.7-.19.26-.13.3-.13.36 0 .07.15-.04.29-.62.78-.1.08-.1.1-.05.18.04.05.05.05.24-.01l.34-.14c.18-.1.53-.34.64-.46l.1-.1h.26a28.91 28.91 0 013.53.33c.06 0 .02.07-.13.24-.14.16-.51.73-.73 1.14a7.1 7.1 0 00-.47 1.65c-.07.65-.04 1.56.09 2.32a15.41 15.41 0 00.32 1.58 20.69 20.69 0 01-8.24 1.78c-1.49.06-3.3-.05-4.6-.27A7.17 7.17 0 014.66 43a3.02 3.02 0 01-.83-1.27c-.07-.26-.04-.71.07-1 .3-.78.93-1.45 2.01-2.15.3-.18.97-.53 1.29-.66.5-.2 1.57-.6 2.16-.78.37-.11.45-.12.68-.03.1.04.88.07.98.05.1-.03.1-.12 0-.17a.38.38 0 00-.12-.05c-.1 0-.35-.1-.43-.18-.1-.1-.1-.16-.04-.22.04-.04.1-.05.45-.03.48.03.7.03.91-.03.18-.05.27-.1.27-.18 0-.09-.18-.14-.54-.17a8.84 8.84 0 01-2.09-.43 3.27 3.27 0 01-2.2-2.12l-.09-.28v-.7c0-.61.01-.72.06-.91.13-.49.5-1 1.13-1.6.1-.1.14-.16.14-.22 0-.13-.08-.15-.33-.1a.88.88 0 01-.25.04c-.06-.02-.07-.15-.06-.59 0-.5.07-1 .2-1.58a4.8 4.8 0 011.11-2.36c.3-.36.46-.5.9-.84.39-.28.4-.36.02-.36-.28 0-.3-.03-.14-.26.23-.34.67-.57 1.34-.72.24-.05.77-.05.95 0M46.25 26.69c.15.07.2.18.2.42-.01.18-.03.23-.12.37-.16.25-.48.54-.72.64-.19.08-.73.42-.87.55-.27.25-.53.65-.53.83 0 .12.05.2.12.2.07 0 .14-.07.57-.46.52-.48.79-.6 2.05-.9l.97-.27c1.31-.4 2.13-.61 2.39-.61.24 0 .4.1.43.3.01.07 0 .08-.1.11-.08.02-.21.09-.32.15a8.85 8.85 0 01-2.46.98c-.65.16-1.04.23-1.29.23-.21 0-.24.02-.14.11.12.12.43.16.74.1l.43-.07c.32-.05.51-.1.88-.21.43-.14 1.34-.52 1.57-.66.74-.42 1-.48 1.2-.27.1.11.13.2.12.29-.03.1-.28.42-.34.42a.47.47 0 01-.17-.1.58.58 0 00-.45-.14c-.2.02-.36.09-.65.29a7.96 7.96 0 01-1.8 1.08c-.28.09-.42.1-1.22.17-.13.01-.24.04-.24.05 0 .08.61.17 1 .15.37-.03.84-.18 1.16-.38a16.75 16.75 0 001.4-.92c.18-.11.23-.13.35-.13.17 0 .3.07.36.19.04.09.04.1-.05.24-.06.08-.2.26-.33.38l-.23.23-.18-.11a.74.74 0 00-.32-.13c-.27-.03-.66.17-.87.44-.22.27-.78.6-1.27.72l-.48.12c-.3.06-.33.09-.16.14.16.04.3.03.7-.04.31-.06.4-.09.62-.2.4-.2.59-.33.77-.55l.3-.27c.21-.12.48-.08.58.09.03.07.03.08-.04.22-.09.2-.36.56-.57.76-.22.22-.82.66-1.1.8-.1.06-.3.14-.43.18-.13.04-.45.18-.72.3-.27.13-.59.27-.7.3-.65.23-1.74.58-2.26.72-.33.1-.73.23-.9.3-.28.12-.31.13-.5.11-.27-.02-.5-.1-.68-.27-.19-.16-.28-.2-.33-.12a.2.2 0 00-.04.1c0 .07.1.23.24.4l.15.15-.1.06c-.15.1-.44.2-.67.24-.25.04-.33.06-.33.1 0 .03.1.1.2.15.17.07.4.1.65.07.26-.02.45-.1.67-.24.18-.12.32-.13.39-.02a3.24 3.24 0 01-3.13 3.62 3.6 3.6 0 01-1.5-.38 3.73 3.73 0 01-1.44-1.44 4.71 4.71 0 01-.77-2.7c.16-1.34 1.05-2.32 2.48-2.7a3.34 3.34 0 011.81.06l.07.03-.14.16c-.24.27-.42.75-.4 1.08 0 .1.02.15.05.17.06.03.12-.03.32-.35.28-.43.58-.72.75-.73.1 0 .15-.06.3-.37.07-.16.22-.4.33-.55.2-.27.24-.35.45-.81.11-.24.13-.26.68-.79.64-.62.78-.72 1.53-1.1a10.5 10.5 0 001.28-.74c.28-.2.57-.38.64-.38.03 0 .1.01.16.04"
        />
        <path
          fill="#fff"
          d="M35.2 32.96c.03.01.03.04.02.07a5.92 5.92 0 00.8 3.88c.32.55.87 1.16 1.3 1.46.64.43 1.42.65 2.32.65H40l-.05.06c-.03.03-.18.18-.34.31-.24.21-.37.3-.73.49-.38.2-.48.24-.85.34-.37.09-.49.11-.84.13-.38.01-.44 0-.74-.06a5.12 5.12 0 01-.44-.1c-.88-.33-1.78-1.35-2.3-2.6a4.15 4.15 0 01-.32-2.43c.2-.72.36-1.03.84-1.6.19-.21.55-.53.68-.59.1-.04.24-.05.3-.01"
        />
        <path
          fill="#fff"
          d="M32.77 34.36a5.06 5.06 0 00.12 3.48 6.5 6.5 0 001.85 2.65c.46.37.96.57 1.74.68.13.02.23.05.23.06 0 .02-.1.16-.25.32-.21.25-.3.32-.63.55-.46.3-.53.33-1.04.44-.4.09-.5.1-.47.06 0-.02-.16-.03-.4-.04a1.94 1.94 0 01-.72-.11 4.24 4.24 0 01-1.33-.7 4.17 4.17 0 01-1.72-3.44c-.01-.66.04-1.08.2-1.7a3.26 3.26 0 011.23-1.86 2.27 2.27 0 011.18-.5h.07l-.06.1"
        />
        <path
          fill="#fff"
          d="M30.3 34.7l-.17.28a5.34 5.34 0 00-.78 2.27c-.1.82-.03 1.91.2 2.67a4.95 4.95 0 004.52 3.55c.1.1-1.08.78-1.6.92-.38.1-.94.19-1.27.19-.33 0-.9-.06-1.18-.13a4.72 4.72 0 01-3.54-4.17 6.22 6.22 0 01.1-2.53c.16-.68.42-1.14 1.02-1.78.3-.33.54-.5 1.05-.8.43-.24.72-.35 1.11-.43.59-.13.59-.13.55-.05"
        />
        <path
          fill="#fff"
          d="M26.96 35.21c.06.03.06.04-.1.22a5.54 5.54 0 00-1.31 3.87 6.86 6.86 0 00.88 3.52 5.06 5.06 0 002.83 2.32l.45.17c0 .05-.27.2-.78.46-.56.28-.65.3-1.46.46-.29.05-.38.06-.79.04-.63-.02-.9-.07-1.46-.25a4.7 4.7 0 01-2.93-2.67 9.91 9.91 0 01-.47-1.56 6.11 6.11 0 01-.23-2.12 3.9 3.9 0 01.23-1.51c.1-.23.57-1 .72-1.17.18-.21.68-.68.96-.9.22-.17 1.2-.67 1.47-.74l.54-.12c.3-.06.41-.06.87-.05.29 0 .55.02.58.03M2.97 42c.02.04.02.08.01.1-.02.03.09.4.18.59l.08.16-.12.26c-.28.6-.45 1.14-.54 1.76-.07.47-.1 1.6-.05 2.03.05.4.2 1.1.32 1.45.11.35.42 1 .6 1.27.11.2.18.34.13.32-.12-.05-.77-.4-1-.55a5.42 5.42 0 01-1.24-.99 3.8 3.8 0 01-1.1-2.39c0-.21.1-.9.19-1.17a5.6 5.6 0 012.47-2.89c.02 0 .05.03.07.06M4.18 43.94c.7.57 1.52.95 2.77 1.27 1.1.28 2.28.46 3.84.56.86.05 2.76.04 3.66-.03 1.2-.1 2.45-.29 3.58-.56a24.01 24.01 0 003.37-1.13c.05-.02.08.01.25.3.27.46.8 1.1 1.13 1.41a4.83 4.83 0 001.93 1.14c.32.1.69.21.82.23.31.06.88.1 1.19.1.22 0 .23 0 .2.07-.08.29-.58 1.15-.86 1.48a10.59 10.59 0 01-1.58 1.43c-.97.65-1.61.99-2.55 1.32-2 .72-4.59 1.1-7.41 1.1-1.02 0-1.15 0-1.9-.06-1.54-.12-3.05-.41-4.36-.85a9.43 9.43 0 01-2.6-1.35A5.17 5.17 0 014 48.34a5.28 5.28 0 01-.53-2.25c0-.56.04-.88.16-1.32.07-.24.33-.97.36-.97l.18.14M.42 48.7c.12.2.55.63.86.87a8.75 8.75 0 001.99 1.2l-.08.27c-.21.62-.28 1.07-.3 2.07a6.85 6.85 0 00.16 1.96 8.54 8.54 0 01-1.33-.72A9.18 9.18 0 01.3 53.27c-.5-.49-.78-1.1-.84-1.84-.06-.79.07-1.44.45-2.19.25-.48.37-.67.4-.65.03 0 .08.06.11.12"
        />
        <path
          fill="#fff"
          d="M26.43 51.02c.17.52.26.98.3 1.48.1 1.5-.38 2.83-1.43 4-1.24 1.38-2.82 2.15-5.65 2.8-2.2.5-3.8.61-6.06.44a19.1 19.1 0 01-5.8-1.13c-.78-.31-1.28-.6-1.83-1.04A5.4 5.4 0 014.1 51.7c.1-.29.33-.77.37-.79.02 0 .12.06.22.15a9.9 9.9 0 003.97 1.96c1.71.48 4.07.74 6.3.7 2.68-.06 4.87-.36 6.76-.92a10.87 10.87 0 004.37-2.4l.08-.09.07.15.2.57M-.69 53.48a5.24 5.24 0 001 1 15.84 15.84 0 001.24.83c.37.22 1.1.59 1.54.78.29.12.37.17.4.22.11.25.65 1.07.73 1.13.01 0 .03.08.03.15 0 .12-.02.18-.1.35-.17.3-.15.28-.37.14-.1-.07-.23-.16-.26-.2-.04-.03-.15-.1-.25-.14l-.26-.15c-.12-.09-.63-.36-1.5-.8a20.47 20.47 0 00-3.55-1.5c-.04-.04.04-.48.12-.7a2.7 2.7 0 011.06-1.3c.03 0 .1.09.17.2"
        />
        <path
          fill="#000"
          d="M14.85 26.03a1 1 0 00-.58.51c-.21.48-.1 1.53.25 2.17.27.5.6.76.98.76.23 0 .58-.1.72-.18.2-.14.34-.5.37-.9a3.24 3.24 0 00-.73-2.03c-.23-.26-.72-.42-1.01-.33"
        />
        <path
          fill="#fff"
          d="M15.5 26.49c.22.1.41.29.57.55.17.3.19.34.27.68.11.47.08.89-.1 1.2a.62.62 0 01-.15.19c-.13.07-.39.13-.59.13-.23 0-.41-.1-.6-.34a2.27 2.27 0 01-.44-1.26c-.06-.53.03-.88.26-1.06.26-.2.5-.23.79-.1"
        />
        <path
          fill="#000"
          d="M11.47 26.74c-.34.1-.65.4-.76.76-.06.17-.06.25-.06.61 0 .87.26 1.53.75 1.99.22.2.35.25.63.25.23 0 .6-.1.78-.2.2-.1.38-.4.46-.76.05-.24.06-.67.02-.9a3.92 3.92 0 00-.58-1.35c-.3-.36-.8-.52-1.24-.4"
        />
        <path
          fill="#fff"
          d="M12.29 27.23c.07.04.21.15.31.25.31.32.47.73.5 1.34.03.3.02.34-.04.55-.09.26-.15.37-.3.5-.13.12-.4.21-.68.23-.19.01-.23 0-.33-.05a1.63 1.63 0 01-.61-.72c-.19-.37-.25-.69-.23-1.15.01-.23.03-.32.09-.46.1-.21.28-.41.46-.48.2-.08.23-.09.47-.08.16 0 .25.02.36.07"
        />
        <path
          fill="#000"
          d="M16.98 30.19c-.02.01-.03.05-.01.12.01.09 0 .1-.14.24a6.07 6.07 0 01-3.24 1.38c-.28.05-.48.06-1.1.07-.77 0-.79 0-.85.12-.03.07.02.18.1.22.04.02.24.03.47.03.46 0 .58.03.92.2a2.33 2.33 0 002.07.19c.57-.24.87-.54 1.22-1.18.16-.29.26-.42.45-.64l.19-.21c.06-.09.07-.1.19-.08l.12.02-.02-.15c-.03-.19-.05-.23-.16-.3-.1-.06-.15-.07-.2-.03"
        />
        <path
          fill="#fff"
          d="M16.05 31.59a2 2 0 01-.49.57c-.35.27-.88.43-1.28.4a2.3 2.3 0 01-.69-.16c-.04-.02-.06-.05-.05-.08 0-.04.05-.05.2-.06a7.13 7.13 0 002.12-.65c.12-.09.2-.1.2-.02"
        />
        <path
          fill="#000"
          d="M11.57 31.7c-.22.16-.35.4-.33.61 0 .13.06.2.14.16.03 0 .04-.05.04-.15 0-.18.09-.32.28-.46.1-.08.14-.13.13-.17-.01-.1-.13-.09-.26 0M15.3 26.71a.47.47 0 00-.14.1l-.06.07.07.04c.27.19.33.4.17.62-.08.11-.18.13-.3.06-.06-.03-.11-.05-.12-.04-.01.02 0 .15.02.29.1.62.43 1.08.8 1.1.36.04.58-.33.55-.95a1.76 1.76 0 00-.23-.85.86.86 0 00-.37-.38c-.16-.08-.3-.1-.4-.06M12 27.4c-.1.03-.26.12-.28.15-.03.05 0 .1.09.13.2.09.27.5.09.64-.09.07-.16.07-.27.02a.38.38 0 00-.1-.05c-.08 0 .03.54.16.81.27.54.69.76 1.03.53a.9.9 0 00.32-.49c.07-.26-.04-.87-.2-1.2-.1-.2-.27-.38-.44-.46-.14-.08-.33-.12-.4-.09"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="56" height="56" fill="#fff" rx="28" />
        </clipPath>
      </defs>
    </svg>
  );
};

const defineOrientation = (buttonSize, orientation) => {
  const basePosition = `${buttonSize}px`;
  const pushedPosition = `${buttonSize + 10}px`;
  switch (orientation) {
    case "top right":
      return { top: pushedPosition, left: basePosition };
    case "top left":
      return { top: pushedPosition, right: basePosition };
    case "bottom right":
      return { bottom: pushedPosition, right: basePosition };
    case "bottom left":
      return { bottom: pushedPosition, left: basePosition };
    case "right top":
      return { top: spacing, left: spacing };
    case "left top":
      return { top: spacing, left: spacing };
    case "right bottom":
      return { bottom: spacing, right: spacing };
    case "left bottom":
      return { bottom: spacing, left: spacing };
    default:
      return { top: spacing, right: spacing };
  }
};

const Widget = ({
  footerLinks,
  getToken,
  apiUrl,
  orientation,
  buttonSize = 48
}) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    (async () => {
      const apiTheme = await fetchTheme({ getToken, apiUrl });
      setTheme(apiTheme);
    })();
  }, []);

  const [applications, setApplications] = useState();

  useEffect(() => {
    (async () => {
      const apiApplications = await fetchApplications({ getToken, apiUrl });
      setApplications(apiApplications);
    })();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Button
          size={buttonSize}
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <ButtonSvg />
        </Button>
        <Window
          isOpen={isOpen}
          orientation={defineOrientation(buttonSize, orientation)}
        >
          <AvatarItemWrapper>
            <AvatarItem
              title={"Johanes Does"}
              linkLabel={"Voir le profil"}
              href={"#"}
              target={"_blank"}
            >
              <Avatar src={"https://i.pravatar.cc/40"} size={"40px"} />
            </AvatarItem>
          </AvatarItemWrapper>
          <LinksWrapper>
            <Links title={"Global"} data={globalLinks} />
            <div style={{ marginTop: "8px", width: "100%" }}>
              <AppLinks title={"Apps"} data={applications} />
            </div>
            <div style={{ marginTop: "8px", width: "100%" }}>
              <InlineLinks data={footerLinks} />
            </div>
          </LinksWrapper>
        </Window>
      </Fragment>
    </ThemeProvider>
  );
};

export default Widget;
