export interface IArtistType {
  artistId: number;
  lastnameArtist: string;
  nameArtist: string;
  shortDescription: string;
  yearOfBirth: string;
  photo: string;
  personalStyle: TArtStyleType;
}

type TProductOrientalType = 'вертикальная' | 'горизонтальная' | 'квадратная';

export interface IProductType {
  productId: number;
  titleArt: string;
  orientalProduct: TProductOrientalType;
  artist: IArtistType;
  estimatedPrice: number;
  forecastPrice: number;
  photoProduct: string[];
}

export type TArtStyleType =
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

export type TSubscribtionPeriodType = 1 | 6 | 12;

export interface ISubscriptionType {
  subscriptionId: number;
  price: number;
  period: TSubscribtionPeriodType;
}

interface ICustomerSubscriptionType {
  subsPeriod: ISubscriptionType;
  autoSubs: boolean;
  subsDateOn: string;
}

type TUserRoleType = 'customer' | 'seller';

export interface ICustomerType {
  userId: number;
  userRole: TUserRoleType;
  name: string;
  lastName: string;
  surname: string;
  email: string;
  phone: string;
  preferStyle: TArtStyleType;
  preferCategory: TProductCategoryType;
  favoriteProducts: IProductType[];
  favoriteArtist: IArtistType[];
  subscription: ICustomerSubscriptionType | null | undefined;
  orders: IOrderType[];
}

export interface ISellerType {
  userId: number;
  userRole: TUserRoleType;
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
