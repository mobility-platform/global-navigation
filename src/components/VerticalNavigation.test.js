import { fireEvent, render } from "@testing-library/preact";
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

  it("should show the collapsed navigation by default", () => {
    const wrapper = render(
      <VerticalNavigation
        configurationUrl="https://unpkg.com/@mobility-platform/global-navigation-configuration@latest/production.config.json"
        getToken={() => Promise.reject()}
      />
    );
    expect(wrapper.getByLabelText("Collapsed global navigation").getAttribute("aria-hidden")).toBe(
      "false"
    );
    expect(wrapper.getByLabelText("Extended global navigation").getAttribute("aria-hidden")).toBe(
      "true"
    );
  });

  it("should show the extended navigation when the button is menu button is clicked", () => {
    const wrapper = render(
      <VerticalNavigation
        configurationUrl="https://unpkg.com/@mobility-platform/global-navigation-configuration@latest/production.config.json"
        getToken={() => Promise.reject()}
      />
    );
    fireEvent.click(wrapper.getByLabelText("Open the menu"));

    expect(wrapper.getByLabelText("Collapsed global navigation").getAttribute("aria-hidden")).toBe(
      "true"
    );
    expect(wrapper.getByLabelText("Extended global navigation").getAttribute("aria-hidden")).toBe(
      "false"
    );
  });

  it("should close the extended navigation when the back button is clicked", () => {
    const wrapper = render(
      <VerticalNavigation
        configurationUrl="https://unpkg.com/@mobility-platform/global-navigation-configuration@latest/production.config.json"
        getToken={() => Promise.reject()}
      />
    );
    fireEvent.click(wrapper.getByLabelText("Open the menu"));
    fireEvent.click(wrapper.getByLabelText("Close the menu"));

    expect(wrapper.getByLabelText("Collapsed global navigation").getAttribute("aria-hidden")).toBe(
      "false"
    );
    expect(wrapper.getByLabelText("Extended global navigation").getAttribute("aria-hidden")).toBe(
      "true"
    );
  });

  it("should close the extended navigation when the backdrop is clicked", () => {
    const wrapper = render(
      <VerticalNavigation
        configurationUrl="https://unpkg.com/@mobility-platform/global-navigation-configuration@latest/production.config.json"
        getToken={() => Promise.reject()}
      />
    );
    fireEvent.click(wrapper.getByLabelText("Open the menu"));
    fireEvent.click(wrapper.getByTestId("backdrop"));

    expect(wrapper.getByLabelText("Collapsed global navigation").getAttribute("aria-hidden")).toBe(
      "false"
    );
    expect(wrapper.getByLabelText("Extended global navigation").getAttribute("aria-hidden")).toBe(
      "true"
    );
  });
});
