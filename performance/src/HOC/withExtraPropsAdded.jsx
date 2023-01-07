import React from "react";

export function withExtraPropsAdded(component) {
  const Component = component;
  return function (props) {
    return (
      <Component {...props} anotherProps="Arafat is the boss of all coder" />
    );
  };
}
