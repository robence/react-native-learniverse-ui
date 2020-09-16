import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { HomeNavigator } from './src/navigation/';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <HomeNavigator />
    </NavigationContainer>
  );
}
