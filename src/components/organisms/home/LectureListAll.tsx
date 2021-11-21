import useAxios from 'axios-hooks';
import React from 'react';
import {Text, View} from 'react-native';
import ReviewCard from '../shared/ReviewCard';

export interface LectureListAllProps {
  buttonState: number;
  selectDepart: string;
  handleDepart: (state: string) => void;
}
const LectureListAll = (props: LectureListAllProps) => {
  const {buttonState, selectDepart, handleDepart} = props;
  const [
    {
      data: getData,
      error: getError,
      // loading: getLoading
    },
    excuteDepart,
  ] = useAxios<any[]>({
    url: `/lecture-review/`,
    method: 'get',
  });
  console.log('selectDepart:', getData);
  return (
    <View style={{marginTop: 10}}>
      <Text style={{color: 'white'}}>최근 강의평</Text>
      {/* {getData &&
        getData.map(item => {
          console.log('items:', item);
          <ReviewCard reviewData={item} />;
        })} */}
      {getData && <ReviewCard reviewData={getData[0]} />}
    </View>
  );
};
export default LectureListAll;
