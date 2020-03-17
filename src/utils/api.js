import fetch from "unfetch";

export const fetchTheme = async ({ getToken, apiUrl }) => {
  const token = await getToken();

  const endPoint = `${apiUrl}/themes/current`;

  let response = await fetch(endPoint, {
    headers: {
      Authorization: "Bearer " + token
    }
  });
  let data = await response.json();

  return data;
};

export const fetchApplications = async ({ getToken, apiUrl }) => {
  const token = await getToken();

  const endPoint = `${apiUrl}/applications`;

  let response = await fetch(endPoint, {
    headers: {
      Authorization: "Bearer " + token
    }
  });
  let data = await response.json();

  return data;
};

export const fetchProfile = async ({ getToken, profileApiUrl }) => {
  const token = await getToken();

  let response = await fetch(profileApiUrl, {
    headers: {
      Authorization: "Bearer " + token
    }
  });
  let data = await response.json();

  return data;
};
