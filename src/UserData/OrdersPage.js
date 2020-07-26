import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context";

export default function OrdersPage(props) {
  const { orderNum } = useParams();

  const { history } = useContext(Context);

  const OrderSpecificData = history.filter(
    x => x[0].orderNumber === parseInt(orderNum)
  );

  console.log(OrderSpecificData[0][0]);

  return (
    <div>
      <p>Order Number: {OrderSpecificData[0][0].orderNumber}</p>
      <p>Total Price: {OrderSpecificData[0][0].totalPrice}</p>
      <p>Date: {OrderSpecificData[0][0].date.toString()}</p>
    </div>
  );
}
