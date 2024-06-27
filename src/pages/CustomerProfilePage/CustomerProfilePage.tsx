import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/service/hooks';
import {
  setCurrentUserData,
  setIsLoggedIn,
} from 'src/service/slices/currentUserSlice';
import { defaultCurrentUser } from 'src/utils/constDefaultCurrentUser';
import { DEFAULT_ROUTE } from 'src/utils/constants';

const CustomerProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onLogoutClick = () => {
    dispatch(setIsLoggedIn(false));
    dispatch(setCurrentUserData(defaultCurrentUser));
    localStorage.removeItem('jwt');
    navigate(DEFAULT_ROUTE);
  };
  return (
    <main>
      Профиль покупателя
      <button onClick={onLogoutClick}>выйти из профиля</button>
    </main>
  );
};

export default CustomerProfilePage;
