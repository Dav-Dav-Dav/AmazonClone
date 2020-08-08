import React from "react";
import "./styles.css";
import { Switch, Route } from "react-router-dom";
import Shopping from "./Pages/Shopping";
import Login from "./Pages/Login";
import Navigation from "./Pages/Navigation";
import Checkout from "./Pages/Checkout";
import Orders from "./Pages/Orders/Orders";
import ProductPage from "./Pages/ProductPage";
import Homepage from "./Pages/Homepage";
import OrdersPage from "./Pages/Orders/IndividualOrder";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shopping" component={Shopping} />
        <Route path="/checkout" component={Checkout} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/login" component={Login} />
        <Route path="/orders/:orderNum" component={OrdersPage} />
        <Route path="/:productId" component={ProductPage} />
      </Switch>
    </div>
  );
}
