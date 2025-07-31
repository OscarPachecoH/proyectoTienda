import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6';
import { useAuth } from '../context/authContext';
import { loginRequest, registerRequest } from '../services/authService';
import '../styles/Login.css';

const Login = () => {

    // Variables de inicio de sesión
    const [singInData, setSingInData] = useState({
        email: '',
        password: ''
    });
    // Variavles de registro
    const [singUpData, setSingUpData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })

    const { login, loading } = useAuth();
    const [errors, seErrors] = useState('');
    const naviagate = useNavigate();

    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    if(loading){
        return <h1>Cargando...</h1>
    }

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    const handleSingInChange = (e) => {
        setSingInData({ ...singInData, [e.target.name]: e.target.value });
    }

    const handleSingUpChange = (e) => {
        setSingUpData({ ...singUpData, [e.target.name]: e.target.value });
    }

    const handleSingInSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginRequest(singInData.email, singInData.password);
            if(response.ok){
                login({ user: response.user, token: response.token });
                naviagate("/");
            } else {
                alert(response.message);
            }
        } catch (error) {
            console.log("Error al iniciar sesión");
            alert("Error al iniciar sesión");
        }
    }

    const handleSingUpSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerRequest(singUpData.name, singUpData.email, singUpData.password, singUpData.password_confirmation);
            if(response.ok){
                login({ user: response.user, token: response.token });
                naviagate("/");
            } else {
                alert(response.message);
            }
        } catch (error) {
            console.log("Error al registrar usuario");
            alert("Error al registrar usuario");
        }
    }

    return (
        <div className="login-page">
            <div className={`login-container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
                {/* Formulario de Sign Up */}
                <div className="form-container sign-up-container">
                    <form onSubmit={handleSingUpSubmit} className="login-form">
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
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={singUpData.name}
                            onChange={handleSingUpChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo electronico"
                            value={singUpData.email}
                            onChange={handleSingUpChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            value={singUpData.password}
                            onChange={handleSingUpChange}
                        />
                        <input
                            type="password"
                            name="password_confirmation"
                            placeholder='Confimación de contraseña'
                            value={singUpData.password_confirmation}
                            onChange={handleSingUpChange}
                        />
                        <button type="submit" className="login-btn">Registrar</button>
                    </form>
                </div>

                {/* Formulario de Sign In */}
                <div className="form-container sign-in-container">
                    <form onSubmit={handleSingInSubmit} className="login-form">
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
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo electronico"
                            value={singInData.email}
                            onChange={handleSingInChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            value={singInData.password}
                            onChange={handleSingInChange}
                        />
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
                            <button className="login-btn ghost" onClick={handleSignInClick}>Iniciar sesión</button>
                            <Link className="login-btn-back" to={'/'}>Regresar</Link>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="login-title">¿Eres nuevo?</h1>
                            <p className="login-label">Registrate para disfutar de las miles de promos y beneficios</p>
                            <button className="login-btn ghost" onClick={handleSignUpClick}>Registrarse</button>
                            <Link className="login-btn-back" to={'/'}>Regresar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;