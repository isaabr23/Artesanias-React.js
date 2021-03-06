import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Artesanias, Bolsas } from '../DataBase/BD';
import { Cart } from './Cart';
import { Corazon } from './Corazon';
import { Estrellas } from './Estrellas';
import { Footer } from './Footer';
import { Header } from './Header';
import { UserContextProvider } from './UserContextProvider';

export const Informacion = ({ location }) => {
  // Extraemos el id para validar que sea el mismo que el de la url
  const ID = Artesanias.map(arte => arte.id);
  //   console.log(ID);
  // Con el nuevo arreglo comparamos el id del arreglo y el del url para saber si son iguales
  const found = ID.find(element => element === location.state.id);
  //   console.log(found);

  // {location.state.id} Extrae el id de cada producto por medio del url
  //   console.log(location);

  const { name, detalle, precio } = Artesanias[found - 1];

  if (location.state.id !== '0') {
    var carpeta = Bolsas;
  }

  const imagenArr = carpeta.map(bolsa => bolsa.imagen);
  const [imgCarr, setImgCarr] = useState(0);

  const handlenext = () => {
    if (imagenArr.length > imgCarr && imgCarr < imagenArr.length - 1) {
      setImgCarr(imgCarr + 1);
    }
  };

  const handleatras = () => {
    if (imgCarr <= imagenArr.length && imgCarr > 0) {
      setImgCarr(imgCarr - 1);
    }
  };

  const id = location.state.id;
  const imagen = imagenArr[imgCarr];
  const arte = {
    id,
    imagen,
    name,
    detalle,
    precio,
  };

  console.log(arte);

  return (
    <UserContextProvider>
      <div>
        <Header />
        <div className="back">
          <Link to="/">
            <i className="far fa-arrow-alt-circle-left"></i>
          </Link>
          <h1 className="centrado">Informacion del producto</h1>
        </div>
        <div className="containerInfo">
          <div className="back-next">
            {imgCarr !== 0 ? (
              <i
                onClick={handleatras}
                className="far fa-arrow-alt-circle-left atras"
              ></i>
            ) : (
              <i className="far fa-arrow-alt-circle-left atras2"></i>
            )}
            {imgCarr !== 3 ? (
              <i
                onClick={handlenext}
                className="far fa-arrow-alt-circle-right siguiente"
              ></i>
            ) : (
              <i className="far fa-arrow-alt-circle-right siguiente2"></i>
            )}
          </div>
          <div
            className="imageInfo"
            style={{
              backgroundImage: `url("../assets/img/${location.state.id}/${imagenArr[imgCarr]}")`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          ></div>
          <div className="reviewInfo">
            <div className="starsInfo">
              <span>Reviews</span>
              <Estrellas />
            </div>
            <h5>$ {precio}</h5>
          </div>
          <div className="flex">
            <h4 className="nombreInfo">{name}</h4>
            <div className="detallesInfo">
              <p>{detalle}</p>
            </div>
          </div>
          <div className="btn-boxInfo">
            <span className="likeInfo pointInfo">
              <Corazon />
            </span>
            <Cart value={arte} />
          </div>
        </div>
        <Footer />
      </div>
    </UserContextProvider>
  );
};
