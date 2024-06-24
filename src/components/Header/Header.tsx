import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import NavBar from './NavBar/Navbar';
import CustomerActions from './CustomerActions/CustomerActions';
import SellerActions from './SellerActions/SellerActions';

const Header = () => {
  const userRole = 'customer';
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link
          to="/"
          className={styles.header__logo}
          title="Перейти на главную"
          aria-label="Перейти на главную"
        />
        {userRole === 'seller' ? <SellerActions /> : <CustomerActions />}
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
