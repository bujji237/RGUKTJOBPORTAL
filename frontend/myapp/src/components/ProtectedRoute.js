import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function ProtectedRoute({ role }) {
  const { user } = useAuth();

  // If no user (not logged in), redirect to login page
  if (!user) {
    return <Navigate to="/signup" />;
  }

  // If user's role doesn't match the required role, redirect to home
  if (role && user.role !== role) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
