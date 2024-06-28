import ArtistAnalysis from './ArtistAnalysis/ArtistAnalysis';
import styles from './ConsultationResult.module.scss';

interface IConsultationResultProps {
  price: number;
}

const ConsultationResult = ({ price }: IConsultationResultProps) => {
  return (
    <section className={styles.consultationResult}>
      <div className={styles.summary}>
        <h3 className={styles.title}>Результат оценки</h3>
        <div className={styles.price}>
          <h4 className={styles.priceTitle}>Среднерыночная цена</h4>
          <p className={styles.priceValue}>{`${price.toLocaleString()} ₽`}</p>
        </div>
      </div>
      <ArtistAnalysis />
    </section>
  );
};

export default ConsultationResult;
