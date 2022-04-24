import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div
      style={{
        backgroundColor: "yellow",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
    </div>
  );
};
