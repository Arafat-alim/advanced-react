import React from "react";
import FunctionApp from "./FunctionApp";
import { ThemeContextProvider } from "./themeContext";

function MainApp() {
  return (
    <ThemeContextProvider>
      <FunctionApp />
    </ThemeContextProvider>
  );
}

export default MainApp;
