import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) return children;
};
