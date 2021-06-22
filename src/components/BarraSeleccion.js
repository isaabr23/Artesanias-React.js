import React, { useState } from 'react';
import { Artesanias } from '../DataBase/BD';

export const Cart = () => {

    const [arrCart, setArrCart] = useState('')
                      
    const handleAdd = () => {
        setArrCart([...arrCart, Artesanias.find( objc => objc.id === '1' ) ])
    };
    const handleAdd2 = () => {
        setArrCart([...arrCart, Artesanias.find( objc => objc.id === '2' ) ])
    };
    const handleAdd3 = () => {
        setArrCart([...arrCart, Artesanias.find( objc => objc.id === '3' ) ])
    };
    const handleAdd4 = () => {
        setArrCart([...arrCart, Artesanias.find( objc => objc.id === '4' ) ])
    };
    const handleAdd5 = () => {
        setArrCart([...arrCart, Artesanias.find( objc => objc.id === '5' ) ])
    };

    const [precio, setPrecio] = useState('')
    const [detalle, setDetalle] = useState('')
    const [name, setName] = useState('')
    const [imagen, setImagen] = useState('')
    
    const handleshow = () => {
        for ( let artes of arrCart ) {
            setPrecio(artes.precio)
            setDetalle(artes.detalle)
            setName(artes.name)
            setImagen(artes.imagen)
        }
    };
    
    console.log(precio)
    console.log(detalle)
    console.log(name)

    return (
        <>
            <div className="btn">
                <p onClick={handleAdd}>Add to Car</p>
                <div className="cart-icon">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
            </div>
            <div className="btn">
                <p onClick={handleAdd2}>Add to Car</p>
                <div className="cart-icon">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
            </div>
            <div className="btn">
                <p onClick={handleAdd3}>Add to Car</p>
                <div className="cart-icon">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
            </div>
            <div className="btn">
                <p onClick={handleAdd4}>Add to Car</p>
                <div className="cart-icon">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
            </div>
            <div className="btn">
                <p onClick={handleAdd5}>Add to Car</p>
                <div className="cart-icon">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
            </div>
            <div className="btn">
                <p onClick={handleshow}>Show to Car</p>
                <div className="cart-icon">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
            </div>
          {/* <div><pre>{JSON.stringify(arrCart, null, 2) }</pre></div> */}
        

      <div className="containerInfo">
        <div
            className="imageInfo"
            style={{
            backgroundImage: `url("../assets/img/${imagen}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            }}
        ></div> 
        <h5>$ {precio}</h5>
        
        <div className="flex">
            <h4 className="nombreInfo">{name}</h4>
            <div className="detallesInfo">
            <p>{ detalle }</p>
            </div>
        </div>
        </div>
    </>
    )
}