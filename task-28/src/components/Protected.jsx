import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

const Protected = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default Protected;
