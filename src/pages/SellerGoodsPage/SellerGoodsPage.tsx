import styles from './SellerGoodsPage.module.scss';
import SolidButton from 'src/ui/buttons/SolidButton/SolidButton';

const SellerGoodsPage = () => {
  return (
    <main className={styles.sellerGoodsPage}>
      <div className={styles.sellerGoodsPage__container}>
        <h2 className={styles.sellerGoodsPage__title}>Товары</h2>
        <div className={styles.sellerGoodsPage__content}>
          <p className={styles.sellerGoodsPage__empty}>Пока здесь пусто</p>
          <p className={styles.sellerGoodsPage__text}>
            Начните добавлять товары на продажу. Они появятся на этой странице
          </p>
          <div className={styles.sellerGoodsPage__button}>
            <SolidButton>
              <span className={styles.sellerGoodsPage__buttonImg}></span>
              Добавить товар
            </SolidButton>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SellerGoodsPage;
