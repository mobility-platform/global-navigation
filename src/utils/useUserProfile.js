import jwtDecode from "jwt-decode";
import { useEffect, useState } from "preact/hooks";
import { authenticatedFetch } from "./useAuthenticatedFetch";

/** @typedef {() => Promise<string> | string} TokenResolver */
/** @typedef {{ id: string, name: string, picture: string }} User */

/**
 * Fetch the current user's profile.
 * @type {(getToken: TokenResolver, url: string) => User | null}
 */
export const useUserProfile = (getToken, url) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    getToken()
      .then(token => jwtDecode(token))
      .then(decodedToken =>
        authenticatedFetch(getToken, `${url}/users/${decodedToken.sub}?select=id,name,picture`)
      )
      .then(setState);
  }, [getToken, url]);
  return state;
};
