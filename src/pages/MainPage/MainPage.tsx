import styles from './MainPage.module.scss';
import AuthModal from 'src/components/Modal/AuthModal/AuthModal';

const MainPage = () => {
  return (
    <main className={styles.mainPage}>
      <AuthModal />
    </main>
  );
};

export default MainPage;
