import React, { FC, InputHTMLAttributes } from 'react';
import styles from './DropdownOption.module.scss';

interface IDropdownOptionProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
type Ref = HTMLInputElement;
const DropdownOption: FC<IDropdownOptionProps> = React.forwardRef<
  Ref,
  IDropdownOptionProps
>((props, ref) => {
  const { label } = props;
  return (
    <label className={styles.dropDownOption}>
      <input className={styles.input} type="checkbox" {...props} ref={ref} />
      <p className={styles.label}>{label}</p>
    </label>
  );
});

export default DropdownOption;
