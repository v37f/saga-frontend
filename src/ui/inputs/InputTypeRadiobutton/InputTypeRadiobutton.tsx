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
    <label htmlFor={InputHTMLAttributes.id} className={styles.label_container}>
      <input
        type="radio"
        className={styles.original_input}
        {...InputHTMLAttributes}
      />
      <div className={styles.visible_input}>{label}</div>
    </label>
  );
};

export default InputTypeRadiobutton;
