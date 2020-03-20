import "preact/debug";
import { h } from "preact";
import habitat from "preact-habitat";
import VerticalNavigation from "./components/VerticalNavigation";
import ApplicationSwitcher from "./components/ApplicationSwitcher";
import GlobalNavigationContainer from "./components/GlobalNavigationContainer";

export const verticalNavigation = habitat(props => (
  <GlobalNavigationContainer as={VerticalNavigation} {...props} />
));

export const applicationSwitcher = habitat(props => (
  <GlobalNavigationContainer as={ApplicationSwitcher} {...props} />
));

if (process.env.NODE_ENV === "development") {
  const defaultProps = {
    footerLinks: [
      {
        href: "#",
        label: "Developers",
        icon: `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
      },
      {
        href: "#",
        label: "Terms of use",
        icon: `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
      },
      {
        href: "#",
        label: "Help",
        icon: `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>`
      }
    ],
    getToken: () => Promise.resolve(process.env.JWT_TOKEN),
    apiUrl: process.env.API_URL,
    profileApiUrl: process.env.PROFILE_API_URL,
    backofficeUrl: process.env.BACKOFFICE_URL
  };

  verticalNavigation.render({
    selector: '[data-widget-host="habitat"]',
    defaultProps,
    clean: true
  });

  applicationSwitcher.render({
    selector: '[data-widget-host="habitat_widget"]',
    defaultProps: {
      ...defaultProps,
      orientation: "left bottom"
    },
    clean: true
  });
}
