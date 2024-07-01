import Section from 'src/components/Section/Section';
import ProductContainer from 'src/components/ProductContainer/ProductContainer';
import ProductCard from 'src/components/ProductContainer/ProductCard/ProductCard';
import { useNavigate } from 'react-router-dom';
import {
  CATALOG_ROUTE,
  CHEAP_COST_KEY,
  MAIN_SECTION_PRODUCTS_NUMBER,
  PRICE_FILTER_OPTIONS,
} from 'src/utils/constants';
import {
  setDefaultFilters,
  setKeyword,
  setPriceFilter,
} from 'src/service/slices/filtersSlice';
import {
  getAllProductsData,
  setFilteredProducts,
} from 'src/service/slices/productsSlice';
import { filterByPrice } from 'src/utils/utils';
import { useAppDispatch, useAppSelector } from 'src/service/hooks';

const CheapProducts = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector(getAllProductsData);

  const cheapCost = JSON.stringify(PRICE_FILTER_OPTIONS.get(CHEAP_COST_KEY));

  const cheapProducts = filterByPrice(allProducts, [cheapCost]);

  const handleMoreButtonClick = () => {
    dispatch(setDefaultFilters());
    dispatch(setPriceFilter([cheapCost]));
    dispatch(setKeyword(''));
    dispatch(setFilteredProducts(cheapProducts));
    navigate(CATALOG_ROUTE);
  };
  return (
    <Section
      title="Работы до 20 тысяч ₽"
      showMoreButton
      moreButtonText="Смотреть больше вариантов"
      onMoreButtonClick={handleMoreButtonClick}
    >
      <ProductContainer columnsNumber={4}>
        {cheapProducts.slice(0, MAIN_SECTION_PRODUCTS_NUMBER).map((item) => (
          <ProductCard item={item} key={item.productId} />
        ))}
      </ProductContainer>
    </Section>
  );
};

export default CheapProducts;
