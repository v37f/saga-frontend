import { IArtistType } from 'src/utils/types';
import styles from './ArtistCard.module.scss';
import { Link } from 'react-router-dom';
import LikeButton from 'src/ui/buttons/LikeButton/LikeButton';
import { useAppDispatch, useAppSelector } from 'src/service/hooks';
import {
  addToFavoriteArtists,
  getFavoriteArtistsData,
  removeFromFavoriteArtists,
} from 'src/service/slices/artistsSlice';
import { getIsLoggedIn } from 'src/service/slices/currentUserSlice';
import { ARTISTS_ROUTE } from 'src/utils/constants';

interface IArtistCardPropsType {
  item: IArtistType;
}

const ArtistCard = (props: IArtistCardPropsType) => {
  const { item } = props;
  const dispatch = useAppDispatch();
  const favoriteArtists = useAppSelector(getFavoriteArtistsData);
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  const isLiked = favoriteArtists?.some(
    (artist) => artist.artistId === item.artistId
  );

  return (
    <li className={styles.artistCard}>
      <Link
        to={`${ARTISTS_ROUTE}/${item.artistId}`}
        className={`${styles.artistCard__link}`}
      >
        <img className={styles.artistCard__photo} src={item.photo} />
      </Link>
      <div className={styles.artistCard__header}>
        <h4
          className={styles.artistCard__artistName}
        >{`${item.nameArtist} ${item.lastnameArtist}`}</h4>
        {isLoggedIn && (
          <LikeButton
            isActive={isLiked}
            onClick={
              isLiked
                ? () => dispatch(removeFromFavoriteArtists(item))
                : () => dispatch(addToFavoriteArtists(item))
            }
          />
        )}
      </div>
      <p className={styles.artistCard__description}>{item.shortDescription}</p>
      <p className={styles.artistCard__liveYears}>{item.yearOfBirth}</p>
    </li>
  );
};

export default ArtistCard;
