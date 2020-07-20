import { ThemeContext } from "@emotion/core";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useConfiguration } from "./Configuration";

const defaultTheme = {
  primary: "#27509b",
  background: "#FFFFFF",
};

export const ThemeProvider = ({ getToken, children }) => {
  const configuration = useConfiguration();
  const theme = useFetchTheme(getToken, configuration?.themeApiUrl);
  return (
    <ThemeContext.Provider value={theme ? theme : defaultTheme}>{children}</ThemeContext.Provider>
  );
};

const useFetchTheme = (getToken, url) => {
  const [state, setState] = useState();
  useEffect(() => {
    if (url) {
      getToken()
        .then((token) => fetch(url, { headers: { Authorization: `Bearer ${token}` } }))
        .then((response) => response.json())
        .then(setState);
    }
  }, [getToken, url]);
  return state;
};
