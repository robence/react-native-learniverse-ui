import React from 'react';
import { View } from 'react-native';
import Course from './Course';

import courseData from './data';

export default function CourseList() {
  return (
    <View>
      {courseData.map((course) => (
        <Course key={course.title} course={course} />
      ))}
    </View>
  );
}
