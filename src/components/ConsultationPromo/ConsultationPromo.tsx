import styles from './ConsultationPromo.module.scss';
import OutlinedButton from 'src/ui/buttons/OutlinedButton/OutlinedButton';
import { useNavigate } from 'react-router-dom';
import { CONSULTATION_ROUTE } from 'src/utils/constants';
import useProtectionNavigate from 'src/hooks/useProtectionNavigate';

const ConsultationPromo = () => {
  const navigate = useNavigate();
  const protectionNavigate = useProtectionNavigate();
  const onConsultationPromoLinkClick = () => {
    navigate(CONSULTATION_ROUTE);
  };
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
        <div className={styles.consultaionPromo__button}
            onClick={() => protectionNavigate(CONSULTATION_ROUTE)}>
          <OutlinedButton onClick={onConsultationPromoLinkClick}>
            Попробуйте
          </OutlinedButton>

        </div>
      </article>
    </section>
  );
};

export default ConsultationPromo;
