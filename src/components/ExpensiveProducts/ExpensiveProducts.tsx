import Section from 'src/components/Section/Section';
import ProductContainer from 'src/components/ProductContainer/ProductContainer';
import ProductCard from 'src/components/ProductContainer/ProductCard/ProductCard';
import { productsMockData } from 'src/utils/mock/productsMockData';
import { useNavigate } from 'react-router-dom';

const ExpensiveProducts = () => {
  const navigate = useNavigate();
  const expensiveProducts = productsMockData;

  const handleMoreButtonClick = () => {
    navigate('/catalog');
  };
  return (
    <Section
      title="Работы от 500 тысяч ₽ "
      showMoreButton
      moreButtonText="Смотреть больше вариантов"
      onMoreButtonClick={handleMoreButtonClick}
    >
      <ProductContainer columnsNumber={4}>
        {expensiveProducts.slice(0, 8).map((item) => (
          <ProductCard item={item} key={item.productId} />
        ))}
      </ProductContainer>
    </Section>
  );
};

export default ExpensiveProducts;
