import {IAssetState} from '@shared/state/IAssetState';
import {GenericActionRequest} from '@redux/actions/genericAction';
import {assetTypes} from '@redux/actions/asset/assetTypes';

const initialState: IAssetState = {
  assetsList: {
    isLoading: false,
    data: [],
    error: null,
  },
};

const assetsReducer = (
  state = initialState,
  action: GenericActionRequest<assetTypes>,
): IAssetState => {
  switch (action.type) {
    case 'GET_ASSETS':
      return {
        ...state,
        assetsList: action.payload,
      };
    default:
      return state;
  }
};

export default assetsReducer;
