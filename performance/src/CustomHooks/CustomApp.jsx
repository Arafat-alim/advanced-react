import React from "react";
import useCounter from "./useCounter";

function CustomApp() {
  const [number, add] = useCounter();
  return (
    <div>
      <h1>Counting by 1 - {number}</h1>
      <button onClick={add}>Add</button>
    </div>
  );
}

export default CustomApp;
