import React, { useContext } from "react";
import { Context } from "./Context";
import "./styles.css";
import BasketMap from "./Basket/BasketMap";

export default function Checkout() {
  const { cart, saveOrder } = useContext(Context);

  const bas = cart.map(x => (
    <BasketMap
      key={x.id}
      id={x.id}
      isFavorite={x.isFavorite}
      url={x.url}
      item={x}
      price={x.Price}
      product={x.ProductTitle}
    />
  ));

  let totalPrice = cart.map(x => x.Price).reduce((x, a) => x + a, 0);

  return (
    <div>
      <h1>Checkout</h1>
      <div className="basketSpace">{bas}</div>
      <h2>Total: £{totalPrice}</h2>
      <button className="payButton" onClick={() => saveOrder(cart)}>
        Pay
      </button>
    </div>
  );
}
