import { shallow } from "enzyme";
import React from "react";
import ContainerBasedCounterContainer from "./ContainerBasedCounterContainer";

describe("ContainerBasedCounterContainer", () => {
  const setup = () => {
    const Component = ContainerBasedCounterContainer(React.Component);
    const wrapper = shallow(<Component />);
    return { wrapper };
  };

  it("should be implemented", () => {
    const { wrapper } = setup();
    console.log(wrapper.state());
    console.log(wrapper.handleInc);
  });
});
