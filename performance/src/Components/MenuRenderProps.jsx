import React from "react";
import Toggler from "./Toggler";

function MenuRenderProps() {
  return (
    <Toggler
      defaultOnValue={true}
      render={function ({ on, toggle }) {
        return (
          <div>
            <button onClick={toggle}>{on ? "Hide" : "Show"}</button>
            {on ? (
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>WOrk</li>
              </ul>
            ) : null}
          </div>
        );
      }}
    />
  );
}

export default MenuRenderProps;
