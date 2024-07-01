import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './App.module.scss';
import CustomerRoutes from '../Routes/CustomerRoutes';
import { useAppDispatch, useAppSelector } from 'src/service/hooks';
import {
  getCurrentUserData,
  setCurrentUserData,
  setIsLoggedIn,
} from 'src/service/slices/currentUserSlice';
import SellerRoutes from '../Routes/SellerRoutes';
import {
  getIsAuthModalOpen,
  getIsSubscribeModalOpen,
} from 'src/service/slices/modalsSlice';
import AuthModal from '../Modal/AuthModal/AuthModal';
import { useEffect } from 'react';
import { Customer, Seller } from 'src/utils/mock/currentUserMockData';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { useLocation, useNavigate } from 'react-router-dom';
import { CUSTOMER_ROLE } from 'src/utils/constants';
import SubscribtionModal from '../Modal/SubscribtionModal/SubscribtionModal';
import {
  fetchAllProducts,
  fetchFavoriteProducts,
} from 'src/service/slices/productsSlice';
import {
  fetchAllArtists,
  fetchFavoriteArtists,
} from 'src/service/slices/artistsSlice';

function App() {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(getCurrentUserData);
  const isAuthModalOpen = useAppSelector(getIsAuthModalOpen);
  const isSubscribeModalOpen = useAppSelector(getIsSubscribeModalOpen);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const checkToken = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      dispatch(setIsLoggedIn(true));
      dispatch(setCurrentUserData(jwt === CUSTOMER_ROLE ? Customer : Seller));
      dispatch(fetchFavoriteProducts());
      dispatch(fetchFavoriteArtists());
      navigate(pathname, { replace: true });
    }
  };

  useEffect(() => {
    checkToken();
    dispatch(fetchAllProducts());
    dispatch(fetchAllArtists());
    // disable eslint because we only need check jwt token once when app loaded
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.app}>
      <ScrollToTop />
      <Header />
      {currentUser.userRole === CUSTOMER_ROLE ? (
        <CustomerRoutes />
      ) : (
        <SellerRoutes />
      )}
      <Footer />
      {isAuthModalOpen && <AuthModal />}
      {isSubscribeModalOpen && <SubscribtionModal />}
    </div>
  );
}
export default App;
