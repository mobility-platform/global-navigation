import { h, createContext } from "preact";
import { useContext } from "preact/hooks";

const ThemeContext = createContext();

export const ThemeProvider = ({ children, theme }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

export const useTheme = () => {
  const theme = useContext(ThemeContext);
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
  color: "#eef5ff",
  primary: "#0747a6",
  background: "#FFFFFF"
};
