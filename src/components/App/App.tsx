import Header from '../Header/Header';
import styles from './App.module.scss';
import CustomerRoutes from '../Routes/CustomerRoutes';
import { useAppDispatch, useAppSelector } from 'src/service/hooks';
import {
  getCurrentUserData,
  setCurrentUserData,
  setIsLoggedIn,
} from 'src/service/slices/currentUserSlice';
import SellerRoutes from '../Routes/SellerRoutes';
import { getIsAuthModalOpen } from 'src/service/slices/modalsSlice';
import AuthModal from '../Modal/AuthModal/AuthModal';
import { useEffect } from 'react';
import { Customer, Seller } from 'src/utils/mock/currentUserMockData';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(getCurrentUserData);
  const isAuthModalOpen = useAppSelector(getIsAuthModalOpen);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const checkToken = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      dispatch(setIsLoggedIn(true));
      dispatch(setCurrentUserData(jwt === 'customer' ? Customer : Seller));
      navigate(pathname, { replace: true });
    }
  };

  useEffect(() => {
    checkToken();
    // disable eslint because we only need check jwt token once when app loaded
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.app}>
      <ScrollToTop />
      <Header />
      {currentUser.userRole === 'customer' ? (
        <CustomerRoutes />
      ) : (
        <SellerRoutes />
      )}
      {isAuthModalOpen && <AuthModal />}
    </div>
  );
}
export default App;
