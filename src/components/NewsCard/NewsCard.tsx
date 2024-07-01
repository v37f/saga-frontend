import { INewsType } from 'src/utils/types';
import styles from './NewsCard.module.scss';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import LikeButton from 'src/ui/buttons/LikeButton/LikeButton';

interface INewsCardPropsType {
  item: INewsType;
}

const NewsCard = (props: INewsCardPropsType) => {
  const { item } = props;
  return (
    <li className={styles.newsCard}>
      <Link to={`/news/${item.newsId}`} className={`${styles.newsCard__link}`}>
        <img className={styles.newsCard__photo} src={item.photo} />
        <div className={styles.newsCard__text}>
        <p className={styles.newsCard__title}>{item.titleNews}</p>
        <p className={styles.newsCard__subtitle}>{item.subtitleNews}</p>
        </div>
      </Link>
    </li>
  );
};

export default NewsCard;
