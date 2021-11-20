import {useState, useEffect, useRef, RefObject} from 'react';
import {BackHandler, DeviceEventEmitter} from 'react-native';
import {
  createNavigationContainerRef,
  NavigationAction,
  NavigationContainerRef,
  NavigationState,
  PartialState,
} from '@react-navigation/native';

export const RootNavigation = {
  navigate(_name: string, _params?: any) {},
  goBack() {},
  resetRoot(_state?: PartialState<NavigationState> | NavigationState) {},
  getRootState(): NavigationState {
    return {} as any;
  },
  dispatch(_action: NavigationAction) {},
};

export const navigationRef = createNavigationContainerRef();

// @ts-ignore
export function getActiveRouteName(
  state: NavigationState | PartialState<NavigationState>,
) {
  // @ts-ignore
  const route = state.routes[state.index];

  if (!route.state) {
    return route.name;
  }

  // Recursive call to deal with nested routers
  return getActiveRouteName(route.state);
}

export function useBackButtonHandler(
  ref: RefObject<NavigationContainerRef<any>>,
  canExit: (routeName: string) => boolean,
) {
  const [backPressSubscriptions] = useState(new Set());
  const canExitRef = useRef(canExit);

  useEffect(() => {
    canExitRef.current = canExit;
  }, [canExit]);

  useEffect(() => {
    const handleBackPress = () => {
      const navigation = ref.current;

      if (navigation == null) {
        return false;
      }

      const routeName = getActiveRouteName(navigation.getRootState());

      if (canExitRef.current(routeName)) {
        return false;
      }

      if (navigation.canGoBack()) {
        navigation.goBack();
        return true;
      }

      return false;
    };

    DeviceEventEmitter.removeAllListeners('hardwareBackPress');
    DeviceEventEmitter.addListener('hardwareBackPress', () => {
      let invokeDefault = true;
      const subscriptions: (() => any)[] = [];

      backPressSubscriptions.forEach((sub: any) => subscriptions.push(sub));

      for (let i = 0; i < subscriptions.reverse().length; i += 1) {
        if (subscriptions[i]()) {
          invokeDefault = false;
          break;
        }
      }

      if (invokeDefault) {
        BackHandler.exitApp();
      }
    });

    backPressSubscriptions.add(handleBackPress);

    return () => {
      DeviceEventEmitter.removeAllListeners('hardwareBackPress');
      backPressSubscriptions.clear();
    };
  }, [ref]);
}

export function useNavigationPersistence(storage: any, persistenceKey: string) {
  const [initialNavigationState, setInitialNavigationState] = useState();

  const [isRestored, setIsRestored] = useState(!__DEV__);

  const routeNameRef = useRef<string | undefined>();

  const onNavigationStateChange = (state: any) => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = getActiveRouteName(state);

    if (previousRouteName !== currentRouteName) {
      // track screens.
    }

    routeNameRef.current = currentRouteName;
  };

  const restoreState = async () => {
    try {
      const state = await storage.load(persistenceKey);
      if (state) {
        setInitialNavigationState(state);
      }
    } finally {
      setIsRestored(true);
    }
  };

  useEffect(() => {
    if (!isRestored) restoreState();
  }, [isRestored]);

  return {
    onNavigationStateChange,
    restoreState,
    isRestored,
    initialNavigationState,
  };
}

export function navigate(name: any, params?: any) {
  if (navigationRef.isReady()) {
    // @ts-ignore
    navigationRef.navigate(name as never, params as never);
  }
}

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

export function resetRoot(params = {index: 0, routes: []}) {
  if (navigationRef.isReady()) {
    navigationRef.resetRoot(params);
  }
}
