import { INewsType } from 'src/utils/types';
import styles from './NewsCard.module.scss';
import { Link } from 'react-router-dom';
import { NEWS_ROUTE } from 'src/utils/constants';

interface INewsCardPropsType {
  item: INewsType;
}

const NewsCard = (props: INewsCardPropsType) => {
  const { item } = props;
  return (
    <li className={styles.newsCard}>
      <Link
        to={`${NEWS_ROUTE}/${item.newsId}`}
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
      </Link>
    </li>
  );
};

export default NewsCard;
