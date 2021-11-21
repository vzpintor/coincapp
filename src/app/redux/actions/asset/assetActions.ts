import {Dispatch} from 'redux';
import {loadAssetsActionCreator} from '@redux/actions/asset/assetCreator';
import {IAsset} from '@shared/assetInterface';
import {getAllAssets} from '@services/assetService';

export const requestAssets = () => async (dispatch: Dispatch) => {
  dispatch(loadAssetsActionCreator.request(true));

  try {
    const response = await getAllAssets();

    return dispatch(
      loadAssetsActionCreator.success<Array<IAsset>>(response.data.data),
    );
  } catch (e) {
    return dispatch(
      loadAssetsActionCreator.error<string>(
        'Ocurrio un error al intentar recuperar los assets.',
      ),
    );
  }
};
