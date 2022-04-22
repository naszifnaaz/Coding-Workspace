import { CartContext } from "../contexts/CartContext";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

export const NavBar = () => {
  const { cartCount } = useContext(CartContext);
  const { lang } = useContext(LanguageContext);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "end",
        margin: "20px",
        fontSize: "1.5rem",
        fontWeight: "bold",
        padding: "10px",
        border: "1px solid",
      }}
    >
      {lang == "en" ? "Cart" : "കാർട്ട്"} {cartCount}
    </nav>
  );
};
