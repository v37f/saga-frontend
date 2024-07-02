import { useNavigate, useParams } from 'react-router-dom';
import styles from './ArtistPage.module.scss';
import { useAppDispatch, useAppSelector } from 'src/service/hooks';
import {
  addToFavoriteArtists,
  fetchCurrentArtist,
  getCurrentArtistData,
  getCurrentArtistLoadFailed,
  getCurrentArtistLoadFailedMessage,
  getFavoriteArtistsData,
  removeFromFavoriteArtists,
} from 'src/service/slices/artistsSlice';
import { getIsLoggedIn } from 'src/service/slices/currentUserSlice';
import { useEffect } from 'react';
import SolidButton from 'src/ui/buttons/SolidButton/SolidButton';
import { ARTISTS_ROUTE } from 'src/utils/constants';
import LikeButton from 'src/ui/buttons/LikeButton/LikeButton';
import ArtistSocials from 'src/components/ArtistSocials/ArtistSocials';
import ArtistTabs from 'src/components/ArtistTabs/ArtistTabs';

const ArtistPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const artist = useAppSelector(getCurrentArtistData);
  const favoriteArtists = useAppSelector(getFavoriteArtistsData);
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const isLoadingFailed = useAppSelector(getCurrentArtistLoadFailed);
  const failedMessage = useAppSelector(getCurrentArtistLoadFailedMessage);

  const isLiked = favoriteArtists?.some(
    (item) => item.artistId === artist.artistId
  );

  useEffect(() => {
    dispatch(fetchCurrentArtist(Number(id)));
    // disable eslint because we only need fetch current artist data once when page open
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={styles.artistPage}>
      {isLoadingFailed ? (
        <section className={styles.notFound}>
          <p className={styles.notFoundText}>{failedMessage}</p>
          <div className={styles.notFoundButton}>
            <SolidButton onClick={() => navigate(ARTISTS_ROUTE)}>
              Вернуться на страницу художников
            </SolidButton>
          </div>
        </section>
      ) : (
        <>
          <section className={styles.summary}>
            <img
              className={styles.image}
              src={artist.photo}
              alt={`${artist.nameArtist} ${artist.lastnameArtist}`}
            />
            <div className={styles.info}>
              <div className={styles.topLine}>
                <h2
                  className={styles.artistName}
                >{`${artist.nameArtist} ${artist.lastnameArtist}`}</h2>
                {isLoggedIn && (
                  <LikeButton
                    isActive={isLiked}
                    onClick={
                      isLiked
                        ? () => dispatch(removeFromFavoriteArtists(artist))
                        : () => dispatch(addToFavoriteArtists(artist))
                    }
                  />
                )}
              </div>
              <p className={`${styles.text} ${styles.shortDescription}`}>
                {artist.shortDescription}
              </p>
              <p className={styles.text}>{artist.yearOfBirth}</p>
              <p className={styles.text}>
                Винсент Ван Гог (1853–1890 гг.) — великий голландский художник,
                яркий представитель постимпрессионизма. Его творческий путь был
                недолгим, но весьма плодотворным: за десять с лишним лет — около
                2000 необыкновенных полотен. «Подсолнухи», «Пара ботинок»,
                «Едоки картофеля», «Звездная ночь» — вот неполный список
                знаменитых картин в биографии Ван Гога.
              </p>
              <ArtistSocials />
            </div>
          </section>
          <ArtistTabs />
        </>
      )}
    </main>
  );
};

export default ArtistPage;
