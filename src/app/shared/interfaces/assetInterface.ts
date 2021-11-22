export type intervalType =
  | 'm1'
  | 'm5'
  | 'm15'
  | 'm30'
  | 'h1'
  | 'h2'
  | 'h6'
  | 'h12'
  | 'd1';

export interface IAssetBaseResponse<T> {
  data: T;
}

export interface IPrice {
  [key: string]: string;
}

export interface IAsset {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
  logo: string;
  background: string;
}

export interface IHistory {
  priceUsd: string;
  time: number;
  date: Date;
}
