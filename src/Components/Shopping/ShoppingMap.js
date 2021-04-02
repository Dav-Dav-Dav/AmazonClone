import React, { useContext } from "react";
import { Context } from "../../Context";
import { Link } from "react-router-dom";
import "../../styles.css";

//Mapping over the various images for the store
export default function ShoppingMap(props) {
  const { addToCart, removeFromCart, cart } = useContext(Context);

  function AddOrRemove(x) {
    if (cart.some((x) => x.id === props.id)) {
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
      <div className="imageTitlePrice">
        <div className="imageSize">
          <img alt="some value" className="imageSize" src={props.url} />
        </div>
        <div className="HomeProduct">
          <Link to={`/${props.id}`}>
            <p>{props.product}</p>
          </Link>
        </div>
        <div className="HomePrice">
          <p>£{props.price}</p>
        </div>
      </div>
      {AddOrRemove()}
    </div>
  );
}
