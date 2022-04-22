import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const handleToggle = () => {
    if (lang == "en") setLang("mal");
    else setLang("en");
  };
  return (
    <LanguageContext.Provider value={{ lang, handleToggle }}>
      {children}
    </LanguageContext.Provider>
  );
};
