import useProtectionNavigate from 'src/hooks/useProtectionNavigate';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/service/hooks';
import { getCurrentUserData } from 'src/service/slices/currentUserSlice';
import {
  ARTISTS_ROUTE,
  CATALOG_ROUTE,
  CONSULTATION_ROUTE,
  CUSTOMER_ROLE,
  DEFAULT_ROUTE,
  NEWS_ROUTE,
  PRICE_ANALYTICS_ROUTE,
  SAGA_ALL_RUSSIAN_PHONE,
  SAGA_HELP_MAIL,
  SAGA_MOSCOW_PHONE,
  SELLER_GOODS_ROUTE,
  SELLER_ORDERS_ROUTE,
} from 'src/utils/constants';
import { formatPhoneNumber } from 'src/utils/utils';

const Footer = () => {
  const currentUser = useAppSelector(getCurrentUserData);
  const protectionNavigate = useProtectionNavigate();

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
                    href={`tel: ${SAGA_ALL_RUSSIAN_PHONE}`}
                  >
                    {formatPhoneNumber(SAGA_ALL_RUSSIAN_PHONE)}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              {currentUser.userRole === CUSTOMER_ROLE ? (
                <ul className={styles.footer__navbar}>
                  <li className={styles.footer__navbar_item}>
                    <Link
                      to={CATALOG_ROUTE}
                      className={styles.footer__navbar_link}
                    >
                      Каталог
                    </Link>
                  </li>
                  <li className={styles.footer__navbar_item}>
                    <Link
                      to={ARTISTS_ROUTE}
                      className={styles.footer__navbar_link}
                    >
                      Художники
                    </Link>
                  </li>
                  <li className={styles.footer__navbar_item}>
                    <button
                      onClick={() => protectionNavigate(PRICE_ANALYTICS_ROUTE)}
                      className={styles.footer__navbar_link}
                    >
                      Аналитика цен
                    </button>
                  </li>
                  <li className={styles.footer__navbar_item}>
                    <button
                      onClick={() => protectionNavigate(CONSULTATION_ROUTE)}
                      className={styles.footer__navbar_link}
                    >
                      Арт-консультация
                    </button>
                  </li>
                </ul>
              ) : (
                <ul
                  className={`${styles.footer__navbar} ${styles.footer__navbar_seller}`}
                >
                  <li className={styles.footer__navbar_item}>
                    <Link
                      to={DEFAULT_ROUTE}
                      className={styles.footer__navbar_link}
                    >
                      Профиль продавца
                    </Link>
                  </li>
                  <li className={styles.footer__navbar_item}>
                    <Link
                      to={SELLER_ORDERS_ROUTE}
                      className={styles.footer__navbar_link}
                    >
                      Заказы
                    </Link>
                  </li>
                  <li className={styles.footer__navbar_item}>
                    <Link
                      to={SELLER_GOODS_ROUTE}
                      className={styles.footer__navbar_link}
                    >
                      Товары
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
                    href={`tel:${SAGA_MOSCOW_PHONE}`}
                  >
                    {formatPhoneNumber(SAGA_MOSCOW_PHONE)}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <ul className={styles.footer__navbar}>
                <li className={styles.footer__navbar_item}>
                  <Link
                    to={DEFAULT_ROUTE}
                    className={styles.footer__navbar_link}
                  >
                    О компании
                  </Link>
                </li>
                <li className={styles.footer__navbar_item}>
                  <Link
                    to={DEFAULT_ROUTE}
                    className={styles.footer__navbar_link}
                  >
                    Поддержка
                  </Link>
                </li>
                {currentUser.userRole === CUSTOMER_ROLE && (
                  <li className={styles.footer__navbar_item}>
                    <Link
                      to={NEWS_ROUTE}
                      className={styles.footer__navbar_link}
                    >
                      Новости
                    </Link>
                  </li>
                )}
                <li className={styles.footer__navbar_item}>
                  <Link
                    to={DEFAULT_ROUTE}
                    className={styles.footer__navbar_link}
                  >
                    Контакты
                  </Link>
                </li>
              </ul>
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
                    href={`malto: ${SAGA_HELP_MAIL}`}
                  >
                    {SAGA_HELP_MAIL}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <ul className={styles.footer__social}>
                <li className={styles.footer__social_title}>Мы в соцсетях</li>
                <li>
                  <ul className={styles.footer__social_icons}>
                    <li className={styles.footer__social_icon}>
                      <a className={styles.footer__social_icon_tg}></a>
                    </li>
                    <li className={styles.footer__social_icon}>
                      <a className={styles.footer__social_icon_vk}></a>
                    </li>
                    <li className={styles.footer__social_icon}>
                      <a className={styles.footer__social_icon_yt}></a>
                    </li>
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
