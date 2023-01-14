import React, { Component, createContext, useState } from "react";
const ThemeContext = createContext();

//! Class Component
function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("dark");
  //! Methods
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
export { ThemeContextProvider, ThemeContext };
