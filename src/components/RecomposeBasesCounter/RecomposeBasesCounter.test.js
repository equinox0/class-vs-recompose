import { shallow, mount } from "enzyme";
import React from "react";
import { RecomposeBasedCounter, enhance } from "./RecomposeBasedCounter";

describe("<RecomposeBasedCounter/>", () => {
  describe("component", () => {
    const setup = () => {
      const props = {
        count: 0,
        handleDec: jest.fn(),
        handleInc: jest.fn()
      };
      const wrapper = shallow(<RecomposeBasedCounter {...props} />);
      return { wrapper };
    };

    it("should display counter with two buttons", () => {
      const { wrapper } = setup();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("enhance", () => {
    const setup = () => {
      const MockComponent = () => null;
      const EnhancedComponent = enhance(MockComponent);
      const wrapper = mount(<EnhancedComponent />);
      const outputProps = wrapper.find(MockComponent).props();
      return { MockComponent, outputProps, wrapper };
    };

    it("should increment", () => {
      const { MockComponent, outputProps, wrapper } = setup();
      outputProps.handleInc();
      wrapper.update();
      const newProps = wrapper.find(MockComponent).props();
      expect(newProps.count).toEqual(1);
    });

    it("should decrement", () => {
      const { MockComponent, outputProps, wrapper } = setup();
      outputProps.handleDec();
      wrapper.update();
      const newProps = wrapper.find(MockComponent).props();
      expect(newProps.count).toEqual(-1);
    });

    it("should have count", () => {
      const { outputProps } = setup();
      expect(outputProps.count).toEqual(0);
    });
  });
});
