import { useState } from 'react';
import Modal from '../Modal';
import styles from './AuthModal.module.scss';
import LoginForm from './LoginForm/LoginForm';

const AuthModal = () => {
  const [currentTab, setCurrentTab] = useState('login');
  return (
    <Modal onClose={() => {}}>
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
        {currentTab === 'login' ? <LoginForm /> : 'Registration'}
      </div>
    </Modal>
  );
};

export default AuthModal;
