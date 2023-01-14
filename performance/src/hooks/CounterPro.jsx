import React, { useEffect, useState } from "react";
import randomColor from "randomcolor";

function CounterPro() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      //   setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId); // clean up side Effect
  }, []);

  useEffect(() => {
    setColor(randomColor());
  }, [count]);
  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
    </div>
  );
}

export default CounterPro;
