import { ICustomerSubscriptionType } from 'src/utils/types';
import styles from './CustomerSubscriptionCard.module.scss';
import { getPeriodWord } from 'src/utils/utils';
import CrossIcon from 'src/assets/images/components/cross.svg';
import { useAppDispatch, useAppSelector } from 'src/service/hooks';
import {
  getCurrentUserData,
  updateCurrentUserInfo,
} from 'src/service/slices/currentUserSlice';

interface ICustomerSubscriptionCardProps {
  item: ICustomerSubscriptionType;
}

const CustomerSubscriptionCard = ({ item }: ICustomerSubscriptionCardProps) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(getCurrentUserData);

  const parsedSubsOnDate = item.subsDateOn.split('.');

  const activeUntilDate = new Date(
    Number(parsedSubsOnDate[2]),
    Number(parsedSubsOnDate[1]) - 1 + item.subsPeriod.period,
    Number(parsedSubsOnDate[0])
  );

  const prolongationDate = new Date(
    Number(parsedSubsOnDate[2]),
    Number(parsedSubsOnDate[1]) - 1 + item.subsPeriod.period,
    Number(parsedSubsOnDate[0]) + 1
  );

  const setAutoSub = (value: boolean) => {
    dispatch(
      updateCurrentUserInfo({
        ...currentUser,
        subscription: { ...item, autoSubs: value },
      })
    );
  };

  return (
    <div className={styles.customerSubscriptionCard}>
      <div className={styles.leftSide}>
        <h4 className={styles.title}>{`Подписка на ${getPeriodWord(
          item.subsPeriod.period
        )}`}</h4>
        <p
          className={styles.text}
        >{`Активно до ${activeUntilDate.toLocaleString('default', {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
        })}`}</p>
        <p className={styles.text}>
          {item.autoSubs
            ? `Будет продлена автоматически ${prolongationDate.toLocaleString(
                'default',
                {
                  day: 'numeric',
                  month: 'numeric',
                  year: 'numeric',
                }
              )}`
            : 'Продление отменено'}
          '
        </p>
      </div>
      <div className={styles.rightSide}>
        <button
          className={styles.button}
          onClick={() => setAutoSub(!item.autoSubs)}
        >
          {item.autoSubs && <CrossIcon />}
          {item.autoSubs ? 'Отменить продление' : 'Возобновить подписку'}
        </button>
        <div className={styles.creditCard} />
      </div>
    </div>
  );
};

export default CustomerSubscriptionCard;
