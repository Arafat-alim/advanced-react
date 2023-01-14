import { useState } from "react";

function useContext() {
  //! creating the state
  const [count, setCount] = useState(0);

  ///! Creating a method
  const addition = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return [count, addition];
}

export default useContext;
