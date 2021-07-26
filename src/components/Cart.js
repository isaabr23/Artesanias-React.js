import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import Swal from 'sweetalert2';

export const Cart = ({ value }) => {
  const { contgeneral, setContgeneral, carrito, setCarrito } =
    useContext(UserContext);

  const handleAdd = () => {
    const newProducto = {
      id: value.id,
      imagen: value.imagen,
      name: value.name,
      detalle: value.detalle,
      precio: value.precio,
    };
    if (carrito) {
      setCarrito([...carrito, newProducto]);
      localStorage.setItem(
        'carrito',
        JSON.stringify([...carrito, newProducto]),
      );
    } else {
      setCarrito([newProducto]);
      localStorage.setItem('carrito', JSON.stringify([newProducto]));
    }
    setContgeneral(contgeneral + 1);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Agregado al carrito',
      showConfirmButton: false,
      width: 300,
      timer: 1000,
    });
  };

  return (
    <div className="btn">
      <p onClick={handleAdd}>Add to Cart</p>
      <div className="cart-icon">
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </div>
    </div>
  );
};
