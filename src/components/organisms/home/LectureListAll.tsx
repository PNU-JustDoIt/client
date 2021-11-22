import useAxios from 'axios-hooks';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {MyReview} from '../my-review/dto/my-review.dto';
import ReviewCard from '../shared/ReviewCard';

export interface LectureListAllProps {
  buttonState: number;
  selectDepart: string;
  handleDepart: (state: string) => void;
  getData: any;
}
const LectureListAll = (props: LectureListAllProps) => {
  const {buttonState, selectDepart, handleDepart, getData} = props;

  console.log('lecturelistall getdata:', getData);

  return (
    <View style={{marginTop: 10}}>
      <Text style={{color: 'white'}}>최근 강의평</Text>
      {getData &&
        getData !== null &&
        getData.map((item: {review_id: number}) => {
          return <ReviewCard reviewData={item} key={item.review_id} />;
        })}
    </View>
  );
};
export default LectureListAll;
