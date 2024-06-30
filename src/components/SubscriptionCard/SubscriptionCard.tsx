import SolidButton from 'src/ui/buttons/SolidButton/SolidButton';
import styles from './SubscriptionCard.module.scss';
import { ISubscriptionType } from 'src/utils/types';
import { getPeriodWord } from 'src/utils/utils';
import { useAppDispatch } from 'src/service/hooks';
import {
  setIsSubscribeModalOpen,
  setSelectedSubscription,
} from 'src/service/slices/modalsSlice';

interface ISubscriptionCardPropsType {
  item: ISubscriptionType;
  narrow?: boolean;
}

const SubscriptionCard = ({ item, narrow }: ISubscriptionCardPropsType) => {
  const dispatch = useAppDispatch();

  const handleSubscribeClick = () => {
    dispatch(setIsSubscribeModalOpen(true));
    dispatch(setSelectedSubscription(item));
  };

  return (
    <li className={`${styles.subscriptionCard} ${narrow ? styles.narrow : ''}`}>
      <h3
        className={`${styles.title} ${narrow ? styles.narrowTitle : ''}`}
      >{`Подписка на ${getPeriodWord(item.period)}`}</h3>
      <p className={styles.price}>{`${item.price}₽`}</p>
      <SolidButton onClick={handleSubscribeClick}>Оформить</SolidButton>
      <ul className={styles.features}>
        <li className={styles.feature}>Аналитика цены</li>
        <li className={styles.feature}>Оценка предметов искусства</li>
        <li className={styles.feature}>Выгодные предложения</li>
      </ul>
    </li>
  );
};

export default SubscriptionCard;
