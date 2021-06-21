import React, { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Producto } from "./components/Producto";
import { UserContext } from "./UserContext";
import { Artesanias } from './DataBase/BD';

export const Galeria = () => {

  const [contgeneral, setContgeneral] = useState(0);
  const [carrito, setCarrito] = useState([]);

  return (
      <UserContext.Provider value={{
        contgeneral,
        setContgeneral,
        carrito,
        setCarrito
      }}>
        <Header />
        { Artesanias.map(arte => <Producto arte={arte} key={arte.id}/> )}
        <Footer />
      </UserContext.Provider>
  );
};
