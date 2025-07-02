import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6';

const Login = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    return (
        <div className="login-page">
            <div className={`login-container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
                {/* Formulario de Sign Up */}
                <div className="form-container sign-up-container">
                    <form action="#" className="login-form">
                        <h1 className="login-title">Crea tu cuenta</h1>
                        <div className="social-container">
                            <a href="#" className="social">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="social">
                                <FaInstagram />
                            </a>
                            <a href="#" className="social">
                                <FaTiktok />
                            </a>
                        </div>
                        <span className="login-text">o usa tu correo electronico para registrarte</span>
                        <input type="text" placeholder="Nombre" />
                        <input type="email" placeholder="Correo electronico" />
                        <input type="password" placeholder="Contraseña" />
                        <button type="submit" className="login-btn">Registrar</button>
                    </form>
                </div>

                {/* Formulario de Sign In */}
                <div className="form-container sign-in-container">
                    <form action="#" className="login-form">
                        <h1 className="login-title">Inicia sesión</h1>
                        <div className="social-container">
                            <a href="#" className="social">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="social">
                                <FaInstagram />
                            </a>
                            <a href="#" className="social">
                                <FaTiktok />
                            </a>
                        </div>
                        <span className="login-text">o usa tu correo electronico</span>
                        <input type="email" placeholder="Correo electronico" />
                        <input type="password" placeholder="Contraseña" />
                        <Link to="/forgot-password" className="login-link">¿Olvidaste tu contraseña?</Link>
                        <button type="submit" className="login-btn">Entrar</button>
                    </form>
                </div>

                {/* Panel de superposición */}
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="login-title">¿Ya tienes una cuenta?</h1>
                            <p className="login-label">Ingresa con tus datos que susaste para registrarte</p>
                            <button className="login-btn ghost" onClick={handleSignInClick}>
                                Iniciar sesión
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="login-title">¿Eres nuevo?</h1>
                            <p className="login-label">Registrate para disfutar de las miles de promos y beneficios</p>
                            <button className="login-btn ghost" onClick={handleSignUpClick}>
                                Registrarse
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;