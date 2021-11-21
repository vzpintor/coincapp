import {IStateType} from '@shared/interfaces/state/IStateType';
import {IAsset} from '@shared/assetInterface';

export interface IAssetState {
  assetsList: IStateType<Array<IAsset>>;
  readyState: boolean;
}
