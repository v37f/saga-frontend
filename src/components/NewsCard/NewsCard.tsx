import { INewsType } from 'src/utils/types';
import styles from './NewsCard.module.scss';

interface INewsCardPropsType {
  item: INewsType;
}

const NewsCard = (props: INewsCardPropsType) => {
  const { item } = props;
  return (
    <div className={styles.newsCard}>
      <div
        className={`${styles.newsCard__link}`}
        title="Перейти на страницу новости"
        aria-label="Перейти на страницу новости"
      >
        <img
          className={styles.newsCard__photo}
          src={item.photo}
          alt={item.titleNews}
        />
        <div className={styles.newsCard__text}>
          <p className={styles.newsCard__title}>{item.titleNews}</p>
          <p className={styles.newsCard__subtitle}>{item.subtitleNews}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
