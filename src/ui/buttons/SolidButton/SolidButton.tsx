import styles from './SolidButton.module.scss';
import { ComponentPropsWithRef } from 'react';

const SolidButton = (props: ComponentPropsWithRef<'button'>) => {
  return <button className={styles.solidButton} {...props} />;
};

export default SolidButton;
