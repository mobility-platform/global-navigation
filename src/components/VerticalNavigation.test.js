import VerticalNavigation from "./VerticalNavigation";
import { h } from "preact";
import { mount } from "enzyme";

describe("VerticalNavigation", () => {
  it("should throw and link to documentation when the component is launched without an apiUrl or a getToken method", () => {
    expect(() => {
      mount(<VerticalNavigation />);
    }).toThrow(
      "`VerticalNavigation` requires the `apiUrl` and `getToken` props. See https://mobility-platform-docs.netlify.com/"
    );
  });
});
