import {Dispatch} from 'redux';
import {loadAssetsActionCreator} from '@redux/actions/asset/assetCreator';
import {IAsset} from '@shared/assetInterface';

export const requestAssets = () => async (dispatch: Dispatch) => {
  dispatch(loadAssetsActionCreator.request(true));

  try {
    return dispatch(loadAssetsActionCreator.success<Array<IAsset>>([]));
  } catch (e) {
    return dispatch(
      loadAssetsActionCreator.error<string>(
        'Ocurrio un error al intentar recuperar los assets.',
      ),
    );
  }
};
