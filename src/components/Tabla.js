import React from 'react'

export const Tabla = ({arte, valor}) => {

    // var guardado = JSON.parse(localStorage.getItem("carrito"));

    // // Para sacar los ids y hacer el resumen de pedidos
    // const ids = guardado.map( keep => keep.id)
    // // console.log(ids);
  

    return (
        <>
            {
                arte.id ?
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
                    : <>hola</>
            }
        </>
    )
}   
