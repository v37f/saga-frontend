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
            <ProductContainer columnsNumber={3}>
              {filteredProducts.map((item) => (
                <ProductCard item={item} key={item.productId} />
              ))}
            </ProductContainer>
          )}
        </div>
      </section>
    </main>
  );
};

export default CatalogPage;
