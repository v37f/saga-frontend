import SubscriptionOffer from 'src/components/SubscriptionOffer/SubscriptionOffer';
import styles from './ConsultationPage.module.scss';
import { useAppSelector } from 'src/service/hooks';
import { getCurrentUserData } from 'src/service/slices/currentUserSlice';
import Consultation from 'src/components/Consultation/Consultation';

const ConsultationPage = () => {
  const currentUser = useAppSelector(getCurrentUserData);
  return (
    <main className={styles.consultationPage}>
      <h2 className={styles.title}>Арт-консультация</h2>
      <p className={styles.description}>
        Цена арт-объекта определяется на основе результатов работы авторского
        алгоритма для анализа больших данных, использующий машинное обучение, и
        учитывающий 35 критериев оценки арт-объекта и его автора.
      </p>
      {!currentUser.subscription && (
        <p className={styles.subsDescription}>
          Оценка арт-объекта входит в подписку на доступ к Price Database и
          аналитике арт-объектов
        </p>
      )}
      {currentUser.subscription ? <Consultation /> : <SubscriptionOffer />}
    </main>
  );
};

export default ConsultationPage;
