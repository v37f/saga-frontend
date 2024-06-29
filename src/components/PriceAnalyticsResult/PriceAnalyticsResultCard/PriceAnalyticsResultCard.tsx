import { IAuctionResultType } from 'src/utils/types';
import styles from './PriceAnalyticsResultCard.module.scss';
import { useAppSelector } from 'src/service/hooks';
import { getCurrentUserData } from 'src/service/slices/currentUserSlice';

interface IPriceAnalyticsResultCardProps {
  item: IAuctionResultType;
  onGetSubClick: () => void;
}

const PriceAnalyticsResultCard = ({
  item,
  onGetSubClick,
}: IPriceAnalyticsResultCardProps) => {
  const currentUser = useAppSelector(getCurrentUserData);
  return (
    <li className={styles.priceAnalyticsResultCard}>
      <img className={styles.photo} src={item.product.photoProduct[0]} />
      <div className={styles.description}>
        <div className={`${styles.column} ${styles.productInfo}`}>
          <h4 className={`${styles.heading} ${styles.title}`}>
            {item.product.titleArt}
          </h4>
          <p
            className={`${styles.text} ${styles.parameters}`}
          >{`${item.product.yearOfCreation} год. ${item.product.widthCm}x${item.product.heightCm} см. ${item.product.artMaterial}`}</p>
        </div>
        <div className={`${styles.column} ${styles.auctionInfo}`}>
          <h4 className={`${styles.heading} ${styles.date}`}>
            {item.auctionDate}
          </h4>
          <p className={`${styles.text} ${styles.auctionHouse}`}>
            {item.auctionHouse}
          </p>
          <p
            className={`${styles.text} ${styles.lotNumber}`}
          >{`Лот ${item.lotNumber}`}</p>
        </div>
        {currentUser.subscription ? (
          <p className={`${styles.heading} ${styles.price}`}>
            {`${item.sellingPrice?.toLocaleString()} ₽`}
          </p>
        ) : (
          <button
            className={`${styles.heading} ${styles.needSubscription}`}
            onClick={onGetSubClick}
          >
            Приобретите подписку чтобы увидеть цену
          </button>
        )}
      </div>
    </li>
  );
};

export default PriceAnalyticsResultCard;
