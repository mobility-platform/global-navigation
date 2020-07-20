import { createContext, h } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";

const ConfigurationContext = createContext();

/**
 * @typedef ConfigurationLink
 * @property {string} title The link title (e.g.: MyInspection)
 * @property {string} icon The link icon. Can be an URL to the icon or a SVG element.
 * @property {string} href The link target.
 * @property {boolean} [requiresAuthentification=false] Whether or not this link requires the user to be authenticated to be displayed.
 */

/**
 * @typedef ConfigurationSection
 * @property {string} title The section title (e.g.: Global)
 * @property {ConfigurationLink[]} links The sections links
 * @property {boolean} [requiresAuthentification=false] Whether or not this section requires the user to be authenticated to be displayed.
 */

/**
 * @typedef Configuration
 * @property {string} themeApiUrl The theme API URL (e.g.: https://myapi.services.michelin.com/themes/current). This will be used to fetch the color theme.
 * @property {string} userApiUrl The user profile API URL (e.g.: https://myapi.services.michelin.com/users). This will be used to fetch user profile.
 * @property {string} profileUrl The user profile URL (e.g.: https://mymobility.services.michelin.com/users/me). This will be used when the user click on 'See my profile'.
 * @property {string} notificationsApiUrl The notifications API URL (e.g.: https://mobility-platform-notifications.azurewebsites.net/v1/notifications). Thiw will be used to fetch user notifications and mark them as read.
 * @property {ConfigurationSection[]} sections The link sections to display (e.g.: Global, Apps, etc.).
 */

/***
 * Fetch the Global Navigation configuration located at the given `url` (e.g.: https://unpkg.com/@mobility-platform/global-navigation-configuration@latest/production.config.json) and
 * expose it to child component with the `useConfiguration` hook.
 */
export const ConfigurationProvider = ({ url, children }) => {
  console.log("ConfigurationProvider");
  const configuration = useFetchConfiguration(url);
  return (
    <ConfigurationContext.Provider value={configuration}>{children}</ConfigurationContext.Provider>
  );
};

/**
 * Access the global navigation configuration.
 * @type {() => Configuration}
 */
export const useConfiguration = () => useContext(ConfigurationContext);

export const useFetchConfiguration = (url) => {
  const [state, setState] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setState);
  }, [url]);
  return state;
};
