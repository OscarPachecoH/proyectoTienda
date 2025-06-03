import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="text-center mt-10">
            <h1 className="title font-bold">404 - Página no encontrada</h1>
            <p className="subtitle mt-4">Parece que estas perdido. La ruta que ingresaste no existe</p>
            <Link to={'/'}>Regresar a la tienda</Link>
        </div>
    )
}

export default NotFound;