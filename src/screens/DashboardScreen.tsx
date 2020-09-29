import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.layout}>
        <Text style={styles.title}>Status</Text>
        <Text style={styles.title}>Courses</Text>
        <Text style={styles.title}>Daily Challenge</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  title: {
    fontFamily: 'WorkSans_700Bold',
    fontSize: 28,
  },
});
