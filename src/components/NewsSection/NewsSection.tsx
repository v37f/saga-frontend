// import styles from './NewsSection.module.scss';
// import { useNavigate } from 'react-router-dom';
import Section from '../Section/Section';
import { newsMockData } from 'src/utils/mock/newsMockData';
import Carousel from '../Carousel/Carousel';
import NewsCard from '../NewsCard/NewsCard';
import { MAIN_SECTION_NEWS_NUMBER } from 'src/utils/constants';

const NewsSection = () => {
  const news = newsMockData;
  return (
    <Section title="Новости">
      <Carousel slidesToShow={4}>
        {news.slice(0, MAIN_SECTION_NEWS_NUMBER).map((item) => (
          <NewsCard item={item} key={item.newsId} />
        ))}
      </Carousel>
    </Section>
  );
};

export default NewsSection;
