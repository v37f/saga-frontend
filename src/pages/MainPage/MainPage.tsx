import MainBanner from 'src/components/MainBanner/MainBanner';
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <main className={styles.mainPage}>
      <MainBanner />
    </main>
  );
};

export default MainPage;
