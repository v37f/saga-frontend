import OutlinedButton from 'src/ui/buttons/OutlinedButton/OutlinedButton';
import styles from './ConsultationSubscription.module.scss';
import SubscriptionCard from '../SubscriptionCard/SubscriptionCard';
import { subcriptionMockData } from 'src/utils/mock/subscribtionMockData';

const ConsultationSubscription = () => {
  const subscriptionTypes = subcriptionMockData;
  return (
    <section className={styles.consultationSubscription}>
      <h2 className={styles.title}>
        Оформите подписку и воспользуйтесь всеми возможностями сервиса
      </h2>
      <ul className={styles.subTypes}>
        {subscriptionTypes.map((item) => (
          <SubscriptionCard item={item} key={item.subscriptionId} />
        ))}
      </ul>
      <div className={styles.question}>
        <h4 className={styles.questionTitle}>Остались вопросы?</h4>
        <div className={styles.button}>
          <OutlinedButton>Условия подписки</OutlinedButton>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSubscription;
