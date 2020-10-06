import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import { CompositeNavigationProp } from '@react-navigation/native';

import Header from '../components/Header';
import { DashboardScreen, HomeScreen } from '../screens';

export type StackParamList = {
  HomeScreen: undefined;
  DashboardScreen: undefined;
};

export type DrawerParamList = {
  Home: undefined;
};

export type RootNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerParamList, 'Home'>,
  StackNavigationProp<StackParamList>
>;

const Stack = createStackNavigator<StackParamList>();

function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" headerMode="screen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{ header: () => <Header /> }}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeNavigator} />
    </Drawer.Navigator>
  );
}
