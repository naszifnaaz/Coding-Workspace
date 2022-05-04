import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "../redux/store";

export const NavBar = () => {
  const isLoggedIn = useSelector((store) => store.auth.isAuth);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "black",
        padding: "10px",
      }}
    >
      <Link to="/">Home</Link>
      {!isLoggedIn ? (
        <Link to="/login">Login</Link>
      ) : (
        <Link to="/logout">Logout</Link>
      )}

      <Link to="/todo">Todo</Link>
    </div>
  );
};
