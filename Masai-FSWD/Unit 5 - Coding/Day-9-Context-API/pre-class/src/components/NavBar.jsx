import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const NavBar = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <div>
      <h3>Cart {cartCount}</h3>
    </div>
  );
};
