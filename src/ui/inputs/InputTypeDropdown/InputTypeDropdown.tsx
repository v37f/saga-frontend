import { ReactNode, useState } from 'react';
import styles from './InputTypeDropdown.module.scss';
import DropdownOption from './DropdownOption/DropdownOption';
import { TMinMaxFilterOption } from 'src/utils/types';

interface IInputTypeDropdownProps {
  label: string;
  valueSetter: (value: string[]) => void;
  dropdownValue: string[];
  options: Map<string, string | TMinMaxFilterOption>;
  addScroll?: boolean;
  disabled?: boolean;
}

const InputTypeDropdown = (props: IInputTypeDropdownProps) => {
  const { label, valueSetter, dropdownValue, options, addScroll, disabled } =
    props;
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      valueSetter([...dropdownValue, e.target.value]);
    } else {
      valueSetter(dropdownValue.filter((item) => item !== e.target.value));
    }
  };

  const getOptionsLayout = (map: Map<string, string | TMinMaxFilterOption>) => {
    const optionsArray: ReactNode[] = [];
    map.forEach((value, title) => {
      value = typeof value === 'string' ? value : JSON.stringify(value);

      optionsArray.push(
        <DropdownOption
          key={title}
          label={title}
          value={value}
          checked={dropdownValue.includes(value)}
          onChange={onOptionChange}
          disabled={disabled}
        />
      );
    });
    return optionsArray;
  };

  return (
    <fieldset className={styles.inputTypeDropdown}>
      <button
        className={styles.button}
        type="button"
        onClick={handleButtonClick}
      >
        <p className={`${styles.label} ${isOpen ? styles.rotateChevron : ''}`}>
          {label}
        </p>
      </button>
      <div
        className={`${styles.options} ${isOpen ? styles.visible : ''} ${
          addScroll ? styles.addScroll : ''
        }`}
      >
        {getOptionsLayout(options)}
      </div>
    </fieldset>
  );
};

export default InputTypeDropdown;
