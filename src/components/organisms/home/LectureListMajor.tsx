import useAxios from 'axios-hooks';
import React from 'react';
import {Text, View} from 'react-native';
import ReviewCard from '../shared/ReviewCard';

export interface LectureListProps {
  buttonState: number;
  selectDepart: string;
  handleDepart: (state: string) => void;
}
const LectureListMajor = (props: LectureListProps) => {
  const {buttonState, selectDepart, handleDepart} = props;
  const [
    {
      data: getData,
      error: getError,
      // loading: getLoading
    },
    excuteDepart,
  ] = useAxios<any[]>({
    url: `/lecture-review/department/${selectDepart}`,
    method: 'get',
  });

  console.log('selectDepart:', getData);

  return (
    <View style={{marginTop: 10}}>
      <Text style={{color: 'white'}}>전공 </Text>

      {getData &&
        getData.map(item => {
          return <ReviewCard reviewData={item} key={item.review_id} />;
        })}
      {getData && getData.length > 0 && (
        <ReviewCard reviewData={getData[0]} key={getData[0].review_id} />
      )}
    </View>
  );
};
export default LectureListMajor;
