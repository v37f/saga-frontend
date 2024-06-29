import { productsMockData } from './productsMockData';
import { IAuctionResultType } from '../types';

export const auctionsMockData: IAuctionResultType[] = [
  {
    auctionResultId: 1,
    product: productsMockData[0],
    auctionDate: '10.07.2020',
    auctionHouse: `Sotheby's`,
    lotNumber: 32,
    sellingPrice: 300000,
  },
  {
    auctionResultId: 2,
    product: productsMockData[0],
    auctionDate: '21.12.2012',
    auctionHouse: `Christie's`,
    lotNumber: 8,
    sellingPrice: 250000,
  },
  {
    auctionResultId: 3,
    product: productsMockData[1],
    auctionDate: '01.02.2003',
    auctionHouse: `Bonhams`,
    lotNumber: 32,
    sellingPrice: 300000,
  },
  {
    auctionResultId: 4,
    product: productsMockData[4],
    auctionDate: '11.12.2005',
    auctionHouse: `Bonhams`,
    lotNumber: 2,
    sellingPrice: 3000000,
  },
  {
    auctionResultId: 5,
    product: productsMockData[4],
    auctionDate: '05.10.2007',
    auctionHouse: `Sotheby's`,
    lotNumber: 206,
    sellingPrice: 3500000,
  },
  {
    auctionResultId: 6,
    product: productsMockData[4],
    auctionDate: '13.8.2012',
    auctionHouse: `Christie's`,
    lotNumber: 146,
    sellingPrice: 5500000,
  },
];
