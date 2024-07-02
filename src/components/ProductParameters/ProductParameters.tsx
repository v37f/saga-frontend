import { IProductType } from 'src/utils/types';
import styles from './ProductParameters.module.scss';

interface IProductParametersPropsType {
  item: IProductType;
}

const ProductParameters = ({ item }: IProductParametersPropsType) => {
  return (
    <ul className={styles.productParameters}>
      <li className={styles.parameter}>
        <h4 className={styles.key}>Год создания</h4>
        <p className={styles.value}>{item.yearOfCreation}</p>
      </li>
      <li className={styles.parameter}>
        <h4 className={styles.key}>Размер</h4>
        <p className={styles.value}>{`${item.widthCm}x${item.heightCm} см`}</p>
      </li>
      <li className={styles.parameter}>
        <h4 className={styles.key}>Категория</h4>
        <p className={styles.value}>{item.categoryArt}</p>
      </li>
      <li className={styles.parameter}>
        <h4 className={styles.key}>Стиль</h4>
        <p className={styles.value}>{item.styleArt}</p>
      </li>
      <li className={styles.parameter}>
        <h4 className={styles.key}>Техника</h4>
        <p className={styles.value}>{item.artMaterial}</p>
      </li>
      <li className={styles.parameter}>
        <h4 className={styles.key}>Город</h4>
        <p className={styles.value}>Москва</p>
      </li>
      <li className={styles.parameter}>
        <h4 className={styles.key}>Оформление</h4>
        <p className={styles.value}>Подрамник</p>
      </li>
      <li className={styles.parameter}>
        <h4 className={styles.key}>Уникальность работы</h4>
        <p className={styles.value}>Уникальная</p>
      </li>
    </ul>
  );
};

export default ProductParameters;
