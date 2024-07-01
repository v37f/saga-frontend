import {
  IProductType,
  TMinMaxFilterOption,
  TSubscribtionPeriodType,
} from 'src/utils/types';
/**
 * Splits a single product array into several product arrays for each column
 * @param products initial products array, array elements must be ReactNode
 * @param columnsNumber number of columns
 * @returns an array containing arrays of products(ReactNodes) for each column
 */
export const distributeProductsToColumns = (
  products: React.ReactNode[] | undefined,
  columnsNumber: number
) => {
  const distrubutedProducts: React.ReactNode[][] = [];
  for (let i = 0; i < columnsNumber; i++) {
    distrubutedProducts.push([]);
  }

  products?.forEach((product, index) => {
    for (let i = 0; i < columnsNumber; i++) {
      if (!((index + columnsNumber - i) % columnsNumber)) {
        distrubutedProducts[i].push(product);
      }
    }
  });
  return distrubutedProducts;
};

export const getPeriodWord = (value: TSubscribtionPeriodType = 1) => {
  switch (value) {
    case 12:
      return '1 год';
    case 6:
      return '6 месяцев';
    case 1:
    default:
      return '1 месяц';
  }
};

export const searchProductsByKeyword = (
  array: IProductType[],
  keyword: string
) => {
  return array.filter((item) => filterProductByKeyword(item, keyword));
};

export const filterProductByKeyword = (
  product: IProductType,
  keyword: string
) => {
  keyword = keyword.trim().toLowerCase();
  return (
    product.titleArt.toLowerCase().includes(keyword) ||
    product.artist.lastnameArtist
      .concat(
        ' ',
        product.artist.nameArtist,
        ' ',
        product.artist.lastnameArtist
      )
      .toLowerCase()
      .includes(keyword)
  );
};

export const filterByCategory = (
  array: IProductType[],
  categorys: string[]
) => {
  if (categorys.length === 0) {
    return array;
  } else {
    let filteredByCategory: IProductType[] = [];
    categorys.forEach((category) => {
      filteredByCategory = filteredByCategory.concat(
        array.filter((item) => item.categoryArt === category)
      );
    });
    return filteredByCategory;
  }
};

export const filterProductsByParameters = (
  array: IProductType[],
  categorys: string[],
  styles: string[],
  orientations: string[],
  sizes: string[],
  prices: string[],
  keyword: string
) => {
  const filterByStyle = (array: IProductType[], styles: string[]) => {
    if (styles.length === 0) {
      return array;
    } else {
      let filteredByStyle: IProductType[] = [];
      styles.forEach((style) => {
        filteredByStyle = filteredByStyle.concat(
          array.filter((item) => item.styleArt === style)
        );
      });
      return filteredByStyle;
    }
  };

  const filterByOrientation = (
    array: IProductType[],
    orientations: string[]
  ) => {
    if (orientations.length === 0) {
      return array;
    } else {
      let filteredByOrientation: IProductType[] = [];
      orientations.forEach((orientation) => {
        filteredByOrientation = filteredByOrientation.concat(
          array.filter((item) => item.orientalProduct === orientation)
        );
      });
      return filteredByOrientation;
    }
  };

  const filterBySize = (array: IProductType[], sizes: string[]) => {
    if (sizes.length === 0) {
      return array;
    } else {
      let filteredBySize: IProductType[] = [];
      sizes.forEach((sizes) => {
        const parsedSizes: TMinMaxFilterOption = JSON.parse(sizes);
        filteredBySize = filteredBySize.concat(
          array.filter(
            (item) =>
              item.widthCm >= parsedSizes.min && item.widthCm <= parsedSizes.max
          )
        );
      });
      return filteredBySize;
    }
  };

  const filterByPrice = (array: IProductType[], prices: string[]) => {
    if (prices.length === 0) {
      return array;
    } else {
      let filteredByPrice: IProductType[] = [];
      prices.forEach((price) => {
        const parsedPrice: TMinMaxFilterOption = JSON.parse(price);
        filteredByPrice = filteredByPrice.concat(
          array.filter(
            (item) =>
              item.estimatedPrice >= parsedPrice.min &&
              item.estimatedPrice <= parsedPrice.max
          )
        );
      });
      return filteredByPrice;
    }
  };

  const filteredByCategory = filterByCategory(array, categorys);
  const filteredByStyle = filterByStyle(filteredByCategory, styles);
  const filteredByOrientation = filterByOrientation(
    filteredByStyle,
    orientations
  );
  const filteredBySize = filterBySize(filteredByOrientation, sizes);
  const filteredByPrice = filterByPrice(filteredBySize, prices);
  const result = searchProductsByKeyword(filteredByPrice, keyword);
  return result;
};

export const formatPhoneNumber = (phoneNumberString: string): string | null => {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  const match = cleaned.match(/^(7|)?(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    const intlCode = match[1] ? '+7 ' : '';
    return [
      intlCode,
      '',
      match[2],
      ' ',
      match[3],
      ' ',
      match[4],
      ' ',
      match[5],
    ].join('');
  }
  return null;
};
