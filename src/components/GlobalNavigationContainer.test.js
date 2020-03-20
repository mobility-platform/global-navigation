import { h } from "preact";
import { mount } from "enzyme";
import GlobalNavigationContainer from "./GlobalNavigationContainer";
import VerticalNavigation from "./VerticalNavigation";
import ApplicationSwitcher from "./ApplicationSwitcher";

describe("VerticalNavigation", () => {
  it("should throw and link to documentation when the component is launched without required props", () => {
    expect(() => {
      mount(<GlobalNavigationContainer as={VerticalNavigation} />);
    }).toThrow(
      "`VerticalNavigation` requires the `apiUrl`, `profileApiUrl`, `backofficeUrl` and `getToken` props. See https://mobility-platform-docs.netlify.com/"
    );
  });
});

describe("ApplicationSwitcher", () => {
  it("should throw and link to documentation when the component is launched without required props", () => {
    expect(() => {
      mount(<GlobalNavigationContainer as={ApplicationSwitcher} />);
    }).toThrow(
      "`ApplicationSwitcher` requires the `apiUrl`, `profileApiUrl`, `backofficeUrl` and `getToken` props. See https://mobility-platform-docs.netlify.com/"
    );
  });
});
