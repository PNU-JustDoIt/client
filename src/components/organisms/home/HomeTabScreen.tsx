import React from 'react';
import {Text, View} from 'react-native';

import LectureList from './lecture-list/LectureList';
import LectureShare from './lecture-share/LectureShare';

const HomeTabScreen = () => {
  return (
    <View>
      <LectureList />
      <LectureShare />
    </View>
  );
};

export default HomeTabScreen;
