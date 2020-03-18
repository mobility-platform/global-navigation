const getNavigationLinks = baseUrl => {
  if (!baseUrl) {
    return;
  }
  return {
    globalLinks: [
      {
        href: `${baseUrl}`,
        label: "My Home",
        icon: `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>`
      },
      {
        href: `${baseUrl}/groups`,
        label: "My Organization",
        icon: `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
      }
    ],
    profileLink: {
      href: `${baseUrl}/user/me`,
      label: "View my profile"
    }
  };
};

export default getNavigationLinks;
