import { IArtistType } from 'src/utils/types';
import styles from './ArtistCard.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LikeButton from 'src/ui/buttons/LikeButton/LikeButton';

interface IArtistCardPropsType {
  item: IArtistType;
}

const ArtistCard = (props: IArtistCardPropsType) => {
  const { item } = props;
  const [isLiked, setIsLiked] = useState(false);

  const onLikeButtonClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <li className={styles.artistCard}>
      <Link to="/" className={`${styles.artistCard__link}`}>
        <img className={styles.artistCard__photo} src={item.photo} />
      </Link>
      <div className={styles.artistCard__header}>
        <h4
          className={styles.artistCard__artistName}
        >{`${item.nameArtist} ${item.lastnameArtist}`}</h4>
        <LikeButton isActive={isLiked} onClick={onLikeButtonClick} />
      </div>
      <p className={styles.artistCard__description}>{item.shortDescription}</p>
      <p className={styles.artistCard__liveYears}>{item.yearOfBirth}</p>
    </li>
  );
};

export default ArtistCard;
