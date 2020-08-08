import React, { useContext } from "react";
import { Context } from "../../Context";
import { Link } from "react-router-dom";
import "../../styles.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BasketMap(props) {
  const { removeFromCart } = useContext(Context);

  return (
    <div className="BasketBox">
      <img alt="some value" className="imageBasket" src={props.url} />
      <div className="basketDiv">
        <h1>£{props.price}</h1>
      </div>
      <div className="basketDiv">
        <Link to={`/${props.id}`}>
          <h1 className="BasketTitle">{props.product}</h1>
        </Link>
      </div>
      <div className="basketDiv">
        <FontAwesomeIcon
          onClick={() => removeFromCart(props.id)}
          className="bin"
          icon={faTrash}
        />
      </div>
    </div>
  );
}
