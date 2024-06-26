import Section from 'src/components/Section/Section';
import ProductContainer from 'src/components/ProductContainer/ProductContainer';
import ProductCard from 'src/components/ProductContainer/ProductCard/ProductCard';
import { productsMockData } from 'src/utils/mock/productsMockData';
import { MAIN_SECTION_PRODUCTS_NUMBER } from 'src/utils/constants';

const NewProducts = () => {
  const newProducts = productsMockData;
  return (
    <Section title="Новинки">
      <ProductContainer columnsNumber={4}>
        {newProducts.slice(0, MAIN_SECTION_PRODUCTS_NUMBER).map((item) => (
          <ProductCard item={item} key={item.productId} />
        ))}
      </ProductContainer>
    </Section>
  );
};

export default NewProducts;
