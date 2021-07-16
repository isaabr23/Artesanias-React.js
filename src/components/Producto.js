import { Link } from "react-router-dom";
import { Cart } from "./Cart";
import { Corazon } from "./Corazon";
import { Estrellas } from "./Estrellas";

export const Producto = ({ arte }) => {
  return (
    <div className="container">
      <Link to={{
        pathname: `/Informacion/${arte.name}`,
        state: { id: arte.id }
      }}>
        <div
          className="image"
          style={{
            backgroundImage: `url("../assets/img/${arte.imagen}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
        </div>
      </Link>
      <div className="contenido">
        <div className="review">
          <div className="stars">
            <span>Reviews</span>
            <Estrellas />
          </div>
          <h5>$ {arte.precio}</h5>
        </div>
        <h4 className="nombre">{arte.name}</h4>
        <div className="detalles">
          <p>{arte.detalle}</p>
        </div>
        <div className="btn-box">
          <span className="like point">
            <Corazon />
          </span>
            <Cart value={arte} />
        </div>
      </div>
    </div>
  );
};
