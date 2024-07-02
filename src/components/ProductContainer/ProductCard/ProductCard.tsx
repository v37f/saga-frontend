import LikeButton from 'src/ui/buttons/LikeButton/LikeButton';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { IProductType } from 'src/utils/types';
import { CATALOG_ROUTE } from 'src/utils/constants';
import { useAppDispatch, useAppSelector } from 'src/service/hooks';
import { getIsLoggedIn } from 'src/service/slices/currentUserSlice';
import {
  addToFavoriteProducts,
  getFavoriteProductsData,
  removeFromFavoriteProducts,
} from 'src/service/slices/productsSlice';

interface IProductCardPropsType {
  item: IProductType;
}

const ProductCard = (props: IProductCardPropsType) => {
  const { item } = props;
  const dispatch = useAppDispatch();
  const favoriteProducts = useAppSelector(getFavoriteProductsData);
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  const isLiked = favoriteProducts?.some(
    (product) => product.productId === item.productId
  );

  return (
    <li className={styles.productCard}>
      <Link
        to={`${CATALOG_ROUTE}/${item.productId}`}
        className={`${styles.productCard__link} ${
          item.orientalProduct === 'горизонтальная'
            ? styles.productCard__link_orientation_horizontal
            : item.orientalProduct === 'вертикальная'
            ? styles.productCard__link_orientation_vertical
            : styles.productCard__link_orientation_square
        }`}
        title="Перейти на страницу товара"
        aria-label="Перейти на страницу товара"
      >
        <img
          className={styles.productCard__image}
          src={item.photoProduct[0]}
          alt={item.titleArt}
        />
      </Link>
      <div className={styles.productCard__header}>
        <h2
          className={styles.productCard__artistName}
        >{`${item.artist.nameArtist} ${item.artist.lastnameArtist}`}</h2>
        {isLoggedIn && (
          <LikeButton
            isActive={isLiked}
            onClick={
              isLiked
                ? () => dispatch(removeFromFavoriteProducts(item))
                : () => dispatch(addToFavoriteProducts(item))
            }
          />
        )}
      </div>
      <p className={styles.productCard__title}>{item.titleArt}</p>
      <p className={styles.productCard__price}>{`${item.estimatedPrice} ₽`}</p>
    </li>
  );
};

export default ProductCard;
