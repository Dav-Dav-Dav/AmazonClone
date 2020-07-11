import React from "react";
import "./styles.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import Checkout from "./Checkout";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
}
