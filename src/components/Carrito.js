import React from "react";
import { Cesta } from "./Cesta";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Tabla } from "./Tabla";

export const Carrito = () => {
  
  var guardado = JSON.parse(localStorage.getItem("carrito"));

  const handlePay = () => {
    console.log("Pagado");
  };

  const tot = guardado.map( keep => keep.precio)
  let total = tot.reduce((a, b) => a + b, 0);

  return (
    <div>
      <Header />
      <h1 className="centrado">Carrito de Compras</h1>
      {guardado.map((arte) => ( <Cesta arte={arte} key={arte.id} /> ))}

      <div className="totales">
        <h1>Total:</h1>
        { guardado.map( (arte) => (<Tabla arte={arte} key={arte.id}/> ))}
        <hr style={{color: "black", height: "2px", marginLeft: "210px"}}/>
        <div className="flexa">
          <div className="btnGreen point">
            <p onClick={handlePay}>Pagar</p>
            <div className="cart-icon1">
              <i className="fas fa-money-bill-wave"></i>
            </div>
          </div>
          <h3> $ {total}</h3> 
        </div>
      </div>
      <Footer />
    </div>
  );
};