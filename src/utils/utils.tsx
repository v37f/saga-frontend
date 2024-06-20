/**
 * Splits a single product array into several product arrays for each column
 * @param products initial products array, array elements must be ReactNode
 * @param columnsNumber number of columns
 * @returns an array containing arrays of products(ReactNodes) for each column
 */

export const distributeProductsToColumns = (
  products: React.ReactNode[],
  columnsNumber: number
) => {
  const distrubutedProducts: React.ReactNode[][] = [];
  for (let i = 0; i < columnsNumber; i++) {
    distrubutedProducts.push([]);
  }

  products.forEach((product, index) => {
    for (let i = 0; i < columnsNumber; i++) {
      if (!((index + columnsNumber - i) % columnsNumber)) {
        distrubutedProducts[i].push(product);
      }
    }
  });
  return distrubutedProducts;
};
