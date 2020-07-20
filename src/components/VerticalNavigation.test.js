import { render } from "@testing-library/preact";
import { h } from "preact";
import VerticalNavigation from "./VerticalNavigation";

describe("VerticalNavigation", () => {
  it("should render without crashing", () => {
    const wrapper = render(
      <VerticalNavigation
        configurationUrl="https://unpkg.com/@mobility-platform/global-navigation-configuration@latest/production.config.json"
        getToken={() => Promise.reject()}
      />
    );
    expect(wrapper.asFragment()).toMatchSnapshot();
    expect(wrapper.asFragment().firstElementChild.className).toBe("mpgn");
  });

  it("should throw an error if configurationUrl or getToken are not passed to the component", () => {
    expect(() => {
      render(<VerticalNavigation />);
    }).toThrow(
      `Global Navigation requires the \`configurationUrl\` and \`getToken\` props. See https://mobility-platform-docs.netlify.com/`
    );
  });
});
