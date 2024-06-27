import styles from './CustomerActions.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import CatalogIcon from 'src/assets/images/components/catalog.svg';
import UserIcon from 'src/assets/images/components/user.svg';
import FavoritesIcon from 'src/assets/images/components/like.svg';
import CartIcon from 'src/assets/images/components/cart.svg';
import InputTypeSearch from 'src/ui/inputs/InputTypeSearch/InputTypeSearch';
import useProtectionNavigate from 'src/hooks/useProtectionNavigate';
import {
  CART_ROUTE,
  CATALOG_ROUTE,
  CUSTOMER_PROFILE_ROUTE,
  PRICE_ANALYTICS_ROUTE,
} from 'src/utils/constants';
const CustomerActions = () => {
  const navigate = useNavigate();
  const protectionNavigate = useProtectionNavigate();
  const cartItemsNumber = 0;
  const onSearchSubmit = () => {
    // search products by keyword
    navigate(CATALOG_ROUTE);
  };

  return (
    <div className={styles.customerActions}>
      <div className={styles.customerActions__leftSide}>
        <Link to={CATALOG_ROUTE} className={styles.customerActions__button}>
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
          <button
            className={styles.customerActions__link}
            onClick={() => protectionNavigate(PRICE_ANALYTICS_ROUTE)}
          >
            Аналитика цен
          </button>
        </li>
        <li className={styles.customerActions__rightSideItem}>
          <button
            className={styles.customerActions__link}
            onClick={() => protectionNavigate(CUSTOMER_PROFILE_ROUTE)}
            title="Перейти в профиль"
            aria-label="Перейти в профиль"
          >
            <UserIcon />
          </button>
        </li>
        <li className={styles.customerActions__rightSideItem}>
          <button
            className={styles.customerActions__link}
            onClick={() =>
              protectionNavigate(`${CUSTOMER_PROFILE_ROUTE}/favoritelots`)
            }
            title="Перейти к избранным товарам"
            aria-label="Перейти в избранным товарам"
          >
            <FavoritesIcon />
          </button>
        </li>
        <li className={styles.customerActions__rightSideItem}>
          <Link
            to={CART_ROUTE}
            className={styles.customerActions__link}
            title="Перейти в корзину"
            aria-label="Перейти в корзину"
          >
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
