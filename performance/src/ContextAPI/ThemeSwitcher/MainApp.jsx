import React from "react";
import FunctionApp from "./FunctionApp";
import { ThemeContext } from "./themeContext";

function MainApp() {
  return (
    <ThemeContext>
      <FunctionApp />
    </ThemeContext>
  );
}

export default MainApp;
