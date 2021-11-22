import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/Home';
import DetailScreen from '@screens/Detail';
import {IAsset} from '@shared/assetInterface';

interface DetailScreenParams {
  asset: IAsset;
}

export type PrimaryParamList = {
  Home: undefined;
  Detail: DetailScreenParams;
};

const Stack = createStackNavigator<PrimaryParamList>();

const PrimaryNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default PrimaryNavigation;
