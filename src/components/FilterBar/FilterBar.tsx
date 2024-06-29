import SolidButton from 'src/ui/buttons/SolidButton/SolidButton';
import styles from './FilterBar.module.scss';
import InputTypeDropdown from 'src/ui/inputs/InputTypeDropdown/InputTypeDropdown';
import { useState } from 'react';
import {
  CATEGORY_FILTER_OPTIONS,
  ORIENTATION_FILTER_OPTIONS,
  PRICE_FILTER_OPTIONS,
  SIZE_FILTER_OPTIONS,
  STYLE_FILTER_OPTIONS,
} from 'src/utils/constants';

const FilterBar = () => {
  const [artCategorys, setArtCategorys] = useState<string[]>([]);
  const [artStyles, setArtStyles] = useState<string[]>([]);
  const [artSizes, setArtSizes] = useState<string[]>([]);
  const [artOrientation, setArtOrientation] = useState<string[]>([]);
  const [artPrice, setArtPrice] = useState<string[]>([]);

  return (
    <div className={styles.filterBar}>
      <div className={styles.header}>
        <h3 className={styles.title}>Фильтры</h3>
        <button className={styles.resetButton}>Сбросить все</button>
      </div>
      <form className={styles.form}>
        <SolidButton>Применить</SolidButton>
        <InputTypeDropdown
          label="Категория"
          valueSetter={setArtCategorys}
          dropdownValue={artCategorys}
          options={CATEGORY_FILTER_OPTIONS}
        />
        <InputTypeDropdown
          label="Стиль"
          valueSetter={setArtStyles}
          dropdownValue={artStyles}
          options={STYLE_FILTER_OPTIONS}
        />
        <InputTypeDropdown
          label="Размер"
          valueSetter={setArtSizes}
          dropdownValue={artSizes}
          options={SIZE_FILTER_OPTIONS}
        />
        <InputTypeDropdown
          label="Ориентация"
          valueSetter={setArtOrientation}
          dropdownValue={artOrientation}
          options={ORIENTATION_FILTER_OPTIONS}
        />
        <InputTypeDropdown
          label="Цена"
          valueSetter={setArtPrice}
          dropdownValue={artPrice}
          options={PRICE_FILTER_OPTIONS}
        />
      </form>
    </div>
  );
};

export default FilterBar;
