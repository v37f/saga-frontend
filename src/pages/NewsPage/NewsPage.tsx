import styles from './NewsPage.module.scss';
import { newsMockData } from 'src/utils/mock/newsMockData';
import MainBanner from 'src/components/MainBanner/MainBanner';
import Carousel from 'src/components/Carousel/Carousel';
import Section from 'src/components/Section/Section';
import NewsCard from 'src/components/NewsCard/NewsCard';
import {
  MAIN_SECTION_NEWS_NUMBER,
  MAIN_SECTION_PRODUCTS_NUMBER,
  NEWS_TITLE_BY_BLOCK,
} from 'src/utils/constants';
import { ReactNode } from 'react';
import { TNewsBlockType } from 'src/utils/types';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import { artistMockData } from 'src/utils/mock/artistsMockData';

const NewsPage = () => {
  const artists = artistMockData;
  const getNewsSectionsLayout = (map: Map<TNewsBlockType, string>) => {
    const sectionsArray: ReactNode[] = [];
    map.forEach((title, block) => {
      const currentBlockNews = newsMockData.filter(
        (item) => item.chapter === block
      );
      sectionsArray.push(
        <Section title={title} headerH3 smallGap key={block}>
          {title === 'Популярные новости' ? (
            <Carousel slidesToShow={4}>
              {currentBlockNews
                .slice(0, MAIN_SECTION_NEWS_NUMBER)
                .map((item) => (
                  <NewsCard item={item} key={item.newsId} />
                ))}
            </Carousel>
          ) : (
            <Carousel slidesToShow={4}>
              {artists.slice(0, MAIN_SECTION_NEWS_NUMBER).map((item) => (
                <ArtistCard item={item} key={item.artistId} />
              ))}
            </Carousel>
          )}
        </Section>
      );
    });
    return sectionsArray;
  };
  return (
    <main className={styles.newsPage}>
      <h2 className={styles.newsPage__title}>Новости</h2>
      <MainBanner />
      {getNewsSectionsLayout(NEWS_TITLE_BY_BLOCK)}
      <Section title="Все новости" headerH3 smallGap>
        <div className={styles.newsPage__allNews}>
          {newsMockData.slice(0, MAIN_SECTION_PRODUCTS_NUMBER).map((item) => (
            <NewsCard item={item} key={item.newsId} />
          ))}
        </div>
      </Section>
    </main>
  );
};

export default NewsPage;
