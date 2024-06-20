import { Link, useNavigate } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const navigate = useNavigate();

  const onPaintingLinkClick = () => {
    navigate('/catalog');
  };

  const onGraphicLinkClick = () => {
    navigate('/catalog');
  };

  const onPhotoLinkClick = () => {
    navigate('/catalog');
  };

  const onDigitalLinkClick = () => {
    navigate('/catalog');
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
          <Link to="/artist" className={styles.navbar__link}>
            Художники
          </Link>
        </li>
        <li className={styles.navbar__listItem}>
          <Link to="/news" className={styles.navbar__link}>
            Новости
          </Link>
        </li>
        <li className={styles.navbar__listItem}>
          <Link to="/consultation" className={styles.navbar__link}>
            Арт-консультация
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
