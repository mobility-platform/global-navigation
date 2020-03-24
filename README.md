# Global Navigation

Global navigation is part of the Michelin Mobility Platform. The navigation is used to travel between Mobility Platform applications and can be used on any website.
We have worked to make the package as light and independent as possible, check it [Bundlephobia](https://bundlephobia.com/result?p=@mobility-platform/global-navigation)

## Installation

The package can be get with any package manager

```bash
npm i @mobility-platform/global-navigation
```

Or with unpkg for other cases

```bash
https://unpkg.com/@mobility-platform/global-navigation
```

## Usage

After adding the package you have two ways to display the global navigation and for that two components.
You can see usage exemples in `/exemples` folder in the repository.

##### Vertical Navigation

A vertical navigation bar **fixed** on the left of the screen, visible all the time.

```javascript
import { verticalNavigation } from "@mobility-platform/global-navigation";

verticalNavigation.render({
  selector: '[data-widget-host="what-you-want"]', //DOM Element selector
  defaultProps
});
```

The current size of the vertical bar is **60px**

##### Application Switcher

A button that displays a modal for a more discreet integration of global navigation

```javascript
import { applicationSwitcher } from "@mobility-platform/global-navigation";

applicationSwitcher.render({
  selector: '[data-widget-host="what-you-want"]', //DOM Element selector
  defaultProps
});
```

##### What is defaultProps ?

`defaultProps` contains all the options that will be passed to the component, see the table below to find out more

| Option        | Type                | Required | Description                                                                                      |
| ------------- | ------------------- | -------- | ------------------------------------------------------------------------------------------------ |
| getToken      | function(): Promise | true     | This method return a promise with the a JWT token who used to fetch Mobility Platform ressources |
| apiUrl        | string              | true     | Url of the Mobility Platform API                                                                 |
| profileApiUrl | string              | true     | Url of profile API                                                                               |
| backofficeUrl | string              | true     | Url of the backoffice provided by the Mobility Platform                                          |
| orientation   | string              | false    | Used in the applicationSwitcher to set orientation of the modal. By exemple : "top left"         |

More information about the Mobility Platform can be find here : https://mobility-platform-docs.netlify.com/getting-started

## Exemples

You can find examples of integrations in the `/examples` folder of this repository

## License

[Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0)](https://creativecommons.org/licenses/by-nd/4.0/)
