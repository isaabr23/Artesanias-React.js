import React, { useState } from 'react';
import { UserContext } from '../UserContext';

export const UserContextProvider = ({ children }) => {
  const [contgeneral, setContgeneral] = useState(0);
  const [carrito, setCarrito] = useState([]);
  return (
    <UserContext.Provider
      value={{
        contgeneral,
        setContgeneral,
        carrito,
        setCarrito,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
