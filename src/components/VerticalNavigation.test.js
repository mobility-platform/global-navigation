import { mount } from "enzyme";
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
    const wrapper = mount(
      <VerticalNavigation
        configurationUrl="https://unpkg.com/@mobility-platform/global-navigation-configuration@latest/production.config.json"
        getToken={() => Promise.reject()}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("div").hasClass("mpgn")).toBe(true);
  });

  it("should throw an error if configurationUrl or getToken are not passed to the component", () => {
    expect(() => {
      mount(<VerticalNavigation />);
    }).toThrow(
      `Global Navigation requires the \`configurationUrl\` and \`getToken\` props. See https://mobility-platform-docs.netlify.com/`
    );
  });
});
