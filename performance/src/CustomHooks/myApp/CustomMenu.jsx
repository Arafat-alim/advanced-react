import React from "react";
import useToggler from "./useToggler";

function CustomMenu() {
  const [show, toggle] = useToggler(true);
  return (
    <div>
      <button onClick={toggle}>{show ? "Hide" : "Show"}</button>
      <ul style={{ display: show ? "block" : "none" }}>
        <li>Home</li>
        <li>Contact</li>
        <li>Work</li>
        <li>About</li>
      </ul>
    </div>
  );
}

export default CustomMenu;
