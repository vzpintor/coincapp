import {IStateType} from '@shared/interfaces/state/IStateType';
import {IAsset, IPrice} from '@shared/assetInterface';

export interface IAssetState {
  assetsList: IStateType<Array<IAsset>>;
  readyState: boolean;
  prices: IPrice | null;
}
