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

  return (
    <div>
      <h1>Checkout</h1>
      <div className="basketSpace">{bas}</div>
      <h2>Total: £{cart.length * 5.99}</h2>
      <button className="payButton" onClick={() => alert("Paid")}>
        Pay
      </button>
    </div>
  );
}
