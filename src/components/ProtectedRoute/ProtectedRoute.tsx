import { ReactNode } from 'react';
import { useAppSelector } from 'src/service/hooks';
import { getIsLoggedIn } from 'src/service/slices/currentUserSlice';
import { Navigate } from 'react-router-dom';
import { DEFAULT_ROUTE } from 'src/utils/constants';

interface IProtectedRoutePropsType {
  children: ReactNode;
}

function ProtectedRoute(props: IProtectedRoutePropsType) {
  const { children } = props;
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={DEFAULT_ROUTE} replace={true} />;
}

export default ProtectedRoute;
