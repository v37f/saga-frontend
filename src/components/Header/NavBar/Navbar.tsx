import { Link, useNavigate } from 'react-router-dom';
import styles from './NavBar.module.scss';
import useProtectionNavigate from 'src/hooks/useProtectionNavigate';
import {
  ARTISTS_ROUTE,
  CATALOG_ROUTE,
  CONSULTATION_ROUTE,
  DIGITAL_CATEGORY_NAME,
  GRAPHIC_CATEGORY_NAME,
  NEWS_ROUTE,
  PAINTING_CATEGORY_NAME,
  PHOTOGRAPHY_CATEGORY_NAME,
} from 'src/utils/constants';
import { useAppDispatch, useAppSelector } from 'src/service/hooks';
import {
  setCategoryFilter,
  setKeyword,
  setOrientationFilter,
  setPriceFilter,
  setSizeFilter,
  setStyleFilter,
} from 'src/service/slices/filtersSlice';
import {
  getAllProducts,
  setFilteredProducts,
} from 'src/service/slices/productsSlice';
import { filterByCategory } from 'src/utils/utils';

const NavBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const protectionNavigate = useProtectionNavigate();
  const allProducts = useAppSelector(getAllProducts);

  const resetFiltersExeptCategory = () => {
    dispatch(setStyleFilter([]));
    dispatch(setSizeFilter([]));
    dispatch(setOrientationFilter([]));
    dispatch(setPriceFilter([]));
    dispatch(setKeyword(''));
  };

  const onPaintingLinkClick = () => {
    resetFiltersExeptCategory();
    dispatch(setCategoryFilter([PAINTING_CATEGORY_NAME]));
    dispatch(
      setFilteredProducts(
        filterByCategory(allProducts, [PAINTING_CATEGORY_NAME])
      )
    );
    navigate(CATALOG_ROUTE);
  };

  const onGraphicLinkClick = () => {
    resetFiltersExeptCategory();
    dispatch(setCategoryFilter([GRAPHIC_CATEGORY_NAME]));
    dispatch(
      setFilteredProducts(
        filterByCategory(allProducts, [GRAPHIC_CATEGORY_NAME])
      )
    );
    navigate(CATALOG_ROUTE);
  };

  const onPhotoLinkClick = () => {
    resetFiltersExeptCategory();
    dispatch(setCategoryFilter([PHOTOGRAPHY_CATEGORY_NAME]));
    dispatch(
      setFilteredProducts(
        filterByCategory(allProducts, [PHOTOGRAPHY_CATEGORY_NAME])
      )
    );
    navigate(CATALOG_ROUTE);
  };

  const onDigitalLinkClick = () => {
    resetFiltersExeptCategory();
    dispatch(setCategoryFilter([DIGITAL_CATEGORY_NAME]));
    dispatch(
      setFilteredProducts(
        filterByCategory(allProducts, [DIGITAL_CATEGORY_NAME])
      )
    );
    navigate(CATALOG_ROUTE);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__listItem}>
          <button className={styles.navbar__link} onClick={onPaintingLinkClick}>
            {PAINTING_CATEGORY_NAME}
          </button>
        </li>
        <li className={styles.navbar__listItem}>
          <button className={styles.navbar__link} onClick={onGraphicLinkClick}>
            {GRAPHIC_CATEGORY_NAME}
          </button>
        </li>
        <li className={styles.navbar__listItem}>
          <button className={styles.navbar__link} onClick={onPhotoLinkClick}>
            {PHOTOGRAPHY_CATEGORY_NAME}
          </button>
        </li>
        <li className={styles.navbar__listItem}>
          <button className={styles.navbar__link} onClick={onDigitalLinkClick}>
            {DIGITAL_CATEGORY_NAME}
          </button>
        </li>
        <li className={styles.navbar__listItem}>
          <Link to={ARTISTS_ROUTE} className={styles.navbar__link}>
            Художники
          </Link>
        </li>
        <li className={styles.navbar__listItem}>
          <Link to={NEWS_ROUTE} className={styles.navbar__link}>
            Новости
          </Link>
        </li>
        <li className={styles.navbar__listItem}>
          <button
            className={styles.navbar__link}
            onClick={() => protectionNavigate(CONSULTATION_ROUTE)}
          >
            Арт-консультация
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
