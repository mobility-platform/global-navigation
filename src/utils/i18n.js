import { createContext } from "preact";
import { useCallback, useContext, useMemo } from "preact/hooks";

const translations = {
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

/** @type {() => string} */
const useDefaultLanguage = () => {
  return useMemo(() => navigator.languages?.[0] || navigator.language, []);
};

/** @type {(language: string) => string} */
const normalizeLanguage = language => {
  return language.substr(0, 2);
};

/** @type {import("preact").Context<string>} */
const TranslationContext = createContext("en");

export const TranslationProvider = TranslationContext.Provider;

/** @type {(key: string, language: string) => string} */
export const t = (key, language) => translations?.[language]?.[key] || key;

/** @type {() => (key: string) => string} */
export const useTranslation = () => {
  const contextLanguage = useContext(TranslationContext);
  const defaultLanguage = useDefaultLanguage();
  const language = useMemo(() => normalizeLanguage(contextLanguage || defaultLanguage), [
    contextLanguage,
    defaultLanguage
  ]);
  return useCallback(key => t(key, language), [language]);
};
