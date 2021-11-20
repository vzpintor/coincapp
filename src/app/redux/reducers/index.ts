import {combineReducers} from 'redux';
import assetsReducer from '@redux/reducers/assetsReducer';

const reducers = combineReducers({
  assets: assetsReducer,
});

export default reducers;
