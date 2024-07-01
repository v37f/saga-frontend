import { useNavigate, useParams } from 'react-router-dom';
import styles from './ProductPage.module.scss';
import { useAppDispatch, useAppSelector } from 'src/service/hooks';
import {
  addToFavoriteProducts,
  fetchCurrentProduct,
  getAllProductsData,
  getCurrentProductData,
  getCurrentProductLoadFailed,
  getCurrentProductLoadFailedMessage,
  getFavoriteProductsData,
  removeFromFavoriteProducts,
} from 'src/service/slices/productsSlice';
import LikeButton from 'src/ui/buttons/LikeButton/LikeButton';
import { getIsLoggedIn } from 'src/service/slices/currentUserSlice';
import { useEffect, useState } from 'react';
import SolidButton from 'src/ui/buttons/SolidButton/SolidButton';
import CartIcon from 'src/assets/images/components/cart.svg';
import ArtistCard from 'src/components/ArtistCard/ArtistCard';
import ProductParameters from 'src/components/ProductParameters/ProductParameters';
import ProductFeatures from 'src/components/ProductFeatures/ProductFeatures';
import Section from 'src/components/Section/Section';
import { IProductType } from 'src/utils/types';
import ProductContainer from 'src/components/ProductContainer/ProductContainer';
import ProductCard from 'src/components/ProductContainer/ProductCard/ProductCard';
import {
  CATALOG_ROUTE,
  MAIN_SECTION_PRODUCTS_NUMBER,
} from 'src/utils/constants';
import { filterProductsByParameters } from 'src/utils/utils';

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const product = useAppSelector(getCurrentProductData);
  const favoriteProducts = useAppSelector(getFavoriteProductsData);
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const isLoadingFailed = useAppSelector(getCurrentProductLoadFailed);
  const failedMessage = useAppSelector(getCurrentProductLoadFailedMessage);
  const allProducts = useAppSelector(getAllProductsData);
  const [anotherArtistProducts, setAnotherArtistProducts] = useState<
    IProductType[]
  >([]);
  const [similarProducts, setSimilarProducts] = useState<IProductType[]>([]);

  useEffect(() => {
    dispatch(fetchCurrentProduct(Number(id)));
    // disable eslint because we only need fetch current product data once when page open
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAnotherArtistProducts(
      allProducts.filter(
        (item) =>
          item.artist.artistId === product.artist.artistId &&
          item.productId !== product.productId
      )
    );
    setSimilarProducts(
      filterProductsByParameters(
        allProducts,
        [product.categoryArt],
        [product.styleArt],
        [],
        [],
        [],
        ''
      ).filter((item) => item.productId !== product.productId)
    );
  }, [product, allProducts]);

  const isLiked = favoriteProducts?.some(
    (item) => item.productId === product.productId
  );

  return (
    <main className={styles.productPage}>
      {isLoadingFailed ? (
        <section className={styles.notFound}>
          <p className={styles.notFoundText}>{failedMessage}</p>
          <div className={styles.notFoundButton}>
            <SolidButton onClick={() => navigate(CATALOG_ROUTE)}>
              Вернуться в каталог
            </SolidButton>
          </div>
        </section>
      ) : (
        <>
          <section className={styles.header}>
            <img className={styles.image} src={product?.photoProduct[0]} />
            <div className={styles.summary}>
              <div className={styles.titles}>
                <div className={styles.topLine}>
                  <h2
                    className={styles.artTitle}
                    title={product?.titleArt}
                    aria-label={product?.titleArt}
                  >
                    {product?.titleArt}
                  </h2>
                  {isLoggedIn && (
                    <LikeButton
                      isActive={isLiked}
                      onClick={
                        isLiked
                          ? () => dispatch(removeFromFavoriteProducts(product))
                          : () => dispatch(addToFavoriteProducts(product))
                      }
                    />
                  )}
                </div>
                <p
                  className={styles.artistName}
                  title={`${product.artist.nameArtist} ${product.artist.lastnameArtist}`}
                  aria-label={`${product.artist.nameArtist} ${product.artist.lastnameArtist}`}
                >{`${product.artist.nameArtist} ${product.artist.lastnameArtist}`}</p>
              </div>
              <div className={styles.purchase}>
                <p
                  className={styles.price}
                >{`${product.estimatedPrice.toLocaleString()} ₽`}</p>
                <SolidButton>
                  <CartIcon />
                  Добавить в коризну
                </SolidButton>
              </div>
            </div>
          </section>
          <section className={styles.info}>
            <div className={`${styles.column} ${styles.about}`}>
              <h3 className={styles.columnTitle}>О работе</h3>
              <ProductParameters item={product} />
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Художник</h3>
              <ArtistCard item={product.artist} />
            </div>
          </section>
          <section className={styles.description}>
            <h4 className={styles.descriptionTitle}>Описание</h4>
            <p className={styles.descriptionText}>
              «Звёздная ночь» — одна из наиболее известных картин нидерландского
              художника-постимпрессиониста Винсента Ван Гога. Представляет вид
              из восточного окна спальни Ван Гога в Сен-Реми-де-Прованс на
              предрассветное небо и вымышленную деревню. Картина написана в июне
              1889 года; с 1941 года хранится в Музее современного искусства в
              Нью-Йорке. По мнению известного астрофизика Нила Тайсона - это
              первая картина, на которой небо является главным предметом
              изображения.
            </p>
          </section>
          <ProductFeatures />
          <Section title="Другие работы художника" noSidePadding>
            <ProductContainer columnsNumber={4}>
              {anotherArtistProducts
                .slice(0, MAIN_SECTION_PRODUCTS_NUMBER)
                .map((item) => (
                  <ProductCard item={item} key={item.productId} />
                ))}
            </ProductContainer>
          </Section>
          <Section title="Похожие работы" noSidePadding>
            <ProductContainer columnsNumber={4}>
              {similarProducts
                .slice(0, MAIN_SECTION_PRODUCTS_NUMBER)
                .map((item) => (
                  <ProductCard item={item} key={item.productId} />
                ))}
            </ProductContainer>
          </Section>
        </>
      )}
    </main>
  );
};

export default ProductPage;
