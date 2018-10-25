import { shallow } from "enzyme";
import React from "react";
import ContainerBasedCounterContainer from "./ContainerBasedCounterContainer";

describe("ContainerBasedCounterContainer", () => {
  const setup = () => {
    const Component = ContainerBasedCounterContainer(React.Component);
    const wrapper = shallow(<Component />);
    return { wrapper };
  };

  it("should increment", () => {
    const { wrapper } = setup();
    wrapper.instance().handleDec();
    expect(wrapper.state().count).toEqual(-1);
  });

  it("should decrement", () => {
    const { wrapper } = setup();
    wrapper.instance().handleDec();
    expect(wrapper.state().count).toEqual(-1);
  });

  it("should have count", () => {
    const { wrapper } = setup();
    expect(wrapper.state().count).toEqual(0);
  });
});
