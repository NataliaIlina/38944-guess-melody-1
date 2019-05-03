import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

it(`WelcomeScreen rendered correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen time={10} errorsCount={2} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
