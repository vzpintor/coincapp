import {IStateType} from '@shared/interfaces/state/IStateType';
import {IAsset, IHistory, IPrice} from '@shared/assetInterface';

export interface IAssetState {
  assetsList: IStateType<Array<IAsset>>;
  readyState: boolean;
  prices: IPrice | null;
  history: IStateType<Array<IHistory>>;
}
