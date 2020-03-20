import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { ThemeProvider } from "emotion-theming";
import defaultTheme from "../utils/defaultTheme";
import { fetchTheme, fetchApplications, fetchProfile } from "../utils/api";
import { TranslationProvider } from "../utils/i18n";
import getNavigationLinks from "../utils/getNavigationLinks";

const GlobalNavigationContainer = ({ as: Component, ...props }) => {
  const { getToken, apiUrl, profileApiUrl, backofficeUrl, preferredLanguage } = props;

  if (!apiUrl || !getToken || !profileApiUrl || !backofficeUrl) {
    throw new Error(
      "`" +
        Component.name +
        "` requires the `apiUrl`, `profileApiUrl`, `backofficeUrl` and `getToken` props. See https://mobility-platform-docs.netlify.com/"
    );
  }

  const [theme, setTheme] = useState(defaultTheme);
  const [applications, setApplications] = useState();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    (async () => {
      const apiTheme = await fetchTheme({ getToken, apiUrl });
      setTheme(apiTheme);
    })();
  }, [apiUrl, getToken]);

  useEffect(() => {
    (async () => {
      const apiApplications = await fetchApplications({ getToken, apiUrl });
      setApplications(apiApplications);
    })();
  }, [apiUrl, getToken]);

  useEffect(() => {
    (async () => {
      const apiProfile = await fetchProfile({ getToken, profileApiUrl });
      setUserInfo(apiProfile);
    })();
  }, [profileApiUrl, getToken]);

  const { globalLinks, profileLink } = getNavigationLinks(backofficeUrl);

  return (
    <ThemeProvider theme={theme}>
      <TranslationProvider preferredLanguage={preferredLanguage}>
        <Component
          applications={applications}
          userInfo={userInfo}
          globalLinks={globalLinks}
          profileLink={profileLink}
          {...props}
        />
      </TranslationProvider>
    </ThemeProvider>
  );
};

export default GlobalNavigationContainer;
