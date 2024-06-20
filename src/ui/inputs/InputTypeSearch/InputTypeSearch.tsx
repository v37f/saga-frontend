import React, { FC, InputHTMLAttributes } from 'react';
import styles from './InputTypeSearch.module.scss';
import SearchIcon from 'src/assets/images/components/search.svg';

interface IInputTypeSearchProps extends InputHTMLAttributes<HTMLInputElement> {}

type Ref = HTMLInputElement;

const InputTypeSearch: FC<IInputTypeSearchProps> = React.forwardRef<
  Ref,
  IInputTypeSearchProps
>((props, ref) => {
  return (
    <div className={styles.inputTypeSearch}>
      <SearchIcon />
      <input className={styles.inputTypeSearch__input} {...props} ref={ref} />
    </div>
  );
});

export default InputTypeSearch;
