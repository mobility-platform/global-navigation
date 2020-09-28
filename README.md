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

    // (Optional) `preferredLanguage` a 2-letters language ISO code for Global Navigation translations.
    // This will fallback to the navigator language.
    preferredLanguage: "fr",
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

### Vertical Navigation with React

https://codesandbox.io/s/mobility-platformglobal-navigation-react-9y9j9

### Vertical Navigation in Vanilla JS

https://codesandbox.io/s/mobility-platformglobal-navigation-vanilla-js-wywym

## License

[Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0)](https://creativecommons.org/licenses/by-nd/4.0/)
