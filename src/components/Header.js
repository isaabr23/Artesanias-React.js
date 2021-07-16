import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export const Header = () => {
  const {contgeneral} = useContext(UserContext);

  return (
    <div className="header">
      <Link to="/" className="home"><h1>Galeria</h1></Link>
      <div className="carrito">
        <Link to="/Carrito"><i className="fa fa-shopping-cart point" aria-hidden="true" /></Link>
        <span className="counter">{contgeneral}</span>
      </div>
    </div>
  );
};
