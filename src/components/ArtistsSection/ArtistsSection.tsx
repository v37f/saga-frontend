import { useNavigate } from 'react-router-dom';
import Section from '../Section/Section';
import { artistMockData } from 'src/utils/mock/artistsMockData';
import Carousel from '../Carousel/Carousel';
import ArtistCard from '../ArtistCard/ArtistCard';
import { MAIN_SECTION_ARTISTS_NUMBER } from 'src/utils/constants';

const ArtistSection = () => {
  const navigate = useNavigate();
  const artists = artistMockData;

  const handleMoreButtonClick = () => {
    navigate('/artists');
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
