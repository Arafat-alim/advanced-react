import React from "react";
import useToggler from "./useToggler";

function CustomFav() {
  const [isFavourited, toggle] = useToggler(false);

  return (
    <div>
      <h3>Click here to favourite</h3>
      <h1>
        <span onClick={toggle}>{isFavourited ? "❤" : "👍"}</span>
      </h1>
    </div>
  );
}

export default CustomFav;
