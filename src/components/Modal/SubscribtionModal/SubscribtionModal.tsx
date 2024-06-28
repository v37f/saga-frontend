import { useAppDispatch, useAppSelector } from 'src/service/hooks';
import Modal from '../Modal';
import styles from './SubscribtionModal.module.scss';
import {
  getSelectedSubscription,
  setIsSubscribeModalOpen,
} from 'src/service/slices/modalsSlice';
import { getPeriodWord } from 'src/utils/utils';
import { useState } from 'react';
import SolidButton from 'src/ui/buttons/SolidButton/SolidButton';
import {
  getCurrentUserData,
  updateCurrentUserInfo,
} from 'src/service/slices/currentUserSlice';
import { ISubscriptionType } from 'src/utils/types';

const SubscribtionModal = () => {
  const dispatch = useAppDispatch();
  const selectedSubscribtion = useAppSelector(getSelectedSubscription);
  const [agreement, setAgreement] = useState(false);
  const currentUserData = useAppSelector(getCurrentUserData);

  const getUserWithSubscription = (selectedSubscribtion: ISubscriptionType) => {
    const userWithSubscription = {
      ...currentUserData,
      subscription: {
        autoSubs: true,
        subsDateOn: new Date().toLocaleString('default', {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
        }),
        subsPeriod: selectedSubscribtion,
      },
    };

    return userWithSubscription;
  };

  const handleSubscribeClick = () => {
    dispatch(
      updateCurrentUserInfo(getUserWithSubscription(selectedSubscribtion))
    );
    dispatch(setIsSubscribeModalOpen(false));
  };
  return (
    <Modal
      onClose={() => {
        dispatch(setIsSubscribeModalOpen(false));
      }}
    >
      <div className={styles.subscribtionModal}>
        <h3 className={styles.title}>{`Подписка на ${getPeriodWord(
          selectedSubscribtion.period
        )}`}</h3>
        <h4 className={styles.subTitle}>
          Изучайте аналитику, делайте покупки на основе прогнозов, инвестируйте
          в искусство с выгодой.
        </h4>
        <p className={styles.pricePerMonth}>{`${Math.round(
          selectedSubscribtion.price / selectedSubscribtion.period
        )}₽/месяц`}</p>
        <ul className={styles.features}>
          <li className={styles.feature}>Аналитика цены</li>
          <li className={styles.feature}>Оценка предметов искусства</li>
          <li className={styles.feature}>Выгодные предложения</li>
        </ul>
        <p
          className={styles.renewal}
        >{`Следующее продление произойдет через ${getPeriodWord(
          selectedSubscribtion.period
        )} после оплаты. Управлять подпиской вы можете в любой момент в личном кабинете.`}</p>
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            className={styles.checkboxInput}
            id="seller"
            onChange={() => {
              setAgreement(!agreement);
            }}
            checked={agreement}
          />
          <label htmlFor="seller" className={styles.checkboxLabel}>
            Я согласен с{' '}
            <a href="" className={styles.link} target="_blank" rel="noreferrer">
              условиями подписки
            </a>
          </label>
        </div>
        <SolidButton disabled={!agreement} onClick={handleSubscribeClick}>
          Оформить
        </SolidButton>
      </div>
    </Modal>
  );
};

export default SubscribtionModal;
