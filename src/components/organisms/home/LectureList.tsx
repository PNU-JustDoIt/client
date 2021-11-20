import React from 'react';
import {Text, View} from 'react-native';
import ReviewCard from '../shared/ReviewCard';

export interface LectureListProps {
  buttonState: number;
}
const LectureList = (props: LectureListProps) => {
  const {buttonState} = props;
  return (
    <View style={{marginTop: 10}}>
      <Text style={{color: 'white'}}>최근 강의평</Text>
      <ReviewCard />
    </View>
  );
};
export default LectureList;
