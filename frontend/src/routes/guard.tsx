import { Navigate } from 'react-router-dom';
import { useRoles } from "../hooks/useRoles";

const GuardRoute: React.FC<{ 
  children: React.ReactNode, 
  requiredRole?: 'admin' | 'user' 
}> = ({ children, requiredRole }) => { 
  const { isAdmin, isUser } = useRoles();
  
  
  
  if (requiredRole === 'admin' && !isAdmin()) {
    return <Navigate to="/" />;
  }
  
  if (requiredRole === 'user' && !isUser() && !isAdmin()) {
    return <Navigate to="/login" />;
  }
  
  return <>{children}</>;
};

 export default GuardRoute;