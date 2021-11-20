import {AxiosResponse} from 'axios';
import {IAsset} from '@shared/assetInterface';
import instance from '@services/config/axios-config';

const {api} = require('@environment/env');

export const getAllAssets = (): Promise<AxiosResponse<Array<IAsset>>> => {
  return instance.get<Array<IAsset>>(api.assets);
};
