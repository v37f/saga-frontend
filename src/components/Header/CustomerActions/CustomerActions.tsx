import styles from './CustomerActions.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import CatalogIcon from 'src/assets/images/components/catalog.svg';
import UserIcon from 'src/assets/images/components/user.svg';
import FavoritesIcon from 'src/assets/images/components/like.svg';
import CartIcon from 'src/assets/images/components/cart.svg';
import InputTypeSearch from 'src/ui/inputs/InputTypeSearch/InputTypeSearch';

const CustomerActions = () => {
  const navigate = useNavigate();
  const cartItemsNumber = 0;
  const onSearchSubmit = () => {
    // search products by keyword
    navigate('/catalog');
  };
  return (
    <div className={styles.customerActions}>
      <div className={styles.customerActions__leftSide}>
        <Link
          to="/catalog"
          className={styles.customerActions__button}
          title="Перейти в каталог"
          aria-label="Перейти в каталог"
        >
          <CatalogIcon />
          Каталог
        </Link>
        <form
          className={styles.customerActions__search}
          onSubmit={onSearchSubmit}
        >
          <InputTypeSearch placeholder="Поиск по названию, стилю, художнику" />
          <input
            type="submit"
            className={styles.customerActions__searchSubmit}
            hidden
          />
        </form>
      </div>
      <ul className={styles.customerActions__rightSide}>
        <li className={styles.customerActions__rightSideItem}>
          <Link to="/priceanalytics" className={styles.customerActions__link}>
            Аналитика цен
          </Link>
        </li>
        <li className={styles.customerActions__rightSideItem}>
          <Link to="/profile" className={styles.customerActions__link}>
            <UserIcon />
          </Link>
        </li>
        <li className={styles.customerActions__rightSideItem}>
          <Link
            to="/profile/favoritelots"
            className={styles.customerActions__link}
          >
            <FavoritesIcon />
          </Link>
        </li>
        <li className={styles.customerActions__rightSideItem}>
          <Link to="/cart" className={styles.customerActions__link}>
            <CartIcon />
            {cartItemsNumber > 0 && (
              <div className={styles.customerActions__badge}>
                {cartItemsNumber}
              </div>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CustomerActions;
