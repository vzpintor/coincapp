import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/Home';
import DetailScreen from '@screens/Detail';

export type PrimaryParamList = {
  Home: undefined;
  Detail: undefined;
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
