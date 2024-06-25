import { useState } from 'react';
import Modal from '../Modal';
import styles from './AuthModal.module.scss';
import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import { useAppDispatch } from 'src/service/hooks';
import { setIsAuthModalOpen } from 'src/service/slices/modalsSlice';

const AuthModal = () => {
  const dispatch = useAppDispatch();
  const [currentTab, setCurrentTab] = useState('login');
  return (
    <Modal
      onClose={() => {
        dispatch(setIsAuthModalOpen(false));
      }}
    >
      <div className={styles.authModal}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${
              currentTab === 'login' ? styles.activeTab : ''
            }`}
            onClick={() => setCurrentTab('login')}
          >
            Вход
          </button>
          <button
            className={`${styles.tab} ${
              currentTab === 'registration' ? styles.activeTab : ''
            }`}
            onClick={() => setCurrentTab('registration')}
          >
            Регистрация
          </button>
        </div>
        {currentTab === 'login' ? <LoginForm /> : <RegistrationForm />}
      </div>
    </Modal>
  );
};

export default AuthModal;
