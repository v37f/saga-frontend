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
import { useAppDispatch, useAppSelector } from 'src/service/hooks';
import {
  getAllProducts,
  setFilteredProducts,
} from 'src/service/slices/productsSlice';

import { searchProductsByKeyword } from 'src/utils/utils';
import {
  getKeyword,
  setDefaultFilters,
  setKeyword,
} from 'src/service/slices/filtersSlice';
import { useEffect, useState } from 'react';
const CustomerActions = () => {
  const navigate = useNavigate();
  const protectionNavigate = useProtectionNavigate();

  const dispatch = useAppDispatch();

  const allProducts = useAppSelector(getAllProducts);
  const keyword = useAppSelector(getKeyword);
  const [searchInput, setSearchInput] = useState(keyword);
  const cartItemsNumber = 0;

  const onSearchSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(setKeyword(searchInput));
    dispatch(setDefaultFilters());
    dispatch(
      setFilteredProducts(searchProductsByKeyword(allProducts, searchInput))
    );
    navigate(CATALOG_ROUTE);
  };

  useEffect(() => {
    setSearchInput(keyword);
  }, [keyword]);

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
          <InputTypeSearch
            placeholder="Поиск по названию, художнику"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
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
