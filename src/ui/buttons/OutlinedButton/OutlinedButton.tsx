import styles from './OutlinedButton.module.scss';
import { ComponentPropsWithRef } from 'react';

const OutlinedButton = (props: ComponentPropsWithRef<'button'>) => {
  return <button className={styles.outlinedButton} {...props} />;
};

export default OutlinedButton;
