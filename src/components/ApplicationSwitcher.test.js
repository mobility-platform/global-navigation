import ApplicationSwitcher from "./ApplicationSwitcher";
import { h } from "preact";
import { mount } from "enzyme";

describe("ApplicationSwitcher", () => {
  it("should throw and link to documentation when the component is launched without an apiUrl or a getToken method", () => {
    expect(() => {
      mount(<ApplicationSwitcher />);
    }).toThrow(
      "`ApplicationSwitcher` requires the `apiUrl`, `profileApiUrl` and `getToken` props. See https://mobility-platform-docs.netlify.com/"
    );
  });
});
