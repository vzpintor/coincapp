import {Dispatch} from 'redux';
import {
  historyAssetActionCreator,
  loadAssetsActionCreator,
} from '@redux/actions/asset/assetCreator';
import {IAsset, IHistory, intervalType} from '@shared/assetInterface';
import {getAllAssets, getHistory} from '@services/assetService';
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

    dispatch(readyState(true));
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

export const requestAssetHistory =
  (interval: intervalType, assetId: string) => async (dispatch: Dispatch) => {
    dispatch(historyAssetActionCreator.request(true));

    try {
      const response = await getHistory(interval, assetId);

      return dispatch(
        historyAssetActionCreator.success<Array<IHistory>>(response.data.data),
      );
    } catch (e) {
      return dispatch(
        historyAssetActionCreator.error<string>(
          `Ocurrio un error al intentar recuperar el historio para ${assetId}`,
        ),
      );
    }
  };
