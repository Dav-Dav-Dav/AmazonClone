import React, { useContext } from "react";
import { Context } from "../Context";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { photos, addToCart, removeFromCart, cart } = useContext(Context);

  const { productId } = useParams();

  //Filter the photos database according the product ID
  const ProductById = photos.filter(x => x.id === productId);
  console.log(ProductById);
  function AddOrRemove(x) {
    if (cart.some(x => x.id === productId)) {
      return (
        <button
          className="removeButton"
          onClick={() => removeFromCart(productId)}
        >
          Remove
        </button>
      );
    } else {
      return (
        <button className="addButton" onClick={() => addToCart(ProductById)}>
          Add to Basket
        </button>
      );
    }
  }

  return (
    <div>
      {AddOrRemove()}
      <h1>{ProductById.map(x => x.ProductTitle).join("")}</h1>
      <img
        alt="some value"
        className="imageSize"
        src={ProductById.map(x => x.url).join("")}
      />
      <h2>Price</h2>
      <p>{ProductById.map(x => x.Price).join("")}</p>
      <h2>Description</h2>
      <p>{ProductById.map(x => x.Description).join("")}</p>
    </div>
  );
}
