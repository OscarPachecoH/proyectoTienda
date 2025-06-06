import '../styles/Footer.css';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="py-4 mt-auto">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 mb-3 text-start">
                        <h5 className='barlow-semibold'>Tienda de Ropa</h5>
                        <p className='barlow-regular'>Moda para toda la familia: Mujer, Hombre y Niños.</p>
                    </div>
                    <div className="col-md-4 mb-3 d-flex justify-content-center">
                        <div className="social-links">
                            <a
                                href="https://facebook.com"
                                className="text-light mx-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="https://instagram.com"
                                className="text-light mx-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://twitter.com"
                                className="text-light mx-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 text-end">
                        <h5 className='barlow-semibold'>Contacto</h5>
                        <p className='barlow-regular'>
                            <MdEmail /> <a href="mailto:correo@empresa.com" className="text-light">correo@empresa.com</a>
                            <br />
                            <FaPhoneAlt />Teléfono: <a href="tel:+1234567890" className="text-light">+1234567890</a>
                            <br />
                            <MdLocationOn />Dirección: Dirección de tu empresa
                        </p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-center">
                        <p className='barlow-regular'>© {new Date().getFullYear()} Tienda de Ropa. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;