import { shallow } from "enzyme";
import React from "react";
import RecomposeBasedCounter from "./RecomposeBasedCounter";

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
    it("should be implemented", () => {});
  });
});
