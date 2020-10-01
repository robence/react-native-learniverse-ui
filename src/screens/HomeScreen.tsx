import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Colors } from '../constants';
import type { RootStackParamList } from '../navigation/HomeNavigator';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: HomeProps) {
  const onTouch = () => {
    navigation.navigate('DashboardScreen');
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        onTouchEnd={onTouch}
      >
        <View style={styles.center}>
          <Text style={styles.title}>Welcome to Learniverse!</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.primary,
    fontFamily: 'WorkSans_700Bold',
    fontSize: 32,
  },
});
