import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Header() {
  return (
    <SafeAreaView>
      <View style={styles.background}>
        <View style={styles.menuContainer}>
          <Text style={styles.menu}>M</Text>
        </View>
        <View style={styles.profileBadge}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>Icon</Text>
          </View>
          <View>
            <Text style={[styles.title]}>Luca Rozsa</Text>
            <Text style={[styles.title]}>Serious Learner</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'lightgrey',
  },
  menuContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },
  menu: {
    fontSize: 22,
  },
  profileBadge: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  iconContainer: {
    paddingRight: 16,
  },
  title: {
    fontSize: 22,
  },
  icon: {
    fontSize: 22,
  },
});
