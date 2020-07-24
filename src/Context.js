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

  if (history.length >= 1) {
    let a = history.filter(x => x[1].some(x => parseInt(x.id) === 1));
    let b = Object.values(a[a.length - 1][0])[0]
      .toString()
      .split(" ");
    let dayOfTheMonth = b[2];
    let year = b[3];
    let month =
      b[1] === "Jan"
        ? "January"
        : b[1] === "Feb"
        ? "February"
        : b[1] === "Mar"
        ? "March"
        : b[1] === "Apr"
        ? "April"
        : b[1] === "May"
        ? "May"
        : b[1] === "Jun"
        ? "June"
        : b[1] === "Jul"
        ? "July"
        : b[1] === "Aug"
        ? "August"
        : b[1] === "Sep"
        ? "September"
        : b[1] === "Oct"
        ? "October"
        : b[1] === "Nov"
        ? "November"
        : "December";
    let day =
      b[0] === "Fri"
        ? "Friday"
        : b[0] === "Sat"
        ? "Saturday"
        : b[0] === "Sun"
        ? "Sunday"
        : b[0] === "Mon"
        ? "Monday"
        : b[0] === "Tue"
        ? "Tuesday"
        : b[0] === "Wed"
        ? "Wednesday"
        : "Thursday";
    //console.log( `Last ordered ${day} ${dayOfTheMonth} ${month} ${year}`)
  }

  return (
    <Context.Provider
      value={{
        photos,
        addToCart,
        removeFromCart,
        cart,
        saveOrder,
        history
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
