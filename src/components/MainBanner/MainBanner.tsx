import { bannersMockData } from 'src/utils/mock/bannersMockData';
import styles from './MainBanner.module.scss';
import Carousel from '../Carousel/Carousel';
import BannerItem from './BannerItem/BannerItem';

const MainBanner = () => {
  const banners = bannersMockData;
  return (
    <section className={styles.mainBanner}>
      <Carousel hasControlsOffset slidesToShow={1}>
        {banners.map((item) => (
          <BannerItem item={item} key={item.bannerId} />
        ))}
      </Carousel>
    </section>
  );
};

export default MainBanner;
