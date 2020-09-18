import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { HomeNavigator } from './src/navigation/';
import { AppLoading } from 'expo';
import {
  useFonts,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
} from '@expo-google-fonts/work-sans';

export default function App() {
  let [fontsLoaded] = useFonts({
    WorkSans_600SemiBold,
    WorkSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <HomeNavigator />
    </NavigationContainer>
  );
}
