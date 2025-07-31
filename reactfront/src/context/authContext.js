import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => localStorage.getItem("token"));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyToken = async () => {
            const storedToken = localStorage.getItem("token");

            if(storedToken){
                try {
                    const res = await axios.get("http://localhost:8000/api/user", {
                        headers: {
                            Authorization: `Bearer ${storedToken}`,
                        },
                    });
                    setUser(res.data)
                    setToken(storedToken)
                    console.log("Usuario autentificado: ", res.data);
                } catch (error) {
                    console.error("Token inválido: ", error);
                    logout();
                }
            }
            setLoading(false);
        }
        verifyToken();
    }, []);

    const login = ({ user, token }) => {
        setUser(user);
        setToken(token);
        localStorage.setItem("token", token)
    }

    const logout = async () => {
        try {
            await axios.post("http://localhost:8000/api/logout",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (error) {
            console.error("Error en logout ", error);
        }

        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
        
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext);