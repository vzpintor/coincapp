import {IStateType} from '@shared/interfaces/state/IStateType';
import {IAsset} from '@shared/assetInterface';

export interface IAssetState {
  assets: IStateType<Array<IAsset>>;
}
