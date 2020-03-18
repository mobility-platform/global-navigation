const getNavigationLinks = baseUrl => {
  if (!baseUrl) {
    return;
  }
  return {
    globalLinks: [
      {
        href: `${baseUrl}`,
        label: "My Home",
        icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          fill="none"
          viewBox="0 0 16 17"
        >
          <defs />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 6.3L8 1l7 5.3v8.2c0 .8-.7 1.5-1.6 1.5H2.6c-.9 0-1.6-.7-1.6-1.5V6.2z"
            clip-rule="evenodd"
          />
        </svg>
        `
      },
      {
        href: `${baseUrl}/groups`,
        label: "My Organization",
        icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          viewBox="0 0 448 512"
        >
          <defs />
          <path d="M352 320a95.6 95.6 0 00-59.8 20.9l-102.5-64a96.6 96.6 0 000-41.7L292.2 171a96 96 0 10-34-54.3l-102.4 64a96 96 0 100 150.2l102.5 64.2A96.3 96.3 0 00256 416a96 96 0 1096-96z" />
        </svg>
        `
      }
    ],
    profileLink: {
      href: `${baseUrl}/user/me`,
      label: "View my profile"
    }
  };
};

export default getNavigationLinks;
