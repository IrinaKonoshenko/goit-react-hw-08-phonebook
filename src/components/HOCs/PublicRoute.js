import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, restricted = false }) => {
  const isAuth = useSelector(selectIsAuth);
  const shouldRedirect = isAuth && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : children;
};
