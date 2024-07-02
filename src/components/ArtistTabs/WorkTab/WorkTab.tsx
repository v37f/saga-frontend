import ProductContainer from 'src/components/ProductContainer/ProductContainer';
import styles from './WorkTab.module.scss';
import ProductCard from 'src/components/ProductContainer/ProductCard/ProductCard';
import { getWorkWord } from 'src/utils/utils';
import { useEffect, useState } from 'react';
import { IProductType } from 'src/utils/types';
import { useAppSelector } from 'src/service/hooks';
import { getAllProductsData } from 'src/service/slices/productsSlice';
import { getCurrentArtistData } from 'src/service/slices/artistsSlice';

const WorkTab = () => {
  const allProducts = useAppSelector(getAllProductsData);
  const artist = useAppSelector(getCurrentArtistData);
  const [anotherArtistProducts, setAnotherArtistProducts] = useState<
    IProductType[]
  >([]);

  useEffect(() => {
    setAnotherArtistProducts(
      allProducts.filter((item) => item.artist.artistId === artist.artistId)
    );
  }, [artist, allProducts]);

  return (
    <div className={styles.workTab}>
      {anotherArtistProducts.length > 0 ? (
        <div className={styles.works}>
          <p className={styles.count}>{`${
            anotherArtistProducts.length
          } ${getWorkWord(anotherArtistProducts.length)}:`}</p>
          <ProductContainer columnsNumber={4}>
            {anotherArtistProducts.map((item) => (
              <ProductCard item={item} key={item.productId} />
            ))}
          </ProductContainer>
        </div>
      ) : (
        <p className={styles.count}>
          В данный момент в каталоге нет работ данного художника
        </p>
      )}
    </div>
  );
};

export default WorkTab;
