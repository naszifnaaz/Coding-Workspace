import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(10);

  const handleChange = (val) => {
    setCartCount(cartCount + val);
  };

  return (
    <CartContext.Provider value={{ cartCount, handleChange }}>
      {children}
    </CartContext.Provider>
  );
};
