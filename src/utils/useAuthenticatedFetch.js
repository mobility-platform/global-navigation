import { useEffect, useState } from "preact/hooks";

/** @typedef {() => Promise<string> | string} TokenResolver */

/** @type {<T>(getToken: TokenResolver, url: string) => Promise<T>} */
const authenticatedFetch = (getToken, url) =>
  getToken()
    .then(token => fetch(url, { headers: { Authorization: `Bearer ${token}` } }))
    .then(response => response.json());

/** @type {<S>(getToken: TokenResolver, url: string, initialState: S | (() => S)): S | undefined} */
export const useAuthenticatedFetch = (getToken, url, initialState) => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    authenticatedFetch(getToken, url).then(setState);
  }, [getToken, url]);
  return state;
};
