import Section from 'src/components/Section/Section';
import ProductContainer from 'src/components/ProductContainer/ProductContainer';
import ProductCard from 'src/components/ProductContainer/ProductCard/ProductCard';
import { productsMockData } from 'src/utils/mock/productsMockData';
import { useNavigate } from 'react-router-dom';

const CheapProducts = () => {
  const navigate = useNavigate();
  const cheapProducts = productsMockData;

  const handleMoreButtonClick = () => {
    navigate('/catalog');
  };
  return (
    <Section
      title="Работы до 20 тысяч ₽"
      showMoreButton
      moreButtonText="Смотреть больше вариантов"
      onMoreButtonClick={handleMoreButtonClick}
    >
      <ProductContainer columnsNumber={4}>
        {cheapProducts.slice(0, 8).map((item) => (
          <ProductCard item={item} key={item.productId} />
        ))}
      </ProductContainer>
    </Section>
  );
};

export default CheapProducts;
