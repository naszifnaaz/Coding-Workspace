import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const NavBar = () => {
  const { isTheme, handleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: isTheme ? "black" : "yellow",
        color: isTheme ? "white" : "black",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <span>SOME NAVBAR</span>
      <button onClick={() => handleTheme()}>
        {isTheme ? "DARK" : "LIGHT"}
      </button>
    </div>
  );
};
