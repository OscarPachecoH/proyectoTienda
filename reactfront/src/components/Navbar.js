import { Link } from "react-router-dom";
import { FaRightFromBracket, FaHouse, FaUser } from "react-icons/fa6";
import '../styles/Navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}><h5><span><FaHouse /> Tienda de ropa</span></h5></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Registrate
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={'/profile'}><FaUser /> Profile</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" ><span><FaRightFromBracket /> Log out</span></Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;