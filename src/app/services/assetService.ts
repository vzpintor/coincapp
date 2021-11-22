import {AxiosResponse} from 'axios';
import {
  IAsset,
  IAssetBaseResponse,
  IHistory,
  intervalType,
} from '@shared/assetInterface';
import instance from '@services/config/axios-config';

const {api} = require('@environment/env');

export const getAllAssets = (): Promise<
  AxiosResponse<IAssetBaseResponse<Array<IAsset>>>
> => {
  return instance
    .get<IAssetBaseResponse<Array<IAsset>>>(api.assets)
    .then(assets => {
      assets.data.data.forEach(asset => {
        asset.logo = `${api.baseLogoUrl}${asset.symbol.toLowerCase()}@2x.png`;
      });

      return assets;
    });
};

export const getHistory = (
  interval: intervalType,
  assetId: string,
): Promise<AxiosResponse<IAssetBaseResponse<Array<IHistory>>>> => {
  return instance.get<IAssetBaseResponse<Array<IHistory>>>(
    api.history.replace('{assetId}', assetId),
    {
      params: {interval},
    },
  );
};
