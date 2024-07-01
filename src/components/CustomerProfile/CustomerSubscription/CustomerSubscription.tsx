import OutlinedButton from 'src/ui/buttons/OutlinedButton/OutlinedButton';
import styles from './CustomerSubscription.module.scss';
import { subcriptionMockData } from 'src/utils/mock/subscribtionMockData';
import SubscriptionCard from 'src/components/SubscriptionCard/SubscriptionCard';
import { useAppSelector } from 'src/service/hooks';
import { getCurrentUserData } from 'src/service/slices/currentUserSlice';
import CustomerSubscriptionCard from './CustomerSubscriptionCard/CustomerSubscriptionCard';

const CustomerSubscription = () => {
  const subscriptionTypes = subcriptionMockData;

  const { subscription } = useAppSelector(getCurrentUserData);

  return (
    <div className={styles.sustomerSubscription}>
      <h3 className={styles.title}>Управление подпиской</h3>
      {!subscription ? (
        <div className={styles.noSubscription}>
          <p className={styles.title}>У вас нет оформленной подписки</p>
          <p className={styles.text}>
            Оформите подписку и воспользуйтесь всеми возможностями сервиса
          </p>
          <ul className={styles.subTypes}>
            {subscriptionTypes.map((item) => (
              <SubscriptionCard item={item} key={item.subscriptionId} narrow />
            ))}
          </ul>
        </div>
      ) : (
        <CustomerSubscriptionCard item={subscription} />
      )}
      <div className={styles.question}>
        <h4 className={styles.questionTitle}>Остались вопросы?</h4>
        <div className={styles.button}>
          <OutlinedButton>Условия подписки</OutlinedButton>
        </div>
      </div>
    </div>
  );
};

export default CustomerSubscription;
