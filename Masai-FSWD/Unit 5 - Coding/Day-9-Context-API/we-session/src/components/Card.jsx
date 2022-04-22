import { CartContext } from "../contexts/CartContext";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

export const Card = () => {
  const { handleChange } = useContext(CartContext);
  const { handleToggle } = useContext(LanguageContext);
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        backgroundColor: "tomato",
        margin: "0 40%",
      }}
    >
      <button onClick={() => handleChange(1)}>Add to Cart</button>
      <button
        onClick={() => handleToggle()}
        style={{
          margin: "20px",
        }}
      >
        Toggle Malayalam
      </button>
    </div>
  );
};
