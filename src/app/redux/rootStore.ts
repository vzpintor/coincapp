import {persistReducer, persistStore} from 'redux-persist';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '@redux/reducers/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IRootState} from '@shared/state/IRootState';

const ROOT_STATE_STORAGE_KEY = 'root';

const persistConfig = {
  key: ROOT_STATE_STORAGE_KEY,
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [''],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [''],
};

// Middleware: Redux Persist Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [thunk];

const composeEnhancers =
  // @ts-ignore
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// if (__DEV__) {
//   const createDebugger = require('redux-flipper').default;
//   middleware.push(createDebugger());
// }

const enhancer = composeEnhancers(applyMiddleware(...middleware));

// @ts-ignore
const rootStore = createStore<IRootState>(persistedReducer, enhancer);

const persistor = persistStore(rootStore);

export {rootStore, persistor};
