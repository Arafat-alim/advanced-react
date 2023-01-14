import React from "react";
import useCounter from "./useCounter";

function CustomApp() {
  const [number, add] = useCounter(); //! useCounter - giving an array so name can be any.
  // ! const { count, addition } = useCounter(); //! useCounter - giving an object so name must be same
  return (
    <div>
      <h1>Counting by 1 - {number}</h1>
      <button onClick={add}>Add</button>
    </div>
  );
}

export default CustomApp;
