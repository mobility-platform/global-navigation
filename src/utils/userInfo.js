import MD5 from "./MD5";

export const displayName = userInfo => {
  if (userInfo.name) {
    return userInfo.name;
  }
  if (userInfo.email) {
    return userInfo.email;
  }
  if (userInfo.phone_number) {
    return userInfo.phone_number;
  }
  return `Unknown`;
};

export const displayPicture = userInfo => {
  if (userInfo.picture) {
    return userInfo.picture;
  }
  if (userInfo.name) {
    return `http://www.gravatar.com/avatar/${MD5(userInfo.name)}.jpg?s=182`;
  }
  if (userInfo.email) {
    return `http://www.gravatar.com/avatar/${MD5(userInfo.email)}.jpg?s=182`;
  }
  if (userInfo.phone_number) {
    return `http://www.gravatar.com/avatar/${MD5(userInfo.phone_number)}.jpg?s=182`;
  }
  return `https://www.gravatar.com/avatar/`;
};
