import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Text,
} from 'react-native';

export default function DashboardScreen() {
  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.center}>
          <Text style={styles.title}>Status</Text>
          <Text style={styles.title}>Courses</Text>
          <Text style={styles.title}>Daily Challenge</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
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
    fontFamily: 'WorkSans_700Bold',
    fontSize: 22,
  },
});
