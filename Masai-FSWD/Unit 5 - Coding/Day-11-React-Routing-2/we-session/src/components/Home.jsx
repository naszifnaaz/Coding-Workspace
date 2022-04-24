import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export const Home = () => {
  const { handleAuth } = useContext(AuthContext);
  return (
    <div>
      <h1>Welcome Home!</h1>
      <button onClick={() => handleAuth(true)}>Sign In</button>
      <button onClick={() => handleAuth(false)}>Sign Out</button>
    </div>
  );
};
