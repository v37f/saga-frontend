import styles from './Chip.module.scss';
import CrossIcon from 'src/assets/images/components/cross.svg';

interface IChipProps {
  text: string;
  onClose: () => void;
}

const Chip = ({ text, onClose }: IChipProps) => {
  return (
    <div className={styles.chip}>
      <p className={styles.text}>{text}</p>
      <button
        className={styles.close}
        onClick={onClose}
        title="Удалить"
        aria-label="Удалить"
      >
        <CrossIcon />
      </button>
    </div>
  );
};

export default Chip;
