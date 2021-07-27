import React from 'react';

export const Tabla = ({ arte, valor }) => (
  <>
    {arte.id ? (
      <div className="flextot">
        <ul className="listatot">
          <li>{valor}</li>
        </ul>
        <ul className="listatot">
          <li>{arte.name}</li>
        </ul>
        <ul className="listatot">
          <li>$ {arte.precio} </li>
        </ul>
      </div>
    ) : null}
  </>
);
