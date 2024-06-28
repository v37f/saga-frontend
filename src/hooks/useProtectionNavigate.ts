import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/service/hooks';
import { getIsLoggedIn } from 'src/service/slices/currentUserSlice';
import {
  setIsAuthModalOpen,
  setTargetUrl,
} from 'src/service/slices/modalsSlice';

const useProtectionNavigate = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  const ProtectedNavigate = (url: string) => {
    if (isLoggedIn) {
      navigate(url);
    } else {
      dispatch(setIsAuthModalOpen(true));
      dispatch(setTargetUrl(url));
    }
  };

  return ProtectedNavigate;
};

export default useProtectionNavigate;
