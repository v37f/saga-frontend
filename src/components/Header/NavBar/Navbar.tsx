import { Link, useNavigate } from 'react-router-dom';
import styles from './NavBar.module.scss';
import useProtectionNavigate from 'src/hooks/useProtectionNavigate';
import {
  ARTISTS_ROUTE,
  CATALOG_ROUTE,
  CONSULTATION_ROUTE,
  NEWS_ROUTE,
} from 'src/utils/constants';

const NavBar = () => {
  const navigate = useNavigate();
  const protectionNavigate = useProtectionNavigate();
  const onPaintingLinkClick = () => {
    navigate(CATALOG_ROUTE);
  };

  const onGraphicLinkClick = () => {
    navigate(CATALOG_ROUTE);
  };

  const onPhotoLinkClick = () => {
    navigate(CATALOG_ROUTE);
  };

  const onDigitalLinkClick = () => {
    navigate(CATALOG_ROUTE);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__listItem}>
          <button className={styles.navbar__link} onClick={onPaintingLinkClick}>
            Живопись
          </button>
        </li>
        <li className={styles.navbar__listItem}>
          <button className={styles.navbar__link} onClick={onGraphicLinkClick}>
            Графика
          </button>
        </li>
        <li className={styles.navbar__listItem}>
          <button className={styles.navbar__link} onClick={onPhotoLinkClick}>
            Фотография
          </button>
        </li>
        <li className={styles.navbar__listItem}>
          <button className={styles.navbar__link} onClick={onDigitalLinkClick}>
            Digital
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
