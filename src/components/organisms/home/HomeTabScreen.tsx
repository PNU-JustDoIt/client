import React from 'react';
import {Text, View} from 'react-native';

import LectureList from './LectureList';
import LectureShare from './LectureShare';
import ReviewCard from '../shared/ReviewCard';
import styles from './style/HomeTabStyles';
const HomeTabScreen = () => {
  return (
    <View style={styles.homeback}>
      <LectureShare />
      <LectureList />
      <ReviewCard />
      <ReviewCard />
    </View>
  );
};

export default HomeTabScreen;
