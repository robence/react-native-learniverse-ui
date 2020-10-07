import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.layout}>
        <Text style={styles.title}>Status</Text>
        <View style={styles.statusLayout}>
          <View>
            <Text style={styles.number}>6</Text>
            <Text style={styles.label}>Active</Text>
          </View>
          <View>
            <Text style={styles.number}>11</Text>
            <Text style={styles.label}>Waiting</Text>
          </View>
          <View>
            <Text style={styles.number}>12</Text>
            <Text style={styles.label}>Finished</Text>
          </View>
        </View>
        <Text style={styles.title}>Courses</Text>
        <Text style={styles.title}>Daily Challenge</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scroll: {
    borderRadius: 32,
    borderWidth: 2,
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  layout: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  statusLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  number: {
    fontSize: 36,
    fontFamily: 'WorkSans_700Bold',
  },
  label: {
    fontFamily: 'WorkSans_500Medium',
    fontSize: 20,
  },

  title: {
    fontFamily: 'WorkSans_700Bold',
    fontSize: 28,
  },
});
