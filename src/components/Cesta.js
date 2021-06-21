import React from 'react'

export const Cesta = ({arte}) => {

    const handleDelete = () => {
        console.log('Borrado')
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
                    <div className="btnDelete">
                        <i onClick={handleDelete} className="fas fa-minus-circle"></i>
                    </div>
                </div>
            </div>
    )
}