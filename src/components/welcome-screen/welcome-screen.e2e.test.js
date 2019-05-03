import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({adapter: new Adapter()});

it(`Handlers`, () => {
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
