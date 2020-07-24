import React, { useState } from "react";
import data from "./data";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [photos] = useState(data);
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);
  const [orderNumber, setOrderNumer] = useState([1]);

  function addToCart(x) {
    setCart(cart.concat(x));
  }

  function removeFromCart(x) {
    setCart(cart.filter(a => a.id !== x));
  }

  function saveOrder(x, totalPrice) {
    setOrderNumer(
      orderNumber.concat([orderNumber[orderNumber.length - 1] + 1])
    );
    let a = new Map([
      ["date", new Date()],
      ["orderNumber", orderNumber[orderNumber.length - 1]],
      ["totalPrice", totalPrice]
    ]);
    const obj = Object.fromEntries(a);
    setHistory(history.concat([[obj, x]]));
    setCart([]);
  }

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
