import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import NavBar from './NavBar/Navbar';
import CatalogIcon from 'src/assets/images/components/catalog.svg';
import UserIcon from 'src/assets/images/components/user.svg';
import FavoritesIcon from 'src/assets/images/components/like.svg';
import CartIcon from 'src/assets/images/components/cart.svg';
import InputTypeSearch from 'src/ui/inputs/InputTypeSearch/InputTypeSearch';

const Header = () => {
  const navigate = useNavigate();
  const onSearchSubmit = () => {
    // search products by keyword
    navigate('/catalog');
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link
          to="/"
          className={styles.header__logo}
          title="Перейти на главную"
          aria-label="Перейти на главную"
        />
        <div className={styles.header__actions}>
          <div className={styles.header__leftSide}>
            <Link
              to="/catalog"
              className={styles.header__button}
              title="Перейти в каталог"
              aria-label="Перейти в каталог"
            >
              <CatalogIcon />
              Каталог
            </Link>
            <form className={styles.header__search} onSubmit={onSearchSubmit}>
              <InputTypeSearch placeholder="Поиск по названию, стилю, художнику" />
              <input
                type="submit"
                className={styles.header__searchSubmit}
                hidden
              />
            </form>
          </div>
          <ul className={styles.header__rightSide}>
            <li className={styles.header__rightSideItem}>
              <Link to="/pricedatabase" className={styles.header__link}>
                Price Database
              </Link>
            </li>
            <li className={styles.header__rightSideItem}>
              <Link to="/profile" className={styles.header__link}>
                <UserIcon />
              </Link>
            </li>
            <li className={styles.header__rightSideItem}>
              <Link to="/profile/favorites" className={styles.header__link}>
                <FavoritesIcon />
              </Link>
            </li>
            <li className={styles.header__rightSideItem}>
              <Link to="/cart" className={styles.header__link}>
                <CartIcon />
                <div className={styles.header__badge}>3</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
