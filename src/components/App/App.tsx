import Header from '../Header/Header';
import styles from './App.module.scss';
import CustomerRoutes from '../Routes/CustomerRoutes';
import { useAppSelector } from 'src/service/hooks';
import { getCurrentUserData } from 'src/service/slices/currentUserSlice';
import SellerRoutes from '../Routes/SellerRoutes';

function App() {
  const currentUser = useAppSelector(getCurrentUserData);
  return (
    <div className={styles.app}>
      <Header />
      {currentUser.userRole === 'customer' ? (
        <CustomerRoutes />
      ) : (
        <SellerRoutes />
      )}
    </div>
  );
}
export default App;
