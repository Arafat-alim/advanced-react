//! Functional Based Component
import React from "react";
import Toggler from "./Toggler";

function FavoriteRenderProps() {
  return (
    <>
      <Toggler
        // defaultOnValue={false}
        render={function (on, toggle) {
          return (
            <div>
              {console.log(on, toggle)}
              <h1>Click Here for favourite</h1>
              <span onClick={toggle} style={{ cursor: "pointer" }}>
                {on ? "❤" : "👏"}
              </span>
            </div>
          );
        }}
      />
    </>
  );
}

export default FavoriteRenderProps;
