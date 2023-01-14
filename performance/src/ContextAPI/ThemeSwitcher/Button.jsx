import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./themeContext.jsx";

function Button() {
  const context = useContext(ThemeContext);
  console.log(context);
  return (
    <button
      className={`${context.theme}-theme`}
      style={{ cursor: "pointer" }}
      onClick={context.toggleTheme}
    >
      Switch Theme
    </button>
  );
}

//! handling prop types using npm package - npm i prop-types
Button.protoType = {
  theme: PropTypes.oneOf(["light", "dark"]),
};
//! handling default Props
Button.defaultProps = {
  theme: "light",
};

export default Button;
