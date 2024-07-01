import FilterBar from 'src/components/FilterBar/FilterBar';
import styles from './CatalogPage.module.scss';
import ProductContainer from 'src/components/ProductContainer/ProductContainer';
import ProductCard from 'src/components/ProductContainer/ProductCard/ProductCard';
import { useAppDispatch, useAppSelector } from 'src/service/hooks';
import {
  getCategoryFilter,
  getKeyword,
  getOrientationFilter,
  getPriceFilter,
  getSizeFilter,
  getStyleFilter,
  setKeyword,
} from 'src/service/slices/filtersSlice';
import { filterProductsByParameters } from 'src/utils/utils';
import {
  getAllProducts,
  getFilteredProducts,
  setFilteredProducts,
} from 'src/service/slices/productsSlice';
import Chip from 'src/components/Chip/Chip';
import {
  DEFAULT_VISIBLE_PRODUCTS,
  VISIBLE_PRODUCTS_INCREMENT,
} from 'src/utils/constants';
import { useState } from 'react';
import OutlinedButton from 'src/ui/buttons/OutlinedButton/OutlinedButton';

const CatalogPage = () => {
  const dispatch = useAppDispatch();

  const filteredProducts = useAppSelector(getFilteredProducts);
  const allProducts = useAppSelector(getAllProducts);

  const artCategoryFilter = useAppSelector(getCategoryFilter);
  const artStyleFilter = useAppSelector(getStyleFilter);
  const artSizeFilter = useAppSelector(getSizeFilter);
  const artOrientationFilter = useAppSelector(getOrientationFilter);
  const artPriceFilter = useAppSelector(getPriceFilter);
  const keyword = useAppSelector(getKeyword);

  const [visibleProducts, setVisibleProducts] = useState(
    DEFAULT_VISIBLE_PRODUCTS
  );

  const handleAcceptFiltersClick = () => {
    dispatch(
      setFilteredProducts(
        filterProductsByParameters(
          allProducts,
          artCategoryFilter,
          artStyleFilter,
          artOrientationFilter,
          artSizeFilter,
          artPriceFilter,
          keyword
        )
      )
    );
  };

  const handleChipClose = () => {
    dispatch(setKeyword(''));
    dispatch(
      setFilteredProducts(
        filterProductsByParameters(
          allProducts,
          artCategoryFilter,
          artStyleFilter,
          artOrientationFilter,
          artSizeFilter,
          artPriceFilter,
          ''
        )
      )
    );
  };

  const showMoreProducts = () => {
    setVisibleProducts((prev: number) => prev + VISIBLE_PRODUCTS_INCREMENT);
  };

  return (
    <main className={styles.catalogPage}>
      <h2 className={styles.title}>Каталог</h2>
      <section className={styles.products}>
        <FilterBar onAcceptFilterClick={handleAcceptFiltersClick} />
        <div className={styles.rightSide}>
          <div className={styles.currentFilters}>
            {keyword && (
              <Chip text={`Поиск: "${keyword}"`} onClose={handleChipClose} />
            )}
          </div>
          {filteredProducts.length === 0 ? (
            <span className={styles.nothingFound}>Ничего не найдено</span>
          ) : (
            <div className={styles.foundProducts}>
              <ProductContainer columnsNumber={3}>
                {filteredProducts.slice(0, visibleProducts).map((item) => (
                  <ProductCard item={item} key={item.productId} />
                ))}
              </ProductContainer>
              {visibleProducts < filteredProducts.length && (
                <div className={styles.button}>
                  <OutlinedButton onClick={showMoreProducts}>
                    Загрузить еще
                  </OutlinedButton>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default CatalogPage;
