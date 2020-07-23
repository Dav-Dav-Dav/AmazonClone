import React, { useState } from "react";
import data from "./data";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [photos] = useState(data);
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);

  function addToCart(x) {
    setCart(cart.concat(x));
  }

  function removeFromCart(x) {
    setCart(cart.filter(a => a.id !== x));
  }

  function saveOrder(x, totalPrice) {
    console.log(totalPrice);
    let a = new Map([
      ["date", new Date()],
      ["orderNumber", 5],
      ["totalPrice", totalPrice]
    ]);
    const obj = Object.fromEntries(a);
    setHistory(history.concat([[obj, x]]));
    setCart([]);
  }

  console.log(history);

  //console.log( history )

  return (
    <Context.Provider
      value={{
        photos,
        addToCart,
        removeFromCart,
        cart,
        saveOrder
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
