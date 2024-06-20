interface IArtistType {
  artistId: number;
  lastnameArtist: string;
  nameArtist: string;
}

export interface IProductType {
  productId: number;
  titleArt: string;
  orientalProduct: 'вертикальная' | 'горизонтальная' | 'квадратная';
  artist: IArtistType;
  priceSale: number;
  forecastPrice: number;
  photoProduct: string[];
}
