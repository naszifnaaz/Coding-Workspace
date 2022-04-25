import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export const Login = () => {
  //  use reqres to log user in.
  const { isAuth, handleAuth } = useContext(AuthContext);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSign = (e) => {
    e.preventDefault();
    handleAuth(true);
    navigate("/");
  };

  return (
    <form
      className="loginform"
      onSubmit={handleSign}
      style={{
        textAlign: "center",
        margin: "2rem",
      }}
    >
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        onChange={handleChange}
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        onChange={handleChange}
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
