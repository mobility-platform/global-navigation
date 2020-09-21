import { createContext } from "preact";
import { useCallback, useContext, useMemo } from "preact/hooks";

const translations = {
  fr: {
    MyShowcase: "MyShowcase",
    MyShop: "MyShop",
    Global: "General",
    Apps: "Applications",
    Others: "Autres",
    "View my profile": "Voir mon profil",
    "Open the menu": "Ouvrir le menu",
    "Close the menu": "Fermer le menu",
    "You currently have no notifications": "Vous n'avez pas de notifications",
    "Mark all as read": "Tout marquer comme lu",
    Support: "Assistance",
    Login: "Se connecter",
  },
  de: {
    MyShowcase: "MyShowcase",
    MyShop: "MyShop",
    Global: "Global",
    Apps: "Anwendung",
    Others: "Andere",
    "View my profile": "Profil anzeigen",
    "Open the menu": "Menü öffnen",
    "Close the menu": "Menü schließen",
    "You currently have no notifications": "Sie haben keine Benachrichtigungen",
    "Mark all as read": "Markiere alle als gelesen",
    Support: "Unterstützung",
    Login: "Einloggen",
  },
};

/** @type {() => string} */
const useDefaultLanguage = () => {
  return useMemo(() => navigator.languages?.[0] || navigator.language, []);
};

/** @type {(language: string) => string} */
const normalizeLanguage = (language) => {
  return language.substr(0, 2);
};

/** @type {import("preact").Context<string>} */
const TranslationContext = createContext("en");

/** @type {() => string} */
export const useLanguage = () => {
  const contextLanguage = useContext(TranslationContext);
  const defaultLanguage = useDefaultLanguage();
  const language = useMemo(() => normalizeLanguage(contextLanguage || defaultLanguage), [
    contextLanguage,
    defaultLanguage,
  ]);
  return language;
};

export const TranslationProvider = TranslationContext.Provider;

/** @type {(key: string, language: string) => string} */
export const t = (key, language) => translations?.[language]?.[key] || key;

/** @type {() => (key: string) => string} */
export const useTranslation = () => {
  const contextLanguage = useContext(TranslationContext);
  const defaultLanguage = useDefaultLanguage();
  const language = useMemo(() => normalizeLanguage(contextLanguage || defaultLanguage), [
    contextLanguage,
    defaultLanguage,
  ]);
  return useCallback((key) => t(key, language), [language]);
};
