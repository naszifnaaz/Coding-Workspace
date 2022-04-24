import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) return <Navigate to={"/"} />;
  else return children;
};
