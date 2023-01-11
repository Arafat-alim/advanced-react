import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <button className={`${props.theme}-theme`} style={{ cursor: "pointer" }}>
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
