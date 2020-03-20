import { h, createContext } from "preact";
import { useContext } from "preact/hooks";

const TranslationContext = createContext();

const localTranslations = {
  fr: {
    "My Home": "Tableau de bord",
    "My Organization": "Mon organisation",
    Global: "General",
    Apps: "Apps",
    Others: "Autres",
    "View my profile": "Voir mon profil",
    "Open the menu": "Ouvrir le menu",
    "Close the menu": "Fermer le menu"
  }
};

export const TranslationProvider = ({ children, preferredLanguage }) => {
  let currentLang = null;
  currentLang = navigator.languages ? navigator.languages[0] : navigator.language;
  if (preferredLanguage) {
    currentLang = preferredLanguage;
  }
  currentLang = currentLang.substr(0, 2);

  return (
    <TranslationContext.Provider
      value={{
        localTranslations,
        currentLang
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const { localTranslations, currentLang } = useContext(TranslationContext);

  return key => t(key, localTranslations, currentLang);
};

const t = (key, localTranslations, currentLang) => {
  if (localTranslations && localTranslations[currentLang] && localTranslations[currentLang][key]) {
    return localTranslations[currentLang][key];
  }

  return key;
};
