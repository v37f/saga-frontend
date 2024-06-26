interface IArtistType {
  artistId: number;
  lastnameArtist: string;
  nameArtist: string;
}

type TProductOrientalType = 'вертикальная' | 'горизонтальная' | 'квадратная';

export interface IProductType {
  productId: number;
  titleArt: string;
  orientalProduct: TProductOrientalType;
  artist: IArtistType;
  priceSale: number;
  forecastPrice: number;
  photoProduct: string[];
}

export type TProductStyleType =
  | 'Абстракция'
  | 'Интерьерное искусство'
  | 'Концептуальное искусство'
  | 'Минимализм'
  | 'Фигуративное искусство'
  | 'Экспрессионизм'
  | 'Pop Art'
  | 'Street Art';

export type TProductCategoryType =
  | 'Живопись'
  | 'Графика'
  | 'Фотография'
  | 'Digital';

type TSubscribtionPeiodType = 1 | 6 | 12;

type TSubscribtionStatusType = 'active' | 'inactive';

interface ISubscriptionType {
  subscriptionId: number;
  subsPeriod: TSubscribtionPeiodType;
  autoSubs: boolean;
  subsDateOn: string;
  subsStatus: TSubscribtionStatusType;
}

export interface ICustomerType {
  userId: number;
  userRole: 'customer';
  name: string;
  lastName: string;
  surname: string;
  email: string;
  phone: string;
  preferStyle: TProductStyleType;
  preferCategory: TProductCategoryType;
  favoriteProducts: IProductType[];
  favoriteArtist: IArtistType[];
  subscription: ISubscriptionType | null | undefined;
  orders: IOrderType[];
}

export interface ISellerType {
  userId: number;
  userRole: 'seller';
  name: string;
  lastName: string;
  surname: string;
  email: string;
  phone: string;
  products: IProductType[];
  orders: IOrderType[];
}

export type ICurrentUserType = ICustomerType | ISellerType;

interface IOrderAddressType {
  postIndex: number;
  region: string;
  city: string;
  street: string;
  houseNumber: string;
  apartmentNumber: string;
  additionalDeliveryInformation: string;
}

type TPaymentMathodType = 'банковская карта';

type TDeliveryMathodType = 'курьерская доставка' | 'самовывоз';

export interface IOrderType {
  orderId: number;
  userId: number;
  orderProducts: IProductType[];
  totalPrice: number;
  address: IOrderAddressType;
  paymentMethod: TPaymentMathodType;
  deliveryMethod: TDeliveryMathodType;
  insurance: boolean;
  insuranceCost: number;
}

export interface IBannerItemType {
  bannerId: number;
  src: string;
  title: string;
}
