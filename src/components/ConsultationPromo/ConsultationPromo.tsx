import styles from './ConsultationPromo.module.scss';

const ConsultationPromo = () => {
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
        <button className={styles.consultaionPromo__button}>Попробовать</button>
      </article>
    </section>
  );
};

export default ConsultationPromo;
