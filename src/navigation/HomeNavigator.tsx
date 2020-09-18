import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DashboardScreen, HomeScreen } from '../screens';

export type RootStackParamList = {
  HomeScreen: undefined;
  DashboardScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" headerMode="none">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeNavigator} />
    </Drawer.Navigator>
  );
}
