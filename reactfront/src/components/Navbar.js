import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRightFromBracket, FaHouse, FaUser, FaUsersRectangle } from "react-icons/fa6";
import '../styles/Navbar.css'

function Navbar() {

    const { user, logout } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}><h5 className="barlow-medium"><span><FaHouse /> Tienda de ropa</span></h5></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {user ? (
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle barlow-extralight"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {user.name}
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <Link className="dropdown-item barlow-extralight" to="/profile">
                                            <FaUser /> Perfil
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    {user.userAdmin === 1 && (
                                        <>
                                            {/* Estas rutas todavia no estan disponibles */}
                                            <li>
                                                <Link className="dropdown-item barlow-extraligth" to="/admin/dashboard">
                                                    <IoSettingsOutline /> Panel de Administrador
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item barlow-extraligth" to="/admin/users">
                                                    <FaUsersRectangle/> Usuarios
                                                </Link>
                                            </li>
                                            <li><hr className="dropdown-divider" /></li>
                                        </>
                                    )

                                    }
                                    <li>
                                        <button className="dropdown-item barlow-extralight" onClick={logout}>
                                            <FaRightFromBracket /> Cerrar sesión
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link barlow-extralight" to="/login">Inicia sesión o Registrate</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;