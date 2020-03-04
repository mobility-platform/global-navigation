import { h, createContext } from "preact";
import { useState, useContext } from "preact/hooks";

const ThemeContext = createContext();

export const ThemeProvider = ({ children, defaultTheme }) => {
  const state = useState(defaultTheme);

  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const [theme] = useContext(ThemeContext);
  return theme;
};

export const withTheme = Component => {
  const WithTheme = props => {
    const theme = useTheme();
    return <Component theme={theme} {...props} />;
  };
  return WithTheme;
};

export const defaultTheme = {
  collapsed: {
    brand: {
      background: "#ffffff"
    },
    primary: "#fce500",
    color: "#eef5ff",
    background: "#0747a6"
  },
  extended: {
    brand: {
      background: "#ffffff"
    },
    primary: "#0747a6",
    color: "#3e4757",
    background: "#ffffff"
  }
};
