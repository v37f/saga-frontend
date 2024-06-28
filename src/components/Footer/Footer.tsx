import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/service/hooks';
import { getCurrentUserData } from 'src/service/slices/currentUserSlice';

const Footer = () => {
  const currentUser = useAppSelector(getCurrentUserData);
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <span className={styles.footer__block}>
          <div className={styles.footer__block_wrap}>
            <p className={styles.footer__logo}></p>
            <div className={styles.footer__title_wrap}>
              <p className={styles.footer__title}>САГААРТ</p>
              <p className={styles.footer__subtitle}>Исскуство рядом</p>
            </div>
          </div>
          <div className={styles.footer__info_wrap}>
            <p className={styles.footer__info_title}>Юридический адрес</p>
            <p className={styles.footer__info_location}>
              141701, Московская Область, г.о. Долгопрудный, г. Долгопрудный,
              пер Научный, д. 4, к. 1, помещ. 29
            </p>
          </div>
          <p className={styles.footer__copyright}>&copy; 2024 ООО «Сагаарт»</p>
        </span>
        <span className={styles.footer__block}>
          <ul className={styles.footer__list}>
            <li>
              <ul className={styles.footer__connection}>
                <li className={styles.footer__connection_title}>
                  Звонок по России бесплатный
                </li>
                <li>
                  <a
                    className={styles.footer__connection_number}
                    href={'tel:+78001205250'}
                  >
                    +7 800 120-52-50
                  </a>
                </li>
              </ul>
            </li>
            <li>
              {currentUser.userRole === 'customer' ? (
                <ul className={styles.footer__navbar}>
                  <li className={styles.footer__navbar_item}>
                    <Link to="/catalog" className={styles.footer__navbar_link}>
                      Каталог
                    </Link>
                  </li>
                  <li className={styles.footer__navbar_item}>
                    <Link to="/artists" className={styles.footer__navbar_link}>
                      Художники
                    </Link>
                  </li>
                  <li className={styles.footer__navbar_item}>
                    <Link to="/" className={styles.footer__navbar_link}>
                      Аналитика цен
                    </Link>
                  </li>
                  <li className={styles.footer__navbar_item}>
                    <Link
                      to="/consultation"
                      className={styles.footer__navbar_link}
                    >
                      Арт-консультация
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className={`${styles.footer__navbar} ${styles.footer__navbar_seller}`}>
                  <li className={styles.footer__navbar_item}>
                    <Link to="/" className={styles.footer__navbar_link}>
                      Аналитика цен
                    </Link>
                  </li>
                  <li className={styles.footer__navbar_item}>
                    <Link
                      to="/consultation"
                      className={styles.footer__navbar_link}
                    >
                      Арт-консультация
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>Политика в области персональных данных</li>
          </ul>
        </span>
        <span className={styles.footer__block}>
          <ul className={styles.footer__list}>
            <li>
              <ul className={styles.footer__connection}>
                <li className={styles.footer__connection_title}>
                  Телефон в Москве
                </li>
                <li>
                  <a
                    className={styles.footer__connection_number}
                    href={'tel:+74954562421'}
                  >
                    +7 495 456-24-21
                  </a>
                </li>
              </ul>
            </li>
            <li>
              {currentUser.userRole === 'customer' ? (
                <ul className={styles.footer__navbar}>
                  <li className={styles.footer__navbar_item}>
                    <Link to="/" className={styles.footer__navbar_link}>
                      О компании
                    </Link>
                  </li>
                  <li className={styles.footer__navbar_item}>
                    <Link to="/" className={styles.footer__navbar_link}>
                      Поддержка
                    </Link>
                  </li>
                  <li className={styles.footer__navbar_item}>
                    <Link to="/news" className={styles.footer__navbar_link}>
                      Новости
                    </Link>
                  </li>
                  <li className={styles.footer__navbar_item}>
                    <Link to="/news" className={styles.footer__navbar_link}>
                      Контакты
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className={styles.footer__navbar}>
                  <li className={styles.footer__navbar_item}>
                    <Link to="/" className={styles.footer__navbar_link}>
                      О компании
                    </Link>
                  </li>
                  <li className={styles.footer__navbar_item}>
                    <Link to="/" className={styles.footer__navbar_link}>
                      Поддержка
                    </Link>
                  </li>
                  <li className={styles.footer__navbar_item}>
                    <Link to="/news" className={styles.footer__navbar_link}>
                      Контакты
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </span>
        <span className={styles.footer__block}>
          <ul className={styles.footer__list}>
            <li>
              <ul className={styles.footer__connection}>
                <li className={styles.footer__connection_title}>Email</li>
                <li>
                  <a
                    className={styles.footer__connection_number}
                    href={'malto:help@sagaart.ru'}
                  >
                    help@sagaart.ru
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <ul className={styles.footer__social}>
                <li className={styles.footer__social_title}>Мы в соцсетях</li>
                <li>
                  <ul className={styles.footer__social_icon}>
                    <li className={styles.footer__social_icon}><a className={styles.footer__social_icon_tg}></a></li>
                    <li className={styles.footer__social_icon}><a className={styles.footer__social_icon_vk}></a></li>
                    <li className={styles.footer__social_icon}><a className={styles.footer__social_icon_yt}></a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
