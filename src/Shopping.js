import React, { useContext } from "react";
import { Context } from "./Context";
import "./styles.css";
import StoreMap from "./Store/StoreMap";
//This page displays the various images for sales

export default function Shopping() {
  const { photos } = useContext(Context);

  // Mapping over the data
  const photoMap = photos.map((x) => (
    <StoreMap
      key={x.id}
      id={x.id}
      isFavorite={x.isFavorite}
      url={x.url}
      item={x}
      price={x.Price}
      product={x.ProductTitle}
    />
  ));

  return <div className="ProductDisplay">{photoMap}</div>;
}
