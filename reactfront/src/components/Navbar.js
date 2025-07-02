import { Link } from "react-router-dom";
import { FaRightFromBracket, FaHouse, FaUser } from "react-icons/fa6";
import '../styles/Navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}><h5 className="barlow-medium"><span><FaHouse /> Tienda de ropa</span></h5></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <Link to={'/login'} >
                                Inicia sesión
                            </Link>
                            {/*<a className="nav-link dropdown-toggle barlow-extralight" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Inicia sesión
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><Link className="dropdown-item barlow-extralight" to={'/profile'}><FaUser /> Perfil</Link></li>
                                <li><hr className="dropdown-divider barlow-extralight" /></li>
                                <li><Link className="dropdown-item barlow-extralight" ><span><FaRightFromBracket /> Cerrar sesión</span></Link></li>
                            </ul>*/}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;