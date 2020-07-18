import React, { useState } from "react";
import data from "./data";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [photos] = useState(data);
  const [cart, setCart] = useState([]);

  function addToCart(x) {
    setCart(cart.concat(x));
  }

  function removeFromCart(x) {
    setCart(cart.filter(a => a.id !== x));
  }

  return (
    <Context.Provider
      value={{
        photos,
        addToCart,
        removeFromCart,
        cart
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
