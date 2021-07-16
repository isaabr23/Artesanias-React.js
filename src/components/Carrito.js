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

  let totalPrecio = guardado
    .map( keep => keep.precio)
    .reduce((a, b) => a + b, 0);

  // Para que solo se muestre un nombre de cada producto si hay mas de 1 seleccionados
  const hash = {};
  const filtro = guardado.filter(function(current) {
    var exists = !hash[current.id];
    hash[current.id] = true;
    return exists;
  });

  // Para sacar los ids y hacer el resumen de pedidos
  const ids = guardado.map( keep => keep.id)

  var repetidos = { };
  ids.forEach(function(numero){
    repetidos[numero] = (repetidos[numero] || 0) + 1;
  });

  return (
    <div>
      <Header />
      <h1 className="centrado">Carrito de Compras</h1>
      {guardado.map((arte) => ( <Cesta arte={arte} key={arte.id} value={false}/> ))}

      <div className="totales">
        <h1>Total:</h1>
        { filtro.map( (arte) => (<Tabla arte={arte} key={arte.id} valor={repetidos[arte.id]} /> ))}
        <hr style={{color: "black", height: "2px", marginLeft: "210px"}}/>
        <div className="flexa">
          <div className="btnGreen point">
            <p onClick={handlePay}>Pagar</p>
            <div className="cart-icon1">
              <i className="fas fa-money-bill-wave"></i>
            </div>
          </div>
          <h3> $ {totalPrecio}</h3> 
        </div>
      </div>
      <Footer />
    </div>
  );
};