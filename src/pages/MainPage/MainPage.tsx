import MainBanner from 'src/components/MainBanner/MainBanner';
import styles from './MainPage.module.scss';
import NewProducts from 'src/components/NewProducts/NewProducts';
import CheapProducts from 'src/components/CheapProducts/CheapProducts';
import ExpensiveProducts from 'src/components/ExpensiveProducts/ExpensiveProducts';
import NewsSection from 'src/components/NewsSection/NewsSection';
import ArtistSection from 'src/components/ArtistsSection/ArtistsSection';

const MainPage = () => {
  return (
    <main className={styles.mainPage}>
      <MainBanner />
      <NewProducts />
      <NewsSection />
      <ArtistSection />
      <CheapProducts />
      <ExpensiveProducts />
    </main>
  );
};

export default MainPage;
