import ConsultationSubscription from 'src/components/ConsultationSubscription/ConsultationSubscription';
import styles from './ConsultationPage.module.scss';

const ConsultationPage = () => {
  return (
    <main className={styles.consultationPage}>
      <h2 className={styles.title}>Арт-консультация</h2>
      <p className={styles.description}>
        Цена арт-объекта определяется на основе результатов работы авторского
        алгоритма для анализа больших данных, использующий машинное обучение, и
        учитывающий 35 критериев оценки арт-объекта и его автора.
      </p>
      <p className={styles.subsDescription}>
        Оценка арт-объекта входит в подписку на доступ к Price Database и
        аналитике арт-объектов
      </p>

      <ConsultationSubscription />
    </main>
  );
};

export default ConsultationPage;
