import { shallow } from "enzyme";
import React from "react";
import ContainerBasedCounter from "./ContainerBasedCounter";

describe("<ContainerBasedCounter/>", () => {
  const setup = () => {
    const props = {
      count: 0,
      handleDec: jest.fn(),
      handleInc: jest.fn()
    };

    const wrapper = shallow(<ContainerBasedCounter {...props} />);

    return { wrapper };
  };
  it("should display counter with two buttons", () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
