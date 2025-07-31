import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const ProtectedRoute = ({ children, requiresAuth = true, redirectTo = "/" }) => {
    
    const { user, loading } = useAuth();

    if(loading) {
        return <div>Cargando... </div>
    }

    if(requiresAuth && !user) {
        return <Navigate to={"/login"} />
    }

    if(!requiresAuth && user){
        return <Navigate to={redirectTo} />
    }

    return children;
}

export default ProtectedRoute;