import React, { useContext } from "react";
import { Context } from "../Context";
import "../styles.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BasketMap(props) {
  const { removeFromCart } = useContext(Context);

  return (
    <div className="BasketBox">
      <img alt="some value" className="imageBasket" src={props.url} />
      <h1>£{props.price}</h1>
      <FontAwesomeIcon
        onClick={() => removeFromCart(props.id)}
        className="bin"
        icon={faTrash}
      />
    </div>
  );
}
