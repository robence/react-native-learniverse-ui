import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../constants';
import { MenuIcon } from '../svg';

export default function Header() {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.background }}>
      <View>
        <View style={styles.menuContainer}>
          <MenuIcon />
        </View>
        <View style={styles.profileBadge}>
          <View style={styles.iconContainer}>
            <Image
              style={{ width: 50, height: 50 }}
              source={require('../../assets/images/profile.png')}
            />
          </View>
          <View>
            <Text style={[styles.title]}>Luca Rozsa</Text>
            <Text style={[styles.subTitle]}>Serious Learner</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    alignItems: 'flex-end',
    paddingTop: 16,
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
    color: 'white',
    fontSize: 22,
    fontFamily: 'WorkSans_600SemiBold',
  },
  subTitle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'WorkSans_400Regular',
  },
  icon: {
    color: 'white',
    fontSize: 22,
  },
});
