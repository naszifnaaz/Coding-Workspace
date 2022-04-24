import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isTheme, setTheme] = useState(false);

  const handleTheme = () => {
    const value = !isTheme;
    setTheme(value);
  };
  return (
    <ThemeContext.Provider value={{ isTheme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
