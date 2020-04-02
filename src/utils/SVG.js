import { h } from "preact";

export const FiHome = () => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );
};

export const FiUsers = () => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
};

export const FiMenu = () => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
};

export const FiArrowLeft = () => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
};

export const FiX = () => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      height="1em"
      width="1em"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
};

export const MichelinLogo = props => {
  return (
    <svg fill="none" viewBox="0 0 198 105" {...props}>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M38.3 19.4l.2.6a62 62 0 003 6.3c.8 1.4 1.5 2.4 2.2 3.3a11.2 11.2 0 00-1.7 3.8 12 12 0 00.5 6.3c.3.9.7 1.7 1.2 2.5v.3c-.6 4.3 1.3 8.6 5 11.3l1.8 1.2a9.4 9.4 0 003.2 4.4 13.2 13.2 0 003.6 2c1.5 2 3.6 3.5 6.2 4.2l2 .4.1.1c1.3 1.3 3 2.2 5 2.7-.4 2.6 0 4.5.4 6h71.7c0-2.4-.6-4.8-1.9-6.9v-.1c.4-3.3-.4-6.7-2.3-9.5-2-3-5-5-8.7-5.7l-1-.2h-.2a30 30 0 00-8.9-6l.1-.5h.2c3.8-1.7 6.2-4.6 6.7-8.3.3-3-.5-6.2-2.1-8.5V29c.4-4-.2-7.5-1.8-10.4a12.3 12.3 0 00-5.5-5.2c-.6-2.2-3.4-3.8-6.3-3.7-2.3 0-4.8 1.1-5.8 2.9-3.5 1.3-9 4.5-10.6 12.8-2.4 1.8-4 4.5-4.3 7.4-.5 3.3.6 6.6 2.9 9a52 52 0 00-10.1 1H83a13.8 13.8 0 00-11.3-2.1 1.4 1.4 0 00-.4.2c-1-.4-2.2-.6-3.5-.7h-.2a11 11 0 00-2.8-4.7 2.7 2.7 0 00-.2-.2 24.7 24.7 0 00-.7-3.2c-.4-1.2-1-2.6-2.6-4.3a10.7 10.7 0 00-3-2.1l.3-1v-.3s.4-4 .9-6.4l1.3-8.4c0-.8-.2-1.5-.7-2-.6-.7-1.6-1.1-2.6-1.1-1.5 0-2.8.7-3.6 2a11 11 0 00-1 2.5l-4.5-8.6A3.4 3.4 0 0045.5.6c-.4 0-.9 0-1.3.2a3.4 3.4 0 00-3.4-.6 3.3 3.3 0 00-2.3 3.3 3.1 3.1 0 00-2 2.5c-.2.8 0 1.4 0 1.8l.1.2-.1.1c-.8 1.2-1.2 3.5 1.8 11.2z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M93.7 44s1 .1 1.7.3c1 .5 3.1 2.5 4.2 2.7.2 0 .7-.2.2-.5-.2-.1-1.5-1.3-1-2 .2-.2.5-.3.7-.2a40.4 40.4 0 004.1.6l-.3-.2c-2.5-.7-5.3-1.8-7.3-3.3-2.6-2-4-5.2-3.6-8.3a8.7 8.7 0 013.4-5.9c.8-.5 2-1 2.3-1 1-.4-.5-.6-.7-.7-.3 0-.4-.4 0-1.6a13.5 13.5 0 0110.8-9.8c1-.1.6-.5-.4-.7 0 0-.3 0-.2-.2l.5-.5a6.2 6.2 0 013-.8c2 0 3.8 1.1 4 2.1 0 0 .1.3-.2.3-.4 0-.7.1-.1.4l1.4.6h.1c1.6.8 6.5 3.8 6 12.1V29c-.5 0-.7.1-.4.5.3.2.9 1 1.2 1.5 1 1.8 1.6 4.2 1.3 6.4-.3 3-2.2 4.8-4 5.9-.9.4-2.8 1.4-5.2 1.9-.5.1-.3.7 2 .7.2 0 .6 0 .7.3.3.4-.2 1.4-1.2 2-.8.5-.2.6 1 .2.4 0 1.3.3 1.4.4 2 .9 6.8 3.4 10.4 8.2 2.5 3.6 3.4 6.5 2.6 8.3-.7 1.7-3 2-3 2a95.3 95.3 0 01-41.6-6.7c2.3-5 1.5-11.4-2.3-15.6l-.2-.2c3.8-.6 6.9-.7 8.7-.7z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M136.6 59.6a11.4 11.4 0 011.7 8.5 11.4 11.4 0 01-3.7 6.4c0-2-.3-4.5-1.9-6.4a5.7 5.7 0 001.6-2c1.2-2.5.2-6-2.9-10.4a1.1 1.1 0 01-.2-.3c2.2.8 4 2.3 5.4 4.2zM83.5 46.5a12.5 12.5 0 01-12 20.3 11 11 0 01-2.1-.8 15.8 15.8 0 001.4-.3c5-1.3 8.7-5.9 9.2-11.3.4-3.5-.6-7-2.7-9.5a11.3 11.3 0 00-2.5-2.3c3.2 0 6.5 1.4 8.7 3.9z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M75.5 46.3a11 11 0 012.2 7.8c-.4 4.5-3.5 8.2-7.5 9.3-3.4 1-6.7.2-9-1.3 5-.1 9.7-3.5 11.3-8.4A11.7 11.7 0 0070.7 43c2 .6 3.6 1.7 4.8 3.2z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M67.8 46.4c.2-.9.3-1.8.2-2.8a9 9 0 012.3 9.4 9.8 9.8 0 01-11.1 6.6c-2-.5-4.2-1.7-5.6-3.5a12.3 12.3 0 007.3-.7 12 12 0 006.9-9z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M64.4 38.8c1.2 2 1.7 4.6 1.2 7.2a9.9 9.9 0 01-5.6 7.4c-3.2 1.4-7 .9-10-1.4a10 10 0 01-4-7l.7.6c1.8 1.3 4 2 6.4 2 1.6 0 2.8-.4 3-.4 4.3-1.2 6.3-3.7 7.3-5.6.5-1 .8-2 1-2.8z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M38.4 9.3h.1l.3-.2H39.4c.7.2 1.2 1.1 1.3 2.3.5 3.3 2 5.6 2.1 5.7l.4.2.3-.1c.2-.1.3-.5.1-.7 0 0-1.5-2.1-1.9-5.3-.2-1.5-.9-2.6-2-3-.2 0-.5-.2-.7-.1a4.4 4.4 0 01-.3-.8c0-.4-.3-1.3.7-1.6h.2c.8-.1 1.7.2 2.6 3.4.8 3 2.7 6 2.8 6 .1.2.3.2.4.2h.3a.5.5 0 00.1-.7s-1.9-3-2.6-5.7c-.5-1.4-1-3-2-3.7l-.2-.9c-.2-.5-.4-1.5.6-1.8h.4c.7 0 1.1.6 1.3 1v.2l4.2 9.9v.1c.2.2.4.2.6.1a.5.5 0 00.2-.6l-4-9.5.5-.5.7-.2c.6 0 .9.5.9.5l6.3 12.3-.8 1.5c0 .2.1.5.2.2.3-.4.7-1 1.1-1.3V16l1.4-3.2c.2-1 .6-2.2 1.1-3 .5-.7 1.1-1 1.7-1 .6 0 1 .3 1 .6l-1.3 8.2-.8 5.5-.1 1V24.5c-.3 1.3-.8 2.2-.8 2.2l.4 2 .4 1.9c.3 1 0 1.7.1 2 .3.2 1-1.2 1.2-2a7 7 0 00-.3-2.7c.5.3 1.4.8 2.2 1.6a7.4 7.4 0 012 3.3c.3 1 .8 2.9.8 3.9s-.3 6.5-6.8 8.4c0 0-1 .3-2.4.3-1.5 0-3.4-.3-5-1.6a10.7 10.7 0 01-3.8-9.7 9.3 9.3 0 011.2-2.9l1 .5.1.9S47 35 48 35.9c.6.5 1.5.5 1.7.5.3 0 1 0 1.1-.3v-.3a1.4 1.4 0 00-.3-.2c-.5-.3-1.4-.7-1.6-1.6 0-.5-.5-2.1-.7-3.1 1-.8 1-1.6-.2-1.3-.8.1-1.5-.2-2-.7-2.5-2.2-5.2-9-5.8-10.2-2-5.7-2.4-8.6-1.8-9.4zm102 65.5h-2.8a15 15 0 002.2-3.6c.4 1.1.6 2.3.6 3.6zm-67.7-5.5h1.4a15 15 0 0012.3-6.7c2.5 1 5.5 2.1 7.5 2.7a124.6 124.6 0 0029.3 4.7 43.6 43.6 0 007.4-.7c1.4 1.4 1.7 3.6 1.6 5.5H73.5c-.6-1.2-1-3-.8-5.5z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M109.2 21.8c1.4.9 1.7 2.4 1.6 4.3 0 2.2-1.4 4.4-2.8 4.5h-1a4.9 4.9 0 01-1-.3 2 2 0 01-.9-.6c-.5-.7-.8-1.5-.9-2.3l.1-2.3c.2-.8.4-1.6.8-2.2a3 3 0 011.7-1.4 3.1 3.1 0 012 0l.4.3zm.2 7c-.5.7-1 1.1-1.4 1.1h-.2c.8-.4 1.4-1.5 1.6-2.8.1-1.7-.7-3.2-1.9-3.3-.5 0-1 .3-1.5.7.4 0 .8.4.8 1s-.3 1-.8 1c-.3 0-.6-.2-.7-.6a7.7 7.7 0 00-.2.9c-.1 1 .2 2 .6 2.6a.4.4 0 01-.1-.2c-.4-.4-.7-1-.8-2v-1c0-1 .6-3.9 3-3.6 1.7.1 2.2 1.5 2.3 2.6v.2a5.7 5.7 0 01-.7 3.4zM104 33c0-.2-.3-.2-.3-.2l-.8.2c-.6.2-1 1-1 1.3v.2h.3l.2-.1c0-.1 0-.3.2-.5.1-.1.4-.4 1.1-.5.2 0 .4-.2.3-.4zm11 3.8a6 6 0 01-1.8 1 6 6 0 01-2 .1 7 7 0 01-2-.4 6 6 0 01-1.7-1.3c2.5.5 5 .8 7.4.6zm-3.2-1c1.5.2 3 .2 4.5-.1a16.4 16.4 0 001.8-.6h.1l.2-.1-.1-.1c-.1-.1 0-.3.2-.3s.5.3.5.4a.9.9 0 01.1.6c0 .3-.2.6-.3.5-.2 0-.2-.2-.2-.4l-1.6.8-.2.1-.6.4a5.4 5.4 0 01-.2.2l-1.3 1a5.6 5.6 0 01-2 .7c-1.4.2-3 0-4.2-.8a8.1 8.1 0 01-2.1-1.7l-1-.9a11 11 0 01-2-.8c-.2 0-.4-.2-.4-.5s.4-.5.7-.4h.1a.7.7 0 00.2.1l.2.1.4.2c2.3 1 4.8 1.5 7.2 1.7zm7.5-7.7a5.2 5.2 0 01-.3 1 4 4 0 01-1.2 1.7c-.2.2-.4.3-.7.3.7-.5 1.3-1.5 1.5-2.7.1-1.7-.7-3.2-1.8-3.3-.6 0-1.1.2-1.5.7.4 0 .7.4.8 1 0 .5-.3 1-.7 1-.4 0-.7-.3-.8-.7l-.2.9c0 1.2.2 2.2.8 2.8-.3-.2-.7-.7-.9-1.3a7.5 7.5 0 01-.1-1c-.1-.7-.1-1.5.3-2.6v-.1c.4-1.1 1.2-2.2 2.9-2 2.3.4 2 3.3 1.9 4.3zm-.7-5c.7.4 1 1 1.3 1.7.2.8.2 1.6.1 2.3a7 7 0 01-.4 2.3c-.3.7-.8 1.5-1.5 2a2 2 0 01-1 .4l-1-.1s-.6 0-.9-.2c-1.3-.4-2-2.9-1.5-5 .5-1.9 1-3.2 2.6-3.7a1 1 0 01.5-.1 3.4 3.4 0 011.8.4z"
        clipRule="evenodd"
      />
      <path
        fill="#FCE500"
        fillRule="evenodd"
        d="M11 74.8l-1.8 4.6h186.1l1.7-4.6H11z"
        clipRule="evenodd"
      />
      <path
        fill="#27509B"
        fillRule="evenodd"
        d="M77.4 86l-2.7 6.5c-.8-1.8-2.8-1.8-3.7-1.8-2 0-3.6.4-4.8 1-2.8 1.3-5.2 5.3-1.3 6.9 1.8.8 4.1.4 6.5 0l1.3-.3-2.2 5.7H70c-1 .2-3.6.7-6.3.7-5.8.2-11-2.2-11-6.4-.1-7.3 7.3-11.4 12.8-12.5 2.5-.5 7.2-1 11.9.1zm19.5 18.3l7-18.7h-8.7l-2.5 6.8h-4.5l2.5-6.8H82l-6.8 18.7h8.6L86 98h4.6l-2.4 6.3H97zm49-6.2h-9l4.7-12.5h-8.8l-7 18.7h17.8l2.2-6.2zm17-12.5l-6.9 18.7h-9l6.9-18.7h9zm17.8 12.8l4.8-12.8h7.6l-7 18.7h-12.7l.6-13.2-5 13.2h-7.6l6.9-18.7h10.5s1 0 1.6.8c.6.6.9 1.5.8 2.7v.9a2739.3 2739.3 0 01-.5 8.4zm-53-12.7l-1.8 4.9h-10.3l-.7 2h9.8l-1.7 4.6h-9.8l-.8 2.1H123l-1.8 5h-19l6.8-18.6h18.8zM46 104.3L53 85.6h-9l-7 18.7H46zm-7.4-18.7l-6.8 18.7h-8.3l5-13.2-9 13.2h-7.3l1-13.5-5 13.5H0l7-18.7h10.4c2.4 0 2.5 2.6 2.4 3.6l-.5 6.5 6.6-10h12.8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
