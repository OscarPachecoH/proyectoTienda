import { Link } from "react-router-dom";
import '../styles/Card.css'

function Card({ product }) {
    return (
        <div className="div-container">
            <div className="card">
                <img src={product.imagen} />
                <div className="card-content">
                    <h5 className="card-title">{product.name}</h5>
                    <p>${product.price}</p>
                    <Link className="btn btn-buy" to={`/`}>
                        Comprar
                    </Link>
                    <Link className="btn btn-addcart" to={`/`}>
                        Agregar
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card;