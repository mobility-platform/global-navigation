import habitat from "preact-habitat";
import VerticalNavigation from "./components/VerticalNavigation";

export const verticalNavigation = habitat(VerticalNavigation);

if (process.env.NODE_ENV !== "production") {
  const defaultProps = {
    getToken: () => Promise.resolve(process.env.JWT_TOKEN),
    configurationUrl: process.env.CONFIGURATION_URL,
    loginUrl: process.env.LOGIN_URL,
  };

  verticalNavigation.render({
    selector: '[data-widget-host="habitat"]',
    defaultProps,
    clean: true,
  });
}
