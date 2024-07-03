import styles from './SellerOrdersPage.module.scss';

const SellerOrdersPage = () => {
  return (
    <main className={styles.sellerOrdersPage}>
      <div className={styles.sellerOrdersPage__container}>
        <h2 className={styles.sellerOrdersPage__title}>Заказы</h2>
        <div className={styles.sellerOrdersPage__content}>
          <p className={styles.sellerOrdersPage__empty}>Пока здесь пусто</p>
          <p className={styles.sellerOrdersPage__text}>
            На этой странице появятся заказы ваших товаров покупателями. Вы
            сможете отслеживать статус, вносить изменения и отменять заказы
          </p>
        </div>
      </div>
    </main>
  );
};

export default SellerOrdersPage;
