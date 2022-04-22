import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartContextProvider } from "./contexts/CartContext";
import { LanguageContextProvider } from "./contexts/LanguageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);
