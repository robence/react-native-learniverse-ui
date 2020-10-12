import React from 'react';
import { View, Text } from 'react-native';
import { CourseType } from './data';
import { StyleSheet } from 'react-native';
type CourseProps = {
  course: CourseType;
};

export default function Course(props: CourseProps) {
  const { course } = props;
  const { title, Icon, color } = course;

  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Icon width={30} height={30} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    padding: 10,
    width: 170,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontFamily: 'WorkSans_600SemiBold',
    fontSize: 16,
  },
});
