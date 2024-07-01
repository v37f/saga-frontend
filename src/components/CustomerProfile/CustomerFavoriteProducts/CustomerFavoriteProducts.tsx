import { useAppSelector } from 'src/service/hooks';
import styles from './CustomerFavoriteProducts.module.scss';
import ProductContainer from 'src/components/ProductContainer/ProductContainer';
import ProductCard from 'src/components/ProductContainer/ProductCard/ProductCard';
import SolidButton from 'src/ui/buttons/SolidButton/SolidButton';
import { useNavigate } from 'react-router-dom';
import { CATALOG_ROUTE } from 'src/utils/constants';
import { getFavoriteProductsData } from 'src/service/slices/productsSlice';

const CustomerFavoriteProducts = () => {
  const favoriteProducts = useAppSelector(getFavoriteProductsData);
  const navigate = useNavigate();

  return (
    <div className={styles.customerFavoriteProducts}>
      <h3 className={styles.title}>Избранные лоты</h3>
      {favoriteProducts?.length === 0 ? (
        <div className={styles.noProducts}>
          <p className={styles.text}>Пока здесь пусто</p>
          <div className={styles.button}>
            <SolidButton onClick={() => navigate(CATALOG_ROUTE)}>
              Перейти в каталог
            </SolidButton>
          </div>
        </div>
      ) : (
        <ProductContainer columnsNumber={3}>
          {favoriteProducts?.map((item) => (
            <ProductCard item={item} key={item.productId} />
          ))}
        </ProductContainer>
      )}
    </div>
  );
};

export default CustomerFavoriteProducts;
