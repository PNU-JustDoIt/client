import React from 'react';
import {Text, View} from 'react-native';

import LectureList from './lecture-list/LectureList';
import LectureShare from './lecture-share/LectureShare';
import styles from './style/HomeTabStyles';
const HomeTabScreen = () => {
  return (
    <View style={styles.homeback}>
      <LectureShare />
      <LectureList />
    </View>
  );
};

export default HomeTabScreen;
