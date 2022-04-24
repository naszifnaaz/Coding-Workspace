import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export const Status = () => {
  const { isAuth, token } = useContext(AuthContext);
  return (
    <div>
      <div>Auth : Logged In</div>
      <div>Token {token}</div>
    </div>
  );
};
