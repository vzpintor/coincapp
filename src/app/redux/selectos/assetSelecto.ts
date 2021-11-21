import {IRootState} from '@shared/state/IRootState';

export const assetState = (state: IRootState) => state.assets.assetsList;

export const statusState = (state: IRootState) => state.assets.readyState;
