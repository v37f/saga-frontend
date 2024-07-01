import { useNavigate } from 'react-router-dom';
import Section from '../Section/Section';
import Carousel from '../Carousel/Carousel';
import ArtistCard from '../ArtistCard/ArtistCard';
import {
  ARTISTS_ROUTE,
  MAIN_SECTION_ARTISTS_NUMBER,
} from 'src/utils/constants';
import { useAppSelector } from 'src/service/hooks';
import { getAllArtistsData } from 'src/service/slices/artistsSlice';

const ArtistSection = () => {
  const navigate = useNavigate();
  const artists = useAppSelector(getAllArtistsData);

  const handleMoreButtonClick = () => {
    navigate(ARTISTS_ROUTE);
  };
  return (
    <Section
      title="Художники"
      showMoreButton
      moreButtonText="Смотреть всех"
      onMoreButtonClick={handleMoreButtonClick}
      smallGap
    >
      <Carousel slidesToShow={4}>
        {artists.slice(0, MAIN_SECTION_ARTISTS_NUMBER).map((item) => (
          <ArtistCard item={item} key={item.artistId} />
        ))}
      </Carousel>
    </Section>
  );
};

export default ArtistSection;
