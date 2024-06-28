import styles from './ArtistAnalysis.module.scss';
import TrendingUpIcon from 'src/assets/images/components/trending_up.svg';
import TrendingDownIcon from 'src/assets/images/components/trending_down.svg';

const ArtistAnalysis = () => {
  return (
    <div className={styles.artistAnalysis}>
      <h3 className={styles.title}>Анализ продаж работ художника</h3>
      <ul className={styles.parametrs}>
        <li className={styles.parametr}>
          <h4 className={styles.key}>Годовой оборот</h4>
          <p className={styles.value}>
            €50 982 426 <TrendingUpIcon />
          </p>
        </li>
        <li className={styles.parametr}>
          <h4 className={styles.key}>Мировой рейтинг</h4>
          <p className={styles.value}>
            29 <TrendingDownIcon />
          </p>
        </li>
        <li className={styles.parametr}>
          <h4 className={styles.key}>Индекс цен</h4>
          <p className={styles.value}>
            +41% <TrendingUpIcon />
          </p>
        </li>
        <li className={styles.parametr}>
          <h4 className={styles.key}>Географическое распределение</h4>
          <p className={styles.value}>83,8% продаж в Великобритании</p>
        </li>
        <li className={styles.parametr}>
          <h4 className={styles.key}>Распределение по ценовым сегментам</h4>
          <p className={styles.value}>28,9% лотов от 100€ до 500€</p>
        </li>
        <li className={styles.parametr}>
          <h4 className={styles.key}>Распределение по категориям</h4>
          <p className={styles.value}>91,1% лотов живописи</p>
        </li>
      </ul>
    </div>
  );
};

export default ArtistAnalysis;
