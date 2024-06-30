import styles from './CustomerProfilePage.module.scss';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/service/hooks';
import {
  setCurrentUserData,
  setIsLoggedIn,
} from 'src/service/slices/currentUserSlice';
import { defaultCurrentUser } from 'src/utils/constDefaultCurrentUser';
import {
  CUSTOMER_FAVORITE_ARTISTS_ROUTE,
  CUSTOMER_FAVORITE_PRODUCTS_ROUTE,
  CUSTOMER_ORDERS_ROUTE,
  CUSTOMER_PROFILE_ROUTE,
  CUSTOMER_SUBSCRIPTION_ROUTE,
  DEFAULT_ROUTE,
} from 'src/utils/constants';
import LogoutIcon from 'src/assets/images/components/logout.svg';
import CustomerInfo from 'src/components/CustomerProfile/CustomerInfo/CustomerInfo';
import CustomerFavoriteProducts from 'src/components/CustomerProfile/CustomerFavoriteProducts/CustomerFavoriteProducts';
import LikeIcon from 'src/assets/images/components/like.svg';
import UserIcon from 'src/assets/images/components/user.svg';
import UsersIcon from 'src/assets/images/components/users.svg';
import PackageIcon from 'src/assets/images/components/package.svg';
import ClipboardIcon from 'src/assets/images/components/clipboard.svg';
import CustomerFavoriteArtists from 'src/components/CustomerProfile/CustomerFavoriteArtists/CustomerFavoriteArtists';
import CustomerOrders from 'src/components/CustomerProfile/CustomerOrders/CustomerOrders';
import CustomerSubscription from 'src/components/CustomerProfile/CustomerSubscription/CustomerSubscription';

const CustomerProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onLogoutClick = () => {
    dispatch(setIsLoggedIn(false));
    dispatch(setCurrentUserData(defaultCurrentUser));
    localStorage.removeItem('jwt');
    navigate(DEFAULT_ROUTE);
  };

  return (
    <main className={styles.customerProfilePage}>
      <div className={styles.header}>
        <h2 className={styles.title}>Профиль</h2>
        <button className={styles.logout} onClick={onLogoutClick}>
          <LogoutIcon /> Выйти из аккаунта
        </button>
      </div>
      <section className={styles.content}>
        <ul className={styles.navbar}>
          <li className={styles.navbarItem}>
            <NavLink
              className={({ isActive }) =>
                `${styles.navlink} ${isActive ? styles.navlinkActive : ''}`
              }
              to={`${CUSTOMER_PROFILE_ROUTE}`}
              end
            >
              <UserIcon />
              Личная информация
            </NavLink>
          </li>
          <li className={styles.navbarItem}>
            <NavLink
              className={({ isActive }) =>
                `${styles.navlink} ${isActive ? styles.navlinkActive : ''}`
              }
              to={`${CUSTOMER_PROFILE_ROUTE}${CUSTOMER_FAVORITE_PRODUCTS_ROUTE}`}
            >
              <LikeIcon />
              Избранные лоты
            </NavLink>
          </li>
          <li className={styles.navbarItem}>
            <NavLink
              className={({ isActive }) =>
                `${styles.navlink} ${isActive ? styles.navlinkActive : ''}`
              }
              to={`${CUSTOMER_PROFILE_ROUTE}${CUSTOMER_FAVORITE_ARTISTS_ROUTE}`}
            >
              <UsersIcon />
              Любимые художники
            </NavLink>
          </li>
          <li className={styles.navbarItem}>
            <NavLink
              className={({ isActive }) =>
                `${styles.navlink} ${isActive ? styles.navlinkActive : ''}`
              }
              to={`${CUSTOMER_PROFILE_ROUTE}${CUSTOMER_ORDERS_ROUTE}`}
            >
              <PackageIcon />
              Мои заказы
            </NavLink>
          </li>
          <li className={styles.navbarItem}>
            <NavLink
              className={({ isActive }) =>
                `${styles.navlink} ${isActive ? styles.navlinkActive : ''}`
              }
              to={`${CUSTOMER_PROFILE_ROUTE}${CUSTOMER_SUBSCRIPTION_ROUTE}`}
            >
              <ClipboardIcon />
              Управление подпиской
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route path={DEFAULT_ROUTE} element={<CustomerInfo />} />
          <Route
            path={CUSTOMER_FAVORITE_PRODUCTS_ROUTE}
            element={<CustomerFavoriteProducts />}
          />
          <Route
            path={CUSTOMER_FAVORITE_ARTISTS_ROUTE}
            element={<CustomerFavoriteArtists />}
          />
          <Route path={CUSTOMER_ORDERS_ROUTE} element={<CustomerOrders />} />
          <Route
            path={CUSTOMER_SUBSCRIPTION_ROUTE}
            element={<CustomerSubscription />}
          />
        </Routes>
      </section>
    </main>
  );
};

export default CustomerProfilePage;
