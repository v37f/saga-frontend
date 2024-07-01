import styles from './CartPage.module.scss';
import SolidButton from 'src/ui/buttons/SolidButton/SolidButton';
import { CATALOG_ROUTE } from 'src/utils/constants';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const navigate = useNavigate();
  return (
    <main className={styles.cartPage}>
      <div className={styles.cartPage__container}>
        <h2 className={styles.cartPage__title}>Корзина</h2>
        <div className={styles.cartPage__content}>
          <div className={styles.cartPage__empty}></div>
          <p className={styles.cartPage__text}>
            Ваша корзина пуста. Изучите наш ассортимент и добавьте товар в
            корзину.
          </p>
          <div className={styles.cartPage__button}>
            <SolidButton onClick={() => navigate(CATALOG_ROUTE)}>
              Перейти в каталог
            </SolidButton>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
