import { FC } from 'react';
import styles from './InputTypeRadiobutton.module.scss';

interface IInputTypeRadiobutton
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputTypeRadiobutton: FC<IInputTypeRadiobutton> = ({
  label = '',

  ...InputHTMLAttributes
}) => {
  return (
    <label htmlFor={InputHTMLAttributes.id} className={styles.labelContainer}>
      <input
        type="radio"
        className={styles.originalInput}
        {...InputHTMLAttributes}
      />
      <div className={styles.visibleInput}>{label}</div>
    </label>
  );
};

export default InputTypeRadiobutton;
