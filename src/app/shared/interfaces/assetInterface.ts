export interface IAssetResponse {
  data: Array<IAsset>;
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
