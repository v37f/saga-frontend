import { ReactNode } from 'react';
import styles from './Section.module.scss';

type TSectionPropsType = {
  title: string;
  showMoreButton?: boolean;
  moreButtonText?: string;
  onMoreButtonClick?: () => void;
  children?: ReactNode;
  smallGap?: boolean;
  headerH3?: boolean;
  noSidePadding?: boolean;
};

const Section = (props: TSectionPropsType) => {
  const {
    title,
    showMoreButton,
    moreButtonText,
    onMoreButtonClick,
    children,
    smallGap,
    headerH3,
    noSidePadding,
  } = props;
  return (
    <section
      className={`${styles.section} ${smallGap ? styles.smallGap : ''} ${
        noSidePadding ? styles.noSidePadding : ''
      }`}
    >
      <div className={styles.header}>
        <h2 className={`${styles.title} ${headerH3 ? styles.titleH3 : ''}`}>
          {title}
        </h2>
        {showMoreButton && (
          <button className={styles.moreButton} onClick={onMoreButtonClick}>
            {moreButtonText}
          </button>
        )}
      </div>
      {children}
    </section>
  );
};

export default Section;
