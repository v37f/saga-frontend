import styles from './ConsultationPromo.module.scss';
import OutlinedButton from 'src/ui/buttons/OutlinedButton/OutlinedButton';
import { useNavigate } from 'react-router-dom';
import { CONSULTATION_ROUTE } from 'src/utils/constants';

const ConsultationPromo = () => {
  const onConsultationPromoLinkClick = () => {
    navigate(CONSULTATION_ROUTE);
  };
  const navigate = useNavigate();
  return (
    <section className={styles.consultaionPromo}>
      <article className={styles.consultaionPromo__container}>
        <h5 className={styles.consultaionPromo__title}>Арт-консультация</h5>
        <div className={styles.consultaionPromo__text}>
          Уникальный алгоритм поможет определиться с&nbsp;покупкой
        </div>
        <span className={styles.consultaionPromo__textCall}>
          Попробуйте бесплатно прямо сейчас
        </span>
        <div className={styles.consultaionPromo__button}>
          <OutlinedButton onClick={onConsultationPromoLinkClick}>
            Попробуйте
          </OutlinedButton>
        </div>
      </article>
    </section>
  );
};

export default ConsultationPromo;
