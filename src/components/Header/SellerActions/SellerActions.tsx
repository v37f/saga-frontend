import { NavLink, useNavigate } from 'react-router-dom';
import styles from './SellerActions.module.scss';
import LogoutIcon from 'src/assets/images/components/logout.svg';
import { useAppDispatch } from 'src/service/hooks';
import {
  setCurrentUserData,
  setIsLoggedIn,
} from 'src/service/slices/currentUserSlice';
import { defaultCurrentUser } from 'src/utils/constDefaultCurrentUser';
import {
  DEFAULT_ROUTE,
  SELLER_GOODS_ROUTE,
  SELLER_ORDERS_ROUTE,
} from 'src/utils/constants';

const SellerActions = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onLogoutClick = () => {
    dispatch(setIsLoggedIn(false));
    dispatch(setCurrentUserData(defaultCurrentUser));
    localStorage.removeItem('jwt');
    navigate(DEFAULT_ROUTE);
  };
  return (
    <div className={styles.sellerActions}>
      <ul className={styles.sellerActions__links}>
        <li className={styles.sellerActions__linksItem}>
          <NavLink
            to={SELLER_GOODS_ROUTE}
            className={({ isActive }) =>
              isActive
                ? `${styles.sellerActions__link} ${styles.sellerActions__link_active}`
                : `${styles.sellerActions__link}`
            }
          >
            Товары
          </NavLink>
        </li>
        <li className={styles.sellerActions__linksItem}>
          <NavLink
            to={SELLER_ORDERS_ROUTE}
            className={({ isActive }) =>
              isActive
                ? `${styles.sellerActions__link} ${styles.sellerActions__link_active}`
                : `${styles.sellerActions__link}`
            }
          >
            Заказы
          </NavLink>
        </li>
        <li className={styles.sellerActions__linksItem}>
          <NavLink
            to={DEFAULT_ROUTE}
            className={({ isActive }) =>
              isActive
                ? `${styles.sellerActions__link} ${styles.sellerActions__link_active}`
                : `${styles.sellerActions__link}`
            }
          >
            Профиль продавца
          </NavLink>
        </li>
      </ul>
      <button className={styles.sellerActions__button} onClick={onLogoutClick}>
        <LogoutIcon />
        Выйти из аккаунта
      </button>
    </div>
  );
};

export default SellerActions;
