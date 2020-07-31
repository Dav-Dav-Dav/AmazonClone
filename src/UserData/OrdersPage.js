import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context";
import OrdersPageMapProducts from "./OrdersPageMapProducts";

export default function OrdersPage(props) {
  const { orderNum } = useParams();

  //Getting all the users orders
  const { history } = useContext(Context);

  // Filtering the users orders, keeping only
  //the only that matches the url
  const OrderSpecificData = history.filter(
    x => x[0].orderNumber === parseInt(orderNum)
  );

  const productsOrdered = OrderSpecificData[0][1].map(x => (
    <OrdersPageMapProducts key={x.id} all={x} />
  ));

  return (
    <div>
      <div className="ordersSummaryBox">
        <div className="ordersSummaryBoxText">
          <div className="ordersSummaryBoxTextThreeBoxes">
            <div className="ordersSummaryBoxTextThreeBoxesOne">
              <div className="ordersSummaryBoxTextThreeBoxesText">
                <h1>Order Number</h1>
                <h1>{OrderSpecificData[0][0].orderNumber}</h1>
              </div>
            </div>
            <div className="ordersSummaryBoxTextThreeBoxesTwo">
              <div className="ordersSummaryBoxTextThreeBoxesText">
                <h1>Total Price</h1>
                <h1>{OrderSpecificData[0][0].totalPrice}</h1>
              </div>
            </div>
            <div className="ordersSummaryBoxTextThreeBoxesThree">
              <div className="ordersSummaryBoxTextThreeBoxesText">
                <h1>Order Date</h1>
                <h1>
                  {OrderSpecificData[0][0].date
                    .toString()
                    .split(" ")
                    .slice(0, 3)
                    .join(" ")}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {productsOrdered}
    </div>
  );
}
