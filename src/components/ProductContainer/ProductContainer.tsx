import { distributeProductsToColumns } from 'src/utils/utils';
import styles from './ProductContainer.module.scss';
import { ReactNode } from 'react';

interface IProductContainerProps {
  children?: ReactNode[];
  columnsNumber: number;
}

/**
 * Container component for product cards
 * @component
 * @property {number} columnsNumber - number of container columns.
 * @property {ReactNode} children - array of products
 * @returns {JSX.Element} Product container
 */
const ProductContainer = (props: IProductContainerProps) => {
  const { children, columnsNumber } = props;

  const distrubutedProducts = distributeProductsToColumns(
    children,
    columnsNumber
  );

  return (
    <div className={styles.productContainer}>
      {distrubutedProducts.map((columnItems, i) => (
        <ul className={styles.productContainer__column} key={i}>
          {columnItems}
        </ul>
      ))}
    </div>
  );
};

export default ProductContainer;
