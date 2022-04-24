import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

export const NavBar = () => {
  const { isAuth, handleAuth, setToken } = useContext(AuthContext);

  const login = () => {
    console.log("api call");
    axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslick",
      })
      .then(function (res) {
        let token = res.data.token;
        console.log(token);
        handleAuth(true);
        setToken(token);
      });
  };

  const logout = () => {
    handleAuth(false);
  };
  return (
    <div
      style={{
        background: "black",
        color: "white",
        margin: "0px",
        padding: "10px",
      }}
    >
      <p>NAVBAR</p>
      {isAuth ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <button onClick={() => login()}>Login</button>
      )}
    </div>
  );
};
