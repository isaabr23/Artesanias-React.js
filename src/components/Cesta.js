import React from 'react'

export const Cesta = ({arte}) => {

    var guardado = JSON.parse(localStorage.getItem("carrito"));

    const handleDelete = () => {        

        console.log( arte.id );
        
        for (var i =0; i < guardado.length; i++){
            if (guardado[i].id === arte.id) {
                guardado.splice(i,1);
            }
         }
         console.log(guardado)
    };

    return (
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
    )
}
