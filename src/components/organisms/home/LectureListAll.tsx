import useAxios from 'axios-hooks';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import ReviewCard from '../shared/ReviewCard';

export interface LectureListAllProps {
  buttonState: number;
  selectDepart: string;
  handleDepart: (state: string) => void;
  getData: any[] | undefined;
}
const LectureListAll = (props: LectureListAllProps) => {
  const {buttonState, selectDepart, handleDepart, getData} = props;
  //const [
  //   {
  //     data: getData,
  //     error: getError,
  //     // loading: getLoading
  //   },
  //   excuteAllReview,
  // ] = useAxios<any[]>(
  //   {
  //     url: `/lecture-review/get-reviews`,
  //     method: 'post',
  //   },
  //   {manual: true},
  // );
  console.log('alldata:', getData);
  return (
    <View style={{marginTop: 10}}>
      <Text style={{color: 'white'}}>최근 강의평</Text>
      {getData &&
        getData.map(item => {
          return <ReviewCard reviewData={item} />;
        })}
    </View>
  );
};
export default LectureListAll;
