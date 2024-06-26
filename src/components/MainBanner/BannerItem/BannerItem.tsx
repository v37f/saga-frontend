import { IBannerItemType } from 'src/utils/types';
import styles from './BannerItem.module.scss';

type TBannerItemPropsType = {
  item?: IBannerItemType;
};

const BannerItem = (props: TBannerItemPropsType) => {
  const { item } = props;
  return (
    <img className={styles.bannerItem} src={item?.src} alt={item?.title} />
  );
};

export default BannerItem;
