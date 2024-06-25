import styles from './Modal.module.scss';
import { FC, ReactNode, useEffect } from 'react';
import CrossIcon from 'src/assets/images/components/cross.svg';

interface IModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal: FC<IModalProps> = ({ children, onClose }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      event.key === 'Escape' && onClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
    // disable eslint because we only need add event listener once when modal rendered
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          title="Закрыть"
        >
          <CrossIcon />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
