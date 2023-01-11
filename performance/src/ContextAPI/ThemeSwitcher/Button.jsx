import React from "react";
import PropTypes from "prop-types";
import { ThemeContextConsumer } from "./themeContext.jsx";

function Button() {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <button
          className={`${context.theme}-theme`}
          style={{ cursor: "pointer" }}
          onClick={context.toggleTheme}
        >
          Switch Theme
        </button>
      )}
    </ThemeContextConsumer>
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
