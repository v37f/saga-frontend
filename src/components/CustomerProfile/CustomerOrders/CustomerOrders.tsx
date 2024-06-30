import styles from './CustomerOrders.module.scss';

const CustomerOrders = () => {
  return (
    <div className={styles.customerOrders}>
      <h3 className={styles.title}>Мои заказы</h3>
      <div className={styles.noOrders}>
        <p className={styles.title}>Нет оформленных заказов</p>
        <p className={styles.text}>
          Если вы только что оформили заказ, он отобразится здесь в течение 15
          минут после оплаты.
        </p>
      </div>
    </div>
  );
};

export default CustomerOrders;
