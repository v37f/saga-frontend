import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import NavBar from './NavBar/Navbar';
import CustomerActions from './CustomerActions/CustomerActions';
import SellerActions from './SellerActions/SellerActions';
import { useAppSelector } from 'src/service/hooks';
import { getCurrentUserData } from 'src/service/slices/currentUserSlice';
import { CUSTOMER_ROLE, DEFAULT_ROUTE } from 'src/utils/constants';

const Header = () => {
  const currentUser = useAppSelector(getCurrentUserData);
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link
          to={DEFAULT_ROUTE}
          className={styles.header__logo}
          title="Перейти на главную"
          aria-label="Перейти на главную"
        />
        {currentUser.userRole === CUSTOMER_ROLE ? (
          <CustomerActions />
        ) : (
          <SellerActions />
        )}
      </div>
      {currentUser.userRole === CUSTOMER_ROLE && <NavBar />}
    </header>
  );
};

export default Header;
