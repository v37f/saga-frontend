import styles from './ProductFeatures.module.scss';
import PenIcon from 'src/assets/images/components/pen.svg';
import StarIcon from 'src/assets/images/components/star.svg';
import MuseumIcon from 'src/assets/images/components/museum.svg';

const ProductFeatures = () => {
  return (
    <ul className={styles.productFeatures}>
      <li className={styles.feature}>
        <PenIcon />
        <h5 className={styles.title}>Авторская подпись</h5>
      </li>
      <li className={styles.feature}>
        <StarIcon />
        <div className={styles.container}>
          <h5 className={styles.title}>Выставки и проекты</h5>
          <p className={styles.text}>3 индивидуальные и групповые выставки</p>
        </div>
      </li>
      <li className={styles.feature}>
        <MuseumIcon />
        <h5 className={styles.title}>
          Работы этого художника находятся в 5 частных и музейных коллекциях
        </h5>
      </li>
    </ul>
  );
};

export default ProductFeatures;
