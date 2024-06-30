import styles from './ConsultationPromo.module.scss';
import OutlinedButton from 'src/ui/buttons/OutlinedButton/OutlinedButton';
import { CONSULTATION_ROUTE } from 'src/utils/constants';
import useProtectionNavigate from 'src/hooks/useProtectionNavigate';

const ConsultationPromo = () => {
  const protectionNavigate = useProtectionNavigate();
  return (
    <section className={styles.consultaionPromo}>
      <article className={styles.consultaionPromo__container}>
        <h5 className={styles.consultaionPromo__title}>Арт-консультация</h5>
        <h1 className={styles.consultaionPromo__text}>
          Уникальный алгоритм поможет определиться с&nbsp;покупкой
        </h1>
        <span className={styles.consultaionPromo__textCall}>
          Попробуйте бесплатно прямо сейчас
        </span>
        <div
          className={styles.consultaionPromo__button}
          onClick={() => protectionNavigate(CONSULTATION_ROUTE)}
        >
          <OutlinedButton>Попробовать</OutlinedButton>
        </div>
      </article>
    </section>
  );
};

export default ConsultationPromo;
