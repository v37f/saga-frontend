import { useAppSelector } from 'src/service/hooks';
import styles from './AboutTab.module.scss';
import { getCurrentArtistData } from 'src/service/slices/artistsSlice';
import { getAllProductsData } from 'src/service/slices/productsSlice';
import { useEffect, useState } from 'react';
import { IProductType } from 'src/utils/types';
import { getAverageCostOfProducts } from 'src/utils/utils';
import { artistCollectionsMockData } from 'src/utils/mock/artistsMockData';

const AboutTab = () => {
  const allProducts = useAppSelector(getAllProductsData);
  const artist = useAppSelector(getCurrentArtistData);
  const [artistProducts, setArtistProducts] = useState<IProductType[]>([]);

  useEffect(() => {
    setArtistProducts(
      allProducts.filter((item) => item.artist.artistId === artist.artistId)
    );
  }, [artist, allProducts]);

  return (
    <div className={styles.aboutTab}>
      <ul className={styles.info}>
        <li className={styles.item}>
          <h5 className={styles.key}>Город рождения</h5>
          <p className={styles.value}>Зюндерт, Северный Брабант, Нидерланды</p>
        </li>
        <li className={styles.item}>
          <h5 className={styles.key}>Город проживания</h5>
          <p className={styles.value}>Париж, Франция</p>
        </li>
        <li className={styles.item}>
          <h5 className={styles.key}>Образование</h5>
          <p className={styles.value}>
            Колледж Виллема II, Тилбург, Нидерланды (не окончено)
          </p>
        </li>
        <li className={styles.item}>
          <h5 className={styles.key}>Художественное образование</h5>
          <p className={styles.value}>
            Королевская академия изящных искусств, Брюссель, Бельгия (не
            окончено)
          </p>
        </li>
        <li className={styles.item}>
          <h5 className={styles.key}>Опыт преподавания</h5>
          <p className={styles.value}>отсутствует</p>
        </li>
        <li className={styles.item}>
          <h5 className={styles.key}>Персональный стиль</h5>
          <p className={styles.value}>{artist.personalStyle}</p>
        </li>
        <li className={styles.item}>
          <h5 className={styles.key}>Средняя стоимость работы</h5>
          <p className={styles.value}>
            {artistProducts.length > 0
              ? `${getAverageCostOfProducts(artistProducts).toLocaleString()} ₽`
              : 'Нет данных'}
          </p>
        </li>
      </ul>
      <div className={styles.collections}>
        <h3 className={styles.title}>
          Работы автора включены в следующие музейные коллекции
        </h3>
        <ul className={styles.collectionsList}>
          {artistCollectionsMockData.map((item) => (
            <li className={styles.collection} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutTab;
