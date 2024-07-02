import OutlinedButton from 'src/ui/buttons/OutlinedButton/OutlinedButton';
import styles from './NewsSection.module.scss';
import { useNavigate } from 'react-router-dom';
import { NEWS_ROUTE } from 'src/utils/constants';

const NewsSection = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.newsSection}>
      <div className={styles.texts}>
        <h2 className={styles.title}>Новости мира искусства</h2>
        <p className={styles.description}>
          Читайте новости об искусстве, чтобы быть в курсе последних событий и
          тенденций в мире культуры. Узнавайте о выставках, фестивалях,
          премьерах фильмов и других мероприятиях, связанных с искусством.
        </p>
        <div className={styles.button}>
          <OutlinedButton
            onClick={() => {
              navigate(NEWS_ROUTE);
            }}
          >
            Больше новостей
          </OutlinedButton>
        </div>
      </div>
      <div className={styles.banner} />
    </section>
  );
};

export default NewsSection;
