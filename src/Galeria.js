import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Producto } from './components/Producto';
import { Artesanias } from './DataBase/BD';
import { UserContextProvider } from './components/UserContextProvider';

export const Galeria = () => {
  return (
    <UserContextProvider>
      <Header />
      {Artesanias.map(arte => (
        <Producto arte={arte} key={arte.id} />
      ))}
      <Footer />
    </UserContextProvider>
  );
};
