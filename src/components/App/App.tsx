import Header from '../Header/Header';
import styles from './App.module.scss';
import CustomerRoutes from '../Routes/CustomerRoutes';
import { useAppSelector } from 'src/service/hooks';
import { getCurrentUserData } from 'src/service/slices/currentUserSlice';
import SellerRoutes from '../Routes/SellerRoutes';
import { getIsAuthModalOpen } from 'src/service/slices/modalsSlice';
import AuthModal from '../Modal/AuthModal/AuthModal';

function App() {
  const currentUser = useAppSelector(getCurrentUserData);
  const isAuthModalOpen = useAppSelector(getIsAuthModalOpen);
  return (
    <div className={styles.app}>
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
