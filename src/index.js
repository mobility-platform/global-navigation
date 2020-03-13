import "preact/debug";
import { h } from "preact";
import habitat from "preact-habitat";
import VerticalNavigation from "./components/VerticalNavigation";
import ApplicationSwitcher from "./components/ApplicationSwitcher";

let _habitat = habitat(VerticalNavigation);
let _habitatApplicationSwitcher = habitat(ApplicationSwitcher);

if (process.env.NODE_ENV === "development") {
  _habitat.render({
    selector: '[data-widget-host="habitat"]',
    defaultProps: {
      footerLinks: [
        {
          href: "https://google.com",
          label: "Developers",
          target: "_blank",
          icon:
            "<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 640 512'><defs /><path d='M278.9 511.5l-61-17.7a12 12 0 01-8.2-14.9L346.2 8.7A12 12 0 01361.1.5l61 17.7a12 12 0 018.2 14.9L293.8 503.3a12 12 0 01-14.9 8.2zm-114-112.2l43.5-46.4a12 12 0 00-.8-17.2L117 256l90.6-79.7a12 12 0 00.8-17.2l-43.5-46.4a12 12 0 00-17-.5L3.8 247.2a12 12 0 000 17.5l144.1 135.1a12 12 0 0017-.5zm327.2.6l144.1-135.1a12 12 0 000-17.5L492.1 112.1a12.1 12.1 0 00-17 .5L431.6 159a12 12 0 00.8 17.2L523 256l-90.6 79.7a12 12 0 00-.8 17.2l43.5 46.4a12 12 0 0017 .6z' /></svg>"
        },
        {
          href: "#",
          label: "Terms of use",
          icon:
            "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><defs /><path d='M256 8a248 248 0 100 496 248 248 0 000-496zm0 48a199.9 199.9 0 110 400 199.9 199.9 0 110-400m140.2 130.3l-22.5-22.8a12 12 0 00-17 0L215.3 303.7l-59.7-60.3a12 12 0 00-17 0l-22.7 22.5a12 12 0 00-.1 17l90.8 91.5a12 12 0 0017 0L396 203.2a12 12 0 00.1-17z' /></svg>"
        },
        {
          href: "#",
          label: "Help",
          icon:
            "<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 512 512'><defs /><path d='M256 8a248 248 0 100 496 248 248 0 000-496zm0 448a200 200 0 11-.1-400.1A200 200 0 01256 456zm107.2-255.2c0 67-72.4 68-72.4 92.9v6.3a12 12 0 01-12 12h-45.6a12 12 0 01-12-12v-8.7c0-35.7 27-50 47.6-61.5 17.5-9.8 28.3-16.5 28.3-29.6 0-17.2-22-28.6-39.8-28.6-23.2 0-33.9 11-49 30a12 12 0 01-16.6 2l-27.8-21a12 12 0 01-2.7-16.4C184.8 131.5 215 112 261.8 112c49 0 101.4 38.3 101.4 88.8zM298 368a42 42 0 11-84 0 42 42 0 0184 0z' /></svg>"
        }
      ],
      getToken: () => Promise.resolve(process.env.JWT_TOKEN),
      apiUrl: process.env.API_URL
    },
    clean: true
  });
  _habitatApplicationSwitcher.render({
    selector: '[data-widget-host="habitat_widget"]',
    defaultProps: {
      footerLinks: [
        {
          href: "https://google.com",
          label: "Developers",
          target: "_blank",
          icon:
            "<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 640 512'><defs /><path d='M278.9 511.5l-61-17.7a12 12 0 01-8.2-14.9L346.2 8.7A12 12 0 01361.1.5l61 17.7a12 12 0 018.2 14.9L293.8 503.3a12 12 0 01-14.9 8.2zm-114-112.2l43.5-46.4a12 12 0 00-.8-17.2L117 256l90.6-79.7a12 12 0 00.8-17.2l-43.5-46.4a12 12 0 00-17-.5L3.8 247.2a12 12 0 000 17.5l144.1 135.1a12 12 0 0017-.5zm327.2.6l144.1-135.1a12 12 0 000-17.5L492.1 112.1a12.1 12.1 0 00-17 .5L431.6 159a12 12 0 00.8 17.2L523 256l-90.6 79.7a12 12 0 00-.8 17.2l43.5 46.4a12 12 0 0017 .6z' /></svg>"
        },
        {
          href: "#",
          label: "Terms of use",
          icon:
            "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><defs /><path d='M256 8a248 248 0 100 496 248 248 0 000-496zm0 48a199.9 199.9 0 110 400 199.9 199.9 0 110-400m140.2 130.3l-22.5-22.8a12 12 0 00-17 0L215.3 303.7l-59.7-60.3a12 12 0 00-17 0l-22.7 22.5a12 12 0 00-.1 17l90.8 91.5a12 12 0 0017 0L396 203.2a12 12 0 00.1-17z' /></svg>"
        },
        {
          href: "#",
          label: "Help",
          icon:
            "<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 512 512'><defs /><path d='M256 8a248 248 0 100 496 248 248 0 000-496zm0 448a200 200 0 11-.1-400.1A200 200 0 01256 456zm107.2-255.2c0 67-72.4 68-72.4 92.9v6.3a12 12 0 01-12 12h-45.6a12 12 0 01-12-12v-8.7c0-35.7 27-50 47.6-61.5 17.5-9.8 28.3-16.5 28.3-29.6 0-17.2-22-28.6-39.8-28.6-23.2 0-33.9 11-49 30a12 12 0 01-16.6 2l-27.8-21a12 12 0 01-2.7-16.4C184.8 131.5 215 112 261.8 112c49 0 101.4 38.3 101.4 88.8zM298 368a42 42 0 11-84 0 42 42 0 0184 0z' /></svg>"
        }
      ],
      getToken: () => Promise.resolve(process.env.JWT_TOKEN),
      apiUrl: process.env.API_URL,
      orientation: "left bottom",
      buttonSize: 48
    },
    clean: true
  });
}
export default _habitat;
