import React, { useEffect, useState } from "react";
import randomColor from "randomcolor";

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  function double() {
    setCount((prevCount) => prevCount * 2);
  }

  useEffect(() => {
    setColor(randomColor());
  }, [count]);
  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={double}>Double</button>
    </div>
  );
}

export default Counter;
