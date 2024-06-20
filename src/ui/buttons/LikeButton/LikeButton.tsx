import styles from './LikeButton.module.scss';
import LikeIcon from 'src/assets/images/components/like.svg';

interface ILikeButtonProps {
  isActive: boolean;
  onClick: () => void;
}

const LikeButton = (props: ILikeButtonProps) => {
  const { isActive, onClick } = props;
  return (
    <button
      className={`${styles.likeButton} ${
        isActive ? styles.likeButton_active : ''
      }`}
      onClick={onClick}
    >
      <LikeIcon />
    </button>
  );
};

export default LikeButton;
