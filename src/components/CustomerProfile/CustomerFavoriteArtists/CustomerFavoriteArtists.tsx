import { useAppSelector } from 'src/service/hooks';
import styles from './CustomerFavoriteArtists.module.scss';
import { getCurrentUserData } from 'src/service/slices/currentUserSlice';
import SolidButton from 'src/ui/buttons/SolidButton/SolidButton';
import { useNavigate } from 'react-router-dom';
import { ARTISTS_ROUTE } from 'src/utils/constants';
import ArtistCard from 'src/components/ArtistCard/ArtistCard';

const CustomerFavoriteArtists = () => {
  const currentUser = useAppSelector(getCurrentUserData);
  const navigate = useNavigate();

  return (
    <div className={styles.customerFavoriteArtists}>
      <h3 className={styles.title}>Любимые художники</h3>
      {currentUser.favoriteArtist?.length === 0 ? (
        <div className={styles.noArtists}>
          <p className={styles.text}>
            Мы пока не знаем, что вам нравится. Хотите посмотреть художников?
          </p>
          <div className={styles.button}>
            <SolidButton onClick={() => navigate(ARTISTS_ROUTE)}>
              Посмотреть всех художников
            </SolidButton>
          </div>
        </div>
      ) : (
        <div className={styles.artists}>
          {currentUser.favoriteArtist?.map((item) => (
            <ArtistCard item={item} key={item.artistId} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerFavoriteArtists;
