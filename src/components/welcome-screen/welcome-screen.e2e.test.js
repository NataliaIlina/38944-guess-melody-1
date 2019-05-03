import React from "react";
import {shallow} from "enzyme";
import WelcomeScreen from "./welcome-screen";

it(`click on start button works correctly`, () => {
  const clickHandler = jest.fn();
  const wrapper = shallow(
      <WelcomeScreen
        time={10}
        errorsCount={10}
        onStartButtonClick={clickHandler}
      />
  );
  const startButton = wrapper.find(`.welcome__button`);
  expect(clickHandler).toHaveBeenCalledTimes(0);
  startButton.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
