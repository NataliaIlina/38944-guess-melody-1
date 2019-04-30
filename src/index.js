import React from "react";
import ReactDOM from "react-dom";
import WelcomeScreen from "./components/welcome-screen/welcome-screen.jsx";

const init = () => {
  ReactDOM.render(<WelcomeScreen />, document.querySelector(`.main`));
};

init();
