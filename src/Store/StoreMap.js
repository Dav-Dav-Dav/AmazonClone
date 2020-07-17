import React, { useContext } from "react";
import { Context } from "../Context";
//Mapping over the various images for the store

export default function StoreMap(props) {
  const { addToCart, removeFromCart, cart } = useContext(Context);

  function AddOrRemove(x) {
    if (cart.some(x => x.id === props.id)) {
      return (
        <button
          className="removeButton"
          onClick={() => removeFromCart(props.id)}
        >
          Remove
        </button>
      );
    } else {
      return (
        <button className="addButton" onClick={() => addToCart(props.item)}>
          Add to Basket
        </button>
      );
    }
  }

  return (
    <div className="productCard">
      {AddOrRemove()}
      <div>
        <img alt="some value" className="imageSize" src={props.url} />
        <h2>£{props.price}</h2>
      </div>
    </div>
  );
}
