import React, { useContext } from "react";
import { Context } from "./Context";
import { Link } from "react-router-dom";
import "./styles.css";

function OrdersMapped(props) {
  return (
    <div>
      <Link to={`/orders/${props.orderNumber}`}>
        <h2>Order Number: {props.orderNumber}</h2>
      </Link>
      <p>Date: {props.date.toString()}</p>
      <br />
    </div>
  );
}

export default function Orders() {
  const { history } = useContext(Context);

  // Mapping over the data
  const orderMap = history.map(x => (
    <OrdersMapped
      key={x[0].orderNumber}
      id={x[0].orderNumber}
      date={x[0].date}
      orderNumber={x[0].orderNumber}
    />
  ));

  return (
    <div>
      <h2>Orders Page</h2>
      {orderMap}
    </div>
  );
}
