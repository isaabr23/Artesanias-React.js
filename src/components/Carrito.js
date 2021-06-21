import React from 'react'
import { Cesta } from './Cesta'
import { Footer } from './Footer'
import { Header } from './Header'

export const Carrito = () => {
  
  var guardado = JSON.parse(localStorage.getItem('carrito'));

    return (
        <div>
          <Header />
          <h1 className="centrado">Carrito de Compras</h1>
          { guardado.map(arte => <Cesta arte={arte} key={arte.id}/> )}
          <Footer />
      </div>
    )
}


// const [prueba, setPrueba] = useState({})

/* <ul className="lista">
    <li className="imageInfo"
    style={{
    backgroundImage: `url("../assets/img/${prueba.imagen}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    }}></li>
    <li>{prueba.id}</li>
    <li>{prueba.name}</li>
    <li>{prueba.precio}</li>
</ul> */