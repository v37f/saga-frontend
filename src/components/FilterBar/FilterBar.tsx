import SolidButton from 'src/ui/buttons/SolidButton/SolidButton';
import styles from './FilterBar.module.scss';
import InputTypeDropdown from 'src/ui/inputs/InputTypeDropdown/InputTypeDropdown';

import {
  CATEGORY_FILTER_OPTIONS,
  ORIENTATION_FILTER_OPTIONS,
  PRICE_FILTER_OPTIONS,
  SIZE_FILTER_OPTIONS,
  STYLE_FILTER_OPTIONS,
} from 'src/utils/constants';
import { useAppDispatch, useAppSelector } from 'src/service/hooks';
import {
  getCategoryFilter,
  getOrientationFilter,
  getPriceFilter,
  getSizeFilter,
  getStyleFilter,
  setCategoryFilter,
  setDefaultFilters,
  setKeyword,
  setOrientationFilter,
  setPriceFilter,
  setSizeFilter,
  setStyleFilter,
} from 'src/service/slices/filtersSlice';
import {
  getAllProductsData,
  setFilteredProducts,
} from 'src/service/slices/productsSlice';

interface IFilterBarPropsType {
  onAcceptFilterClick: () => void;
}

const FilterBar = ({ onAcceptFilterClick }: IFilterBarPropsType) => {
  const dispatch = useAppDispatch();

  const allProducts = useAppSelector(getAllProductsData);

  const artCategoryFilter = useAppSelector(getCategoryFilter);
  const artStyleFilter = useAppSelector(getStyleFilter);
  const artSizeFilter = useAppSelector(getSizeFilter);
  const artOrientationFilter = useAppSelector(getOrientationFilter);
  const artPriceFilter = useAppSelector(getPriceFilter);

  const setArtCategoryFilter = (value: string[]) => {
    dispatch(setCategoryFilter(value));
  };

  const setArtStyleFilter = (value: string[]) => {
    dispatch(setStyleFilter(value));
  };

  const setArtSizeFilter = (value: string[]) => {
    dispatch(setSizeFilter(value));
  };

  const setArtOrientationFilter = (value: string[]) => {
    dispatch(setOrientationFilter(value));
  };

  const setArtPriceFilter = (value: string[]) => {
    dispatch(setPriceFilter(value));
  };

  const handleResetClick = () => {
    dispatch(setDefaultFilters());
    dispatch(setKeyword(''));
    dispatch(setFilteredProducts(allProducts));
  };

  return (
    <div className={styles.filterBar}>
      <div className={styles.header}>
        <h3 className={styles.title}>Фильтры</h3>
        <button className={styles.resetButton} onClick={handleResetClick}>
          Сбросить все
        </button>
      </div>
      <form className={styles.form}>
        <SolidButton onClick={onAcceptFilterClick} type="button">
          Применить
        </SolidButton>
        <InputTypeDropdown
          label="Категория"
          valueSetter={setArtCategoryFilter}
          dropdownValue={artCategoryFilter}
          options={CATEGORY_FILTER_OPTIONS}
        />
        <InputTypeDropdown
          label="Стиль"
          valueSetter={setArtStyleFilter}
          dropdownValue={artStyleFilter}
          options={STYLE_FILTER_OPTIONS}
        />
        <InputTypeDropdown
          label="Размер"
          valueSetter={setArtSizeFilter}
          dropdownValue={artSizeFilter}
          options={SIZE_FILTER_OPTIONS}
        />
        <InputTypeDropdown
          label="Ориентация"
          valueSetter={setArtOrientationFilter}
          dropdownValue={artOrientationFilter}
          options={ORIENTATION_FILTER_OPTIONS}
        />
        <InputTypeDropdown
          label="Цена"
          valueSetter={setArtPriceFilter}
          dropdownValue={artPriceFilter}
          options={PRICE_FILTER_OPTIONS}
        />
      </form>
    </div>
  );
};

export default FilterBar;
