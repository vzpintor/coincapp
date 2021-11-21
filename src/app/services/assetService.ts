import {AxiosResponse} from 'axios';
import {IAssetResponse} from '@shared/assetInterface';
import instance from '@services/config/axios-config';

const {api} = require('@environment/env');

export const getAllAssets = (): Promise<AxiosResponse<IAssetResponse>> => {
  return instance.get<IAssetResponse>(api.assets).then(assets => {
    assets.data.data.forEach(asset => {
      asset.logo = `${api.baseLogoUrl}${asset.symbol.toLowerCase()}@2x.png`;
    });

    return assets;
  });
};
