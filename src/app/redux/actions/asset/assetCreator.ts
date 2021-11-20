import {generateAsyncActionCreator} from '@redux/config';
import {assetTypes} from '@redux/actions/asset/assetTypes';

export const loadAssetsActionCreator =
  generateAsyncActionCreator<assetTypes>('GET_ASSETS');
