import styles from './ArtistSocials.module.scss';
import VkIcon from 'src/assets/images/components/icon_vk.svg';
import TelegramIcon from 'src/assets/images/components/icon_tg.svg';
import YouTubeIcon from 'src/assets/images/components/icon_youtube.svg';

const ArtistSocials = () => {
  return (
    <div className={styles.artistSocials}>
      <h3 className={styles.title}>Соцсети художника</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a
            className={styles.link}
            href="https://t.me/vincent_vangog"
            title="Перейти в канал Telegram"
            aria-label="Перейти в канал Telegram"
            target="_blank"
            rel="noreferrer"
          >
            <TelegramIcon />
            Telegram
          </a>
        </li>
        <li className={styles.item}>
          <a
            className={styles.link}
            href="https://vk.com/vgzt1"
            title="Перейти на страницу Вконтакте"
            aria-label="Перейти в сообщество Вконтакте"
            target="_blank"
            rel="noreferrer"
          >
            <VkIcon />
            Вконтакте
          </a>
        </li>
        <li className={styles.item}>
          <a
            className={styles.link}
            href="https://www.youtube.com/watch?v=xj1kG4FY6Vc"
            title="Открыть видео на YouTube"
            aria-label="Открыть видео на YouTube"
            target="_blank"
            rel="noreferrer"
          >
            <YouTubeIcon />
            YouTube
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ArtistSocials;
