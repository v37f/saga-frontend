import styles from './PriceAnalyticsResult.module.scss';
import PriceAnalyticsResultCard from './PriceAnalyticsResultCard/PriceAnalyticsResultCard';
import { IAuctionResultType } from 'src/utils/types';
interface IPriceAnalyticsResultProps {
  items: IAuctionResultType[];
  onGetSubClick: () => void;
}

const PriceAnalyticsResult = ({
  items,
  onGetSubClick,
}: IPriceAnalyticsResultProps) => {
  return (
    <section className={styles.priceAnalyticsResult}>
      <h3 className={styles.title}>Результаты поиска</h3>
      <p className={styles.count}>{`Найдено: ${items.length}`}</p>
      <ul className={styles.list}>
        {items.map((item) => (
          <PriceAnalyticsResultCard
            item={item}
            key={item.auctionResultId}
            onGetSubClick={onGetSubClick}
          />
        ))}
      </ul>
    </section>
  );
};

export default PriceAnalyticsResult;
