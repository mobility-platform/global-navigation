# Global Navigation

The Global Navigation is part of the Michelin Mobility Platform. The navigation is used to travel between Mobility Platform applications and can be used on any website.

## Installation

This package can be installed with any package manager

```bash
npm i @mobility-platform/global-navigation
```

or

```bash
yarn add @mobility-platform/global-navigation
```

If you don't want to use a package manager and only want to include the Global Navigation as a script, you can import the UMD version at the end of the `body` tag:

```html
<body>
  <!-- ... -->
  <script src="https://unpkg.com/@mobility-platform/global-navigation" async></script>
</body>
```

## Usage

After adding the package, you can render the global navigation in you application.
The Global Navigation is a vertical navigation bar **fixed** on the left of the screen, visible all the time. You should prepare a `60px` padding to the left of your app to avoid content going behind the Global Navigation.

```javascript
import { verticalNavigation } from "@mobility-platform/global-navigation";

verticalNavigation.render({
  selector: '[data-widget-host="what-you-want"]', //DOM Element selector
  defaultProps: {
    // `getToken` is a function returning a Promise resolving with an authentication token or rejecting if the user is not authenticated
    getToken,

    // The Global Navigation `configurationUrl`. You may want to change this depending on the application environment (e.g.: staging or production)
    // Use https://unpkg.com/@mobility-platform/global-navigation-configuration/development.config.json for development / staging,
    // and https://unpkg.com/@mobility-platform/global-navigation-configuration/production.config.json for production
    configurationUrl:
      "https://unpkg.com/@mobility-platform/global-navigation-configuration/development.config.json"

    // (Optional) `loginUrl` is the URL used when the user is not authenticated to the Mobility Platform.
    // In this case, a login button can be added to the Global Navigation
    loginUrl: "https://my-app.com/login",

    // (Optional) `footerLinks`, custom links that can be added at the bottom of the Global Navigation
    footerLinks: [
      {
        href: "https://my-app.com/developers",
        label: "Developers",
        icon: `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      },
      {
        href: "https://my-app.com/terms-of-user",
        label: "Terms of use",
        icon: `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
      },
      {
        href: "https://my-app.com/help",
        label: "Help",
        icon: `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>`,
      },
    ],
  }
});
```

or if you are using the UMD version:

```html
<script>
  window.globalnavigation.verticalNavigation.render({
    selector: '[data-widget-host="what-you-want"]', //DOM Element selector
    defaultProps: {
      // Same as the previous example
    },
  });
</script>
```

More information about the Mobility Platform can be find here : https://mobility-platform-docs.netlify.com/getting-started

## Examples

##### Vertical Navigation with React

https://codesandbox.io/s/mobility-platformglobal-navigationreact-verticalnavigation-9y9j9

## License

[Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0)](https://creativecommons.org/licenses/by-nd/4.0/)
