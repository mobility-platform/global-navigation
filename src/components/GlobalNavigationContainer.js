import { ThemeContext } from "@emotion/core";
import { h } from "preact";
import defaultTheme from "../utils/defaultTheme";
import { TranslationProvider } from "../utils/i18n";
import { useAuthenticatedFetch } from "../utils/useAuthenticatedFetch";
import { useUserProfile } from "../utils/useUserProfile";

const GlobalNavigationContainer = ({
  as: Component,
  apiUrl,
  getToken,
  backofficeUrl,
  preferredLanguage,
  footerLinks
}) => {
  if (!apiUrl || !getToken || !backofficeUrl) {
    throw new Error(
      `\`${Component.name}\` requires the \`apiUrl\`, \`backofficeUrl\` and \`getToken\` props. See https://mobility-platform-docs.netlify.com/`
    );
  }
  const theme = useAuthenticatedFetch(getToken, `${apiUrl}/themes/current`, defaultTheme);
  const userInfo = useUserProfile(getToken, apiUrl);

  return (
    <ThemeContext.Provider value={theme}>
      <TranslationProvider value={preferredLanguage}>
        <Component userInfo={userInfo} backofficeUrl={backofficeUrl} footerLinks={footerLinks} />
      </TranslationProvider>
    </ThemeContext.Provider>
  );
};

export default GlobalNavigationContainer;
