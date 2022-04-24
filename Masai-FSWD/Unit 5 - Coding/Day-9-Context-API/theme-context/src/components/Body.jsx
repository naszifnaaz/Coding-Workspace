import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const Body = () => {
  const { isTheme, handleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        height: "100vh",
        weight: "100vw",
        backgroundColor: isTheme ? "darkviolet" : "orange",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "5rem",
        fontWeight: "bold",
        color: isTheme ? "white" : "black",
      }}
    >
      Hello World!
    </div>
  );
};
