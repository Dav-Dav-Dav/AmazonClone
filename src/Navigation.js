import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation() {
  return (
    <div className="nav">
      <h2>
        <Link className="top" to="/">
          Pic Some
        </Link>
      </h2>
      <Link to="/dav">
        <FontAwesomeIcon className="basket" icon={faCoffee} />
      </Link>
    </div>
  );
}
