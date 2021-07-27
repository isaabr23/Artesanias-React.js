import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

export const Footer = () => {
  const { contgeneral } = useContext(UserContext);

  return (
    <>
      <div className="footer">
        <h1 className="carritoF">Derechos reservados 2021</h1>
        <div className="carritoF">
          <Link to="/Carrito">
            <i className="fa fa-shopping-cart point" aria-hidden="true" />
          </Link>
          <span className="counter">{contgeneral}</span>
        </div>
      </div>
    </>
  );
};
