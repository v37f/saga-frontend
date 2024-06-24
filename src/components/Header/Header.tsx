import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import NavBar from './NavBar/Navbar';
import CustomerActions from './CustomerActions/CustomerActions';
import SellerActions from './SellerActions/SellerActions';
import { useAppSelector } from 'src/service/hooks';
import { getCurrentUserData } from 'src/service/slices/currentUserSlice';

const Header = () => {
  const currentUser = useAppSelector(getCurrentUserData);
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link
          to="/"
          className={styles.header__logo}
          title="Перейти на главную"
          aria-label="Перейти на главную"
        />
        {currentUser.userRole === 'seller' ? (
          <SellerActions />
        ) : (
          <CustomerActions />
        )}
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
