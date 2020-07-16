import React from "react";

export default function BasketMap(props) {
  return (
    <div className="App">
      <img alt="some value" className="imageSize" src={props.url} />
      <h1>£5.99</h1>
    </div>
  );
}
