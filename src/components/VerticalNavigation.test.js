import { render } from "@testing-library/preact";
import { h } from "preact";
import { useFetchConfiguration } from "../utils/Configuration";
import productionConfiguration from "../utils/__fixtures__/production.config.json";
import VerticalNavigation from "./VerticalNavigation";
jest.mock("../utils/Configuration");

describe("VerticalNavigation", () => {
  beforeAll(() => {
    useFetchConfiguration.mockReturnValue(productionConfiguration);
  });

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
