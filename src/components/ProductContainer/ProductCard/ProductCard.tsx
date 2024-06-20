import LikeButton from 'src/ui/buttons/LikeButton/LikeButton';
import styles from './ProductCard.module.scss';
import TrendingUpIcon from 'src/assets/images/components/trending_up.svg';
import TrendingDownIcon from 'src/assets/images/components/trending_down.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IProductType } from 'src/utils/types';

interface IProductCardPropsType {
  item: IProductType;
}

const ProductCard = (props: IProductCardPropsType) => {
  const { item } = props;
  const [isLiked, setIsLiked] = useState(false);

  const onLikeButtonClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <li className={styles.productCard}>
      <Link
        to="/"
        className={`${styles.productCard__link} ${
          item.orientalProduct === 'горизонтальная'
            ? styles.productCard__link_orientation_horizontal
            : item.orientalProduct === 'вертикальная'
            ? styles.productCard__link_orientation_vertical
            : styles.productCard__link_orientation_square
        }`}
      >
        <img className={styles.productCard__image} src={item.photoProduct[0]} />
      </Link>
      <div className={styles.productCard__header}>
        <h4
          className={styles.productCard__artistName}
        >{`${item.artist.nameArtist} ${item.artist.lastnameArtist}`}</h4>
        <LikeButton isActive={isLiked} onClick={onLikeButtonClick} />
      </div>
      <p className={styles.productCard__title}>{item.titleArt}</p>
      <div className={styles.productCard__evaluation}>
        <p className={styles.productCard__price}>{`${item.priceSale} ₽`}</p>
        <div className={styles.productCard__trend}>
          {item.priceSale > item.forecastPrice ? (
            <TrendingDownIcon />
          ) : (
            <TrendingUpIcon />
          )}
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
