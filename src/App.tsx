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

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

const App = () => {
  useBackButtonHandler(navigationRef, canExit);

  const {initialNavigationState, onNavigationStateChange} =
    useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <RootNavigator
        initialState={initialNavigationState}
        onStateChange={onNavigationStateChange}
      />
    </SafeAreaProvider>
  );
};

export default App;
