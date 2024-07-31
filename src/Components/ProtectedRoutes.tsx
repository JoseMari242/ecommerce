import { Navigate } from "react-router-dom";
import { useAuthState } from "../Context/AuthContext";


const ProtectedRoutes = ({component: Component}:{component: React.ElementType}) => {
    const {isAuthenticated}= useAuthState();
    return isAuthenticated ? <Component/> : <Navigate to="/"/> 
}

export default ProtectedRoutes