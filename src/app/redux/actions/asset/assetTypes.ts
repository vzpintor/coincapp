export interface IAssetTypes {
  GET_ASSETS: string;
  READY_STATE: string;
}

export type assetTypes = keyof IAssetTypes;
