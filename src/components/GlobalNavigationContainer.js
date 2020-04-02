import { ThemeContext } from "@emotion/core";
import { h } from "preact";
import defaultTheme from "../utils/defaultTheme";
import { TranslationProvider } from "../utils/i18n";
import { useAuthenticatedFetch } from "../utils/useAuthenticatedFetch";

const GlobalNavigationContainer = ({
  as: Component,
  apiUrl,
  getToken,
  profileApiUrl,
  backofficeUrl,
  preferredLanguage,
  footerLinks,
  orientation
}) => {
  if (!apiUrl || !getToken || !profileApiUrl || !backofficeUrl) {
    throw new Error(
      `\`${Component.name}\` requires the \`apiUrl\`, \`profileApiUrl\`, \`backofficeUrl\` and \`getToken\` props. See https://mobility-platform-docs.netlify.com/`
    );
  }
  const theme = useAuthenticatedFetch(getToken, `${apiUrl}/themes/current`, defaultTheme);
  const applications = useAuthenticatedFetch(getToken, `${apiUrl}/applications`);
  const userInfo = useAuthenticatedFetch(getToken, profileApiUrl);

  return (
    <ThemeContext.Provider value={theme}>
      <TranslationProvider value={preferredLanguage}>
        <Component
          applications={applications}
          userInfo={userInfo}
          backofficeUrl={backofficeUrl}
          footerLinks={footerLinks}
          orientation={orientation}
        />
      </TranslationProvider>
    </ThemeContext.Provider>
  );
};

export default GlobalNavigationContainer;
