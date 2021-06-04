// import { useState } from "react";

import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage("dark");

  const toggleMode = (e) => {
    e.preventDefault();
    setEnabledState(!enabledState);
  };

  return [enabledState, toggleMode];
};

export default useDarkMode;
