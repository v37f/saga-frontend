import Section from 'src/components/Section/Section';
import ProductContainer from 'src/components/ProductContainer/ProductContainer';
import ProductCard from 'src/components/ProductContainer/ProductCard/ProductCard';

import { useNavigate } from 'react-router-dom';
import {
  CATALOG_ROUTE,
  EXPENSIVE_COST_KEY,
  MAIN_SECTION_PRODUCTS_NUMBER,
  PRICE_FILTER_OPTIONS,
} from 'src/utils/constants';
import { useAppDispatch, useAppSelector } from 'src/service/hooks';
import {
  getAllProductsData,
  setFilteredProducts,
} from 'src/service/slices/productsSlice';
import { filterByPrice } from 'src/utils/utils';
import {
  setDefaultFilters,
  setKeyword,
  setPriceFilter,
} from 'src/service/slices/filtersSlice';

const ExpensiveProducts = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector(getAllProductsData);

  const expensiveCost = JSON.stringify(
    PRICE_FILTER_OPTIONS.get(EXPENSIVE_COST_KEY)
  );

  const expensiveProducts = filterByPrice(allProducts, [expensiveCost]);

  const handleMoreButtonClick = () => {
    dispatch(setDefaultFilters());
    dispatch(setPriceFilter([expensiveCost]));
    dispatch(setKeyword(''));
    dispatch(setFilteredProducts(expensiveProducts));
    navigate(CATALOG_ROUTE);
  };
  return (
    <Section
      title="Работы от 500 тысяч ₽ "
      showMoreButton
      moreButtonText="Смотреть больше вариантов"
      onMoreButtonClick={handleMoreButtonClick}
    >
      <ProductContainer columnsNumber={4}>
        {expensiveProducts
          .slice(0, MAIN_SECTION_PRODUCTS_NUMBER)
          .map((item) => (
            <ProductCard item={item} key={item.productId} />
          ))}
      </ProductContainer>
    </Section>
  );
};

export default ExpensiveProducts;
