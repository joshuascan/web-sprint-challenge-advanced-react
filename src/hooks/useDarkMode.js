import { useState } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return [darkMode, toggleMode];
};

export default useDarkMode;
