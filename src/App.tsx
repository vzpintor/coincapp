import '@utils/ignore-warnings';
import 'react-native-gesture-handler';
import * as storage from '@utils/storage';
import React from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {
  navigationRef,
  useBackButtonHandler,
  useNavigationPersistence,
} from '@navigation/NavigationUtilities';
import {canExit, RootNavigator} from '@navigation/RootNavigator';
import {persistor, rootStore} from '@redux/rootStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

const App = () => {
  useBackButtonHandler(navigationRef, canExit);

  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  if (!rootStore || !isNavigationStateRestored) {
    return null;
  }

  return (
    <Provider store={rootStore}>
      <PersistGate persistor={persistor} loading={null}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <RootNavigator
            initialState={initialNavigationState}
            onStateChange={onNavigationStateChange}
          />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
