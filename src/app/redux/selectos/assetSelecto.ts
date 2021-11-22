import {IRootState} from '@shared/state/IRootState';
import {IAsset} from '@shared/assetInterface';

export const assetState = (state: IRootState) => state.assets.assetsList;

export const assetQueryState = (state: IRootState) => (assetId: string) =>
  state.assets.assetsList.data?.filter((asset: IAsset) =>
    asset.id.toLowerCase().includes(assetId.toLowerCase()),
  );

export const findAsset = (state: IRootState) => (assetId: string) =>
  state.assets.assetsList.data?.find(
    (asset: IAsset) => asset.id === assetId,
  ) as IAsset;

export const statusState = (state: IRootState) => state.assets.readyState;
