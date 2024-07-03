import styles from './ArtistsPage.module.scss';
import Section from 'src/components/Section/Section';
import Carousel from 'src/components/Carousel/Carousel';
import ArtistCard from 'src/components/ArtistCard/ArtistCard';
import {
  ARTIST_TITLE_BY_STYLE,
  MAIN_SECTION_ARTISTS_NUMBER,
} from 'src/utils/constants';
import { ReactNode } from 'react';
import { TArtStyleType } from 'src/utils/types';
import { useAppSelector } from 'src/service/hooks';
import { getAllArtistsData } from 'src/service/slices/artistsSlice';

const ArtistsPage = () => {
  const artists = useAppSelector(getAllArtistsData);

  const getArtistsSectionsLayout = (map: Map<TArtStyleType, string>) => {
    const sectionsArray: ReactNode[] = [];
    map.forEach((title, style) => {
      const currentStyleArtist = artists.filter(
        (item) => item.personalStyle === style
      );
      sectionsArray.push(
        <Section title={title} headerH3 smallGap key={style}>
          <Carousel slidesToShow={4}>
            {currentStyleArtist
              .slice(0, MAIN_SECTION_ARTISTS_NUMBER)
              .map((item) => (
                <ArtistCard item={item} key={item.artistId} />
              ))}
          </Carousel>
        </Section>
      );
    });

    return sectionsArray;
  };

  return (
    <main className={styles.artistsPage}>
      <h2 className={styles.title}>Художники</h2>
      {getArtistsSectionsLayout(ARTIST_TITLE_BY_STYLE)}
    </main>
  );
};

export default ArtistsPage;
