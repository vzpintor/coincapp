export interface IAssetTypes {
  GET_ASSETS: string;
  READY_STATE: string;
  UPDATE_ASSETS: string;
  ASSET_HISTORY: string;
}

export type assetTypes = keyof IAssetTypes;
