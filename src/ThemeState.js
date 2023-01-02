import React, {createContext, useState } from "react";
export const themeContext = createContext();

const ThemeState = (props) => {
  const initialTheme = "dark";
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    setTheme( theme => (theme === "dark" ? "light" : "dark") );
  }

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
        {props.children}
    </themeContext.Provider>
  );
};
export default ThemeState;