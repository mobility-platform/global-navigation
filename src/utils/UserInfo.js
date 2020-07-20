import JwtDecode from "jwt-decode";
import { createContext, h } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import { useConfiguration } from "./Configuration";

const UserInfoContext = createContext();

export const UserInfoProvider = ({ getToken, children }) => {
  const configuration = useConfiguration();
  const userInfo = useFetchUserInfo(getToken, configuration?.userApiUrl);
  return <UserInfoContext.Provider value={userInfo}>{children}</UserInfoContext.Provider>;
};

export const useUserInfo = () => {
  return useContext(UserInfoContext);
};

const useFetchUserInfo = (getToken, url) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    if (url) {
      getToken()
        .then((token) => JwtDecode(token))
        .then((decodedToken) =>
          getToken()
            .then((token) =>
              fetch(`${url}/${decodedToken.sub}?select=id,name,picture`, {
                headers: { Authorization: `Bearer ${token}` },
              })
            )
            .then((response) => response.json())
        )
        .then(setState);
    }
  }, [getToken, url]);
  return state;
};
