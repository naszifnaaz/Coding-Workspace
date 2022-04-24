import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);
  const [token, setToken] = useState("");

  const handleAuth = (value) => {
    setAuth(value);
  };

  const handleToken = (token) => {
    setToken(token);
  };
  return (
    <AuthContext.Provider value={{ isAuth, handleAuth, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
