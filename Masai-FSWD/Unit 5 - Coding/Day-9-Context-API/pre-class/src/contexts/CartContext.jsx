import { createContext, useState } from "react";

//defining the box
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const handleCartUpdate = (val) => {
    setCartCount(cartCount + val);
  };
  return (
    <CartContext.Provider value={{ cartCount, handleCartUpdate }}>
      {children}
    </CartContext.Provider>
  );
};
