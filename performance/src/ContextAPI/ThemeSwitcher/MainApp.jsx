import React from "react";
import FunctionApp from "./FunctionApp";
import ThemeContext from "./themeContext";

function MainApp() {
  return (
    <ThemeContext.Provider value={"dark"}>
      <FunctionApp />
    </ThemeContext.Provider>
  );
}

export default MainApp;
