import React, { useContext } from "react";
import { Context } from "../Context";
import { useParams, Link } from "react-router-dom";

export default function ProductPage() {
  const { photos, addToCart, removeFromCart, cart, history } = useContext(
    Context
  );

  const { productId } = useParams();

  //Filter the photos database according the product ID
  const ProductById = photos.filter(x => x.id === productId);

  function lastOrdered() {
    if (history.filter(x => x[1].some(x => x.id === productId)).length > 0) {
      let a = history.filter(x => x[1].some(x => x.id === productId));

      let b = Object.values(a[a.length - 1][0])[0]
        .toString()
        .split(" ");
      let dayOfTheMonth = b[2];
      let year = b[3];
      let month =
        b[1] === "Jan"
          ? "January"
          : b[1] === "Feb"
          ? "February"
          : b[1] === "Mar"
          ? "March"
          : b[1] === "Apr"
          ? "April"
          : b[1] === "May"
          ? "May"
          : b[1] === "Jun"
          ? "June"
          : b[1] === "Jul"
          ? "July"
          : b[1] === "Aug"
          ? "August"
          : b[1] === "Sep"
          ? "September"
          : b[1] === "Oct"
          ? "October"
          : b[1] === "Nov"
          ? "November"
          : "December";
      let day =
        b[0] === "Fri"
          ? "Friday"
          : b[0] === "Sat"
          ? "Saturday"
          : b[0] === "Sun"
          ? "Sunday"
          : b[0] === "Mon"
          ? "Monday"
          : b[0] === "Tue"
          ? "Tuesday"
          : b[0] === "Wed"
          ? "Wednesday"
          : "Thursday";
      let productName = ProductById.map(x => x.ProductTitle).join("");
      return (
        <h1 className="lastOrderedProductBanner">
          <Link to={`/orders/${a.reverse()[0][0].orderNumber}`}>
            {productName} last ordered {day} {dayOfTheMonth} {month} {year}
          </Link>
        </h1>
      );
    }
  }

  function AddOrRemove(x) {
    if (cart.some(x => x.id === productId)) {
      return <button onClick={() => removeFromCart(productId)}>Remove</button>;
    } else {
      return (
        <button onClick={() => addToCart(ProductById)}>Add to Basket</button>
      );
    }
  }

  return (
    <div>
      {lastOrdered()}
      <div className="productInfoBox">
        <img
          alt="some value"
          className="imageSize"
          src={ProductById.map(x => x.url).join("")}
        />

        <div className="productInfoBoxText">
          <h1>{ProductById.map(x => x.ProductTitle).join("")}</h1>
          <h2>Price</h2>
          <p>{ProductById.map(x => x.Price).join("")}</p>
          <h2>Description</h2>
          <p>{ProductById.map(x => x.Description).join("")}</p>
          {AddOrRemove()}
        </div>
      </div>
    </div>
  );
}
