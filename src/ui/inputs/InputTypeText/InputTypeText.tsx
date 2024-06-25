import React, { FC, InputHTMLAttributes } from 'react';
import styles from './InputTypeText.module.scss';

interface IInputTypeTextProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  outlined?: boolean;
}

type Ref = HTMLInputElement;

const InputTypeText: FC<IInputTypeTextProps> = React.forwardRef<
  Ref,
  IInputTypeTextProps
>((props, ref) => {
  const { id, label, error, required, disabled, outlined } = props;

  return (
    <div className={styles.inputTypeText}>
      {label && (
        <label
          htmlFor={id}
          className={`${styles.inputTypeText__label} ${
            error ? styles.inputTypeText__label_invalid : ''
          } ${disabled ? styles.inputTypeText__label_disabled : ''}`}
        >
          {required && (
            <span
              className={`${styles.inputTypeText__label} ${styles.inputTypeText__label_invalid}`}
            >
              *
            </span>
          )}
          {label}
        </label>
      )}
      <input
        className={`${styles.inputTypeText__input} ${
          outlined ? styles.inputTypeText__input_outlined : ''
        } ${error ? styles.inputTypeText__input_invalid : ''} ${
          disabled ? styles.inputTypeText__input_disabled : ''
        } `}
        {...props}
        ref={ref}
      />

      <p
        className={`${styles.inputTypeText__error} ${
          disabled ? styles.inputTypeText__error_disabled : ''
        }`}
      >
        {error}
      </p>
    </div>
  );
});

export default InputTypeText;
