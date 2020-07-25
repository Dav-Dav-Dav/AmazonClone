import React, { useContext } from "react";
import { Context } from "./Context";
import "./styles.css";

function OrdersMapped(props) {
  return (
    <div>
      <h2>Order Number: {props.orderNumber}</h2>
      <p>Date: {props.date.toString()}</p>
      <br />
    </div>
  );
}

export default function Orders() {
  const { history } = useContext(Context);

  console.log(history);
  console.log(history.map(x => x[0].date));

  // Mapping over the data
  const orderMap = history.map(x => (
    <OrdersMapped
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
