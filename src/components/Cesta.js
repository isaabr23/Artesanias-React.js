import React, { useState } from 'react'

export const Cesta = ({arte}) => {

    const [value, setValue] = useState(false)
        
    const handleDelete = () => {        
        var guardado = JSON.parse(localStorage.getItem("carrito"));
        console.log(guardado)
        
        // quita los objetos que son diferentes al id
            var diferentID = guardado.filter(function(id) {
                return id.id !== arte.id  
            });
            
        // regresa los objetos iguales al id (sin los de arriba)    
            var correctID = guardado.filter(function(id) {
                return id.id === arte.id  
            });

        // Elimina un objeto del id seleccionado 
            correctID.splice(0, 1);

            const guardadoNew = diferentID.concat(correctID);

            localStorage.setItem('carrito', JSON.stringify(guardadoNew));
            setValue(true)
    };

    return (
        <>
        { value === false ?
            <div className="containerCesta">
                <div
                className="imageCesta"
                style={{
                    backgroundImage: `url("../assets/img/${arte.imagen}")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    }}
                ></div> 
                    <h5 className="nombreCesta">$ {arte.precio}</h5>
                    <h4 className="nameCesta">{arte.name}</h4>
                <div>
                    <div className="btnDelete point">
                        <i onClick={handleDelete} className="fas fa-minus-circle"></i>
                    </div>
                </div>
            </div>
            : <></>
        }
        </>
    )
}
