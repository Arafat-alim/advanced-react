import { useState } from "react";

function useToggler(defaultOnValue = false) {
  //! creating a state
  const [isToggleOn, setIsToggledOn] = useState(defaultOnValue);

  //! toggle method
  const toggle = () => {
    setIsToggledOn((prev) => !prev);
  };

  //! return the above two either as a object or array
  return [isToggleOn, toggle];
}

export default useToggler;
