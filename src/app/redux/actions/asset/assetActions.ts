import {Dispatch} from 'redux';
import {loadAssetsActionCreator} from '@redux/actions/asset/assetCreator';
import {IAsset, IPrice} from '@shared/assetInterface';
import {getAllAssets} from '@services/assetService';
import {GenericAction} from '@redux/actions/genericAction';
import {IAssetTypes} from '@redux/actions/asset/assetTypes';

export const readyState = (
  ready: boolean,
): GenericAction<IAssetTypes, boolean> => ({
  type: 'READY_STATE',
  payload: ready,
});

export const updateAssets = (
  assets: Array<IAsset>,
): GenericAction<IAssetTypes, Array<IAsset>> => ({
  type: 'UPDATE_ASSETS',
  payload: assets,
});

export const requestAssets = () => async (dispatch: Dispatch) => {
  dispatch(loadAssetsActionCreator.request(true));

  try {
    const response = await getAllAssets();

    dispatch(
      loadAssetsActionCreator.success<Array<IAsset>>(response.data.data),
    );

    return dispatch(readyState(true));
  } catch (e) {
    return dispatch(
      loadAssetsActionCreator.error<string>(
        'Ocurrio un error al intentar recuperar los assets.',
      ),
    );
  }
};
