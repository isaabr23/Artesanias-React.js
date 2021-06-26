import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

export const Cart = ({value}) => {

    const { contgeneral, setContgeneral, carrito, setCarrito } = useContext(UserContext);
    
    const handleAdd = () => {
        const newProducto = {
            id: value.id,
            imagen: value.imagen,
            name: value.name,
            detalle: value.detalle,
            precio: value.precio,
        } 
        setCarrito([...carrito, newProducto])
        setContgeneral(contgeneral + 1);
    };
    localStorage.setItem('carrito', JSON.stringify(carrito));

    return (
        <div className="btn">
            <p onClick={handleAdd}>Add to Car</p>
            <div className="cart-icon">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
        </div>
    )
}