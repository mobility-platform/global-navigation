import { createContext, h } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";

const ConfigurationContext = createContext();

export const ConfigurationProvider = ({ url, children }) => {
  const configuration = useFetchConfiguration(url);
  return (
    <ConfigurationContext.Provider value={configuration}>{children}</ConfigurationContext.Provider>
  );
};

export const useConfiguration = () => {
  return useContext(ConfigurationContext);
};

const useFetchConfiguration = url => {
  const [state, setState] = useState();
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(setState);
  }, [url]);
  return state;
};
