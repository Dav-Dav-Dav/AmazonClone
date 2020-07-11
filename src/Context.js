import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [cart, setCart] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setPhotos(data));
  }, []);

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
