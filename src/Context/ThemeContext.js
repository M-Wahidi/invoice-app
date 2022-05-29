import React, { createContext, useContext, useState } from "react";

const ThemeCTX = createContext(null);

function ThemeContext({ children }) {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );

  const switchTheme = () => {
    localStorage.setItem("theme", JSON.stringify(!theme));
    setTheme((prev) => !prev);
  };

  return (
    <ThemeCTX.Provider value={{ switchTheme, theme }}>
      {children}
    </ThemeCTX.Provider>
  );
}

export const ThemeFunc = () => {
  return useContext(ThemeCTX);
};
export default ThemeContext;
