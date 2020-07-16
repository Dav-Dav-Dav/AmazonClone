import React, { useContext } from "react";
import { Context } from "./Context";
import "./styles.css";
import BasketMap from "./Basket/BasketMap";

export default function Checkout() {
  const { cart } = useContext(Context);

  const bas = cart.map(x => (
    <BasketMap
      key={x.id}
      id={x.id}
      isFavorite={x.isFavorite}
      url={x.url}
      item={x}
    />
  ));

  console.log(cart.length);
  return (
    <div className="App">
      <h1>Checkout</h1>
      {bas}
      <h2>Total: £{cart.length * 5.99}</h2>
    </div>
  );
}
