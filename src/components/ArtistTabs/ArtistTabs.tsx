import { useState } from 'react';
import styles from './ArtistTabs.module.scss';
import WorkTab from './WorkTab/WorkTab';
import AboutTab from './AboutTab/AboutTab';

type TArtistTabType = 'works' | 'about';

const ArtistTabs = () => {
  const [currentTab, setCurrentTab] = useState<TArtistTabType>('works');
  return (
    <section className={styles.artistTabs}>
      <div className={styles.tabsPanel}>
        <button
          className={`${styles.tab} ${
            currentTab === 'works' ? styles.activeTab : ''
          }`}
          onClick={() => {
            setCurrentTab('works');
          }}
        >
          Работы
        </button>
        <button
          className={`${styles.tab} ${
            currentTab === 'about' ? styles.activeTab : ''
          }`}
          onClick={() => {
            setCurrentTab('about');
          }}
        >
          О художнике
        </button>
      </div>
      {currentTab === 'works' && <WorkTab />}
      {currentTab === 'about' && <AboutTab />}
    </section>
  );
};

export default ArtistTabs;
