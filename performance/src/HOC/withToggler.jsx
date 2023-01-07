import React from "react";

//! created a class based component

export function withTOggler(component) {
  return function (props) {
    return <Toggler component={component} {...props} />;
  };
}
