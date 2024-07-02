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
import VkIcon from 'src/assets/images/components/icon_vk.svg';
import TelegramIcon from 'src/assets/images/components/icon_tg.svg';
import YouTubeIcon from 'src/assets/images/components/icon_youtube.svg';

const Footer = () => {
  const currentUser = useAppSelector(getCurrentUserData);
  const protectionNavigate = useProtectionNavigate();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <span className={styles.footer__block}>
          <div className={styles.footer__blockWrap}>
            <Link
              to={DEFAULT_ROUTE}
              className={styles.footer__logo}
              title="Вернуться на главную"
              aria-label="Вернуться на главную"
              onClick={() => window.scrollTo(0, 0)}
            >
              Вернуться на главную
            </Link>
            <div className={styles.footer__titleWrap}>
              <p className={styles.footer__title}>САГААРТ</p>
              <p className={styles.footer__subtitle}>Исскуство рядом</p>
            </div>
          </div>
          <div className={styles.footer__infoWrap}>
            <p className={styles.footer__infoTitle}>Юридический адрес</p>
            <p className={styles.footer__infoLocation}>
              141701, Московская Область, г.о. Долгопрудный, г. Долгопрудный,
              пер Научный, д. 4, к. 1, помещ. 29
            </p>
          </div>
          <p className={styles.footer__copyright}>&copy; 2024 ООО «Сагаарт»</p>
        </span>
        <span className={styles.footer__block}>
          <ul className={styles.footer__list}>
            <li className={styles.footer__listItem}>
              <ul className={styles.footer__connection}>
                <li
                  className={`${styles.footer__connectionItem} ${styles.footer__connectionTitle}`}
                >
                  Звонок по России бесплатный
                </li>
                <li className={styles.footer__connectionItem}>
                  <a
                    className={styles.footer__connectionNumber}
                    href={`tel: ${SAGA_ALL_RUSSIAN_PHONE}`}
                  >
                    {formatPhoneNumber(SAGA_ALL_RUSSIAN_PHONE)}
                  </a>
                </li>
              </ul>
            </li>
            <li className={styles.footer__listItem}>
              {currentUser.userRole === CUSTOMER_ROLE ? (
                <ul className={styles.footer__navbar}>
                  <li className={styles.footer__navbarItem}>
                    <Link
                      to={CATALOG_ROUTE}
                      className={styles.footer__navbarLink}
                    >
                      Каталог
                    </Link>
                  </li>
                  <li className={styles.footer__navbarItem}>
                    <Link
                      to={ARTISTS_ROUTE}
                      className={styles.footer__navbarLink}
                    >
                      Художники
                    </Link>
                  </li>
                  <li className={styles.footer__navbarItem}>
                    <button
                      onClick={() => protectionNavigate(PRICE_ANALYTICS_ROUTE)}
                      className={styles.footer__navbarLink}
                    >
                      Аналитика цен
                    </button>
                  </li>
                  <li className={styles.footer__navbarItem}>
                    <button
                      onClick={() => protectionNavigate(CONSULTATION_ROUTE)}
                      className={styles.footer__navbarLink}
                    >
                      Арт-консультация
                    </button>
                  </li>
                </ul>
              ) : (
                <ul
                  className={`${styles.footer__navbar} ${styles.footer__navbarSeller}`}
                >
                  <li className={styles.footer__navbarItem}>
                    <Link
                      to={DEFAULT_ROUTE}
                      className={styles.footer__navbarLink}
                    >
                      Профиль продавца
                    </Link>
                  </li>
                  <li className={styles.footer__navbarItem}>
                    <Link
                      to={SELLER_ORDERS_ROUTE}
                      className={styles.footer__navbarLink}
                    >
                      Заказы
                    </Link>
                  </li>
                  <li className={styles.footer__navbarItem}>
                    <Link
                      to={SELLER_GOODS_ROUTE}
                      className={styles.footer__navbarLink}
                    >
                      Товары
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className={styles.footer__listItem}>
              Политика в области персональных данных
            </li>
          </ul>
        </span>
        <span className={styles.footer__block}>
          <ul className={styles.footer__list}>
            <li className={styles.footer__listItem}>
              <ul className={styles.footer__connection}>
                <li
                  className={`${styles.footer__connectionItem} ${styles.footer__connectionTitle}`}
                >
                  Телефон в Москве
                </li>
                <li className={styles.footer__connectionItem}>
                  <a
                    className={styles.footer__connectionNumber}
                    href={`tel:${SAGA_MOSCOW_PHONE}`}
                  >
                    {formatPhoneNumber(SAGA_MOSCOW_PHONE)}
                  </a>
                </li>
              </ul>
            </li>
            <li className={styles.footer__listItem}>
              <ul className={styles.footer__navbar}>
                <li className={styles.footer__navbarItem}>
                  <Link
                    to={DEFAULT_ROUTE}
                    className={styles.footer__navbarLink}
                  >
                    О компании
                  </Link>
                </li>
                <li className={styles.footer__navbarItem}>
                  <Link
                    to={DEFAULT_ROUTE}
                    className={styles.footer__navbarLink}
                  >
                    Поддержка
                  </Link>
                </li>
                {currentUser.userRole === CUSTOMER_ROLE && (
                  <li className={styles.footer__navbarItem}>
                    <Link to={NEWS_ROUTE} className={styles.footer__navbarLink}>
                      Новости
                    </Link>
                  </li>
                )}
                <li className={styles.footer__navbarItem}>
                  <Link
                    to={DEFAULT_ROUTE}
                    className={styles.footer__navbarLink}
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
            <li className={styles.footer__listItem}>
              <ul className={styles.footer__connection}>
                <li
                  className={`${styles.footer__connectionItem} ${styles.footer__connectionTitle}`}
                >
                  Email
                </li>
                <li>
                  <a
                    className={styles.footer__connectionNumber}
                    href={`malto: ${SAGA_HELP_MAIL}`}
                  >
                    {SAGA_HELP_MAIL}
                  </a>
                </li>
              </ul>
            </li>
            <li className={styles.footer__listItem}>
              <ul className={styles.footer__social}>
                <li
                  className={`${styles.footer__connectionItem} ${styles.footer__connectionTitle}`}
                >
                  Мы в соцсетях
                </li>
                <li className={styles.footer__connectionItem}>
                  <ul className={styles.footer__socialIcons}>
                    <li className={styles.footer__socialIcon}>
                      <a
                        className={styles.footer__socialLink}
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <TelegramIcon />
                        Telegram
                      </a>
                    </li>
                    <li className={styles.footer__socialIcon}>
                      <a
                        className={styles.footer__socialLink}
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <VkIcon />
                        Vk
                      </a>
                    </li>
                    <li className={styles.footer__socialIcon}>
                      <a
                        className={styles.footer__socialLink}
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <YouTubeIcon />
                        YouTube
                      </a>
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
