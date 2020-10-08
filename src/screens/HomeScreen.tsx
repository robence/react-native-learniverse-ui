import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Text,
} from 'react-native';

import { Colors } from '../constants';
import { RootNavigationProp } from '../navigation/HomeNavigator';
import { Planet } from '../svg';

type HomeProps = {
  navigation: RootNavigationProp;
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
          <Planet />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    backgroundColor: Colors.background,
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
    marginBottom: 20,
  },
});
