import { ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from 'src/service/hooks';
import { getIsLoggedIn } from 'src/service/slices/currentUserSlice';
import {
  setIsAuthModalOpen,
  setTargetUrl,
} from 'src/service/slices/modalsSlice';

interface IProtectedRoutePropsType {
  children: ReactNode;
}

function ProtectedRoute(props: IProtectedRoutePropsType) {
  const { children } = props;
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(setTargetUrl(location.pathname));
      dispatch(setIsAuthModalOpen(true));
      navigate(location.state?.outgoingUrl || '/', { replace: true });
    } else {
      dispatch(setIsAuthModalOpen(false));
      navigate(location.pathname, { replace: true });
    }
    // Disable eslint cause these actions should only be performed when isLoggedIn changing
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  if (isLoggedIn) {
    return children;
  } else {
    return null;
  }
}

export default ProtectedRoute;
