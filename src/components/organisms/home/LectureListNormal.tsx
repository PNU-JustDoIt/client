import useAxios from 'axios-hooks';
import React from 'react';
import {Text, View} from 'react-native';
import ReviewCard from '../shared/ReviewCard';

export interface LectureListProps {
  buttonState: number;
  selectDepart: string;
  handleDepart: (state: string) => void;
}
const LectureListNormal = (props: LectureListProps) => {
  const {buttonState, selectDepart, handleDepart} = props;

  const [
    {
      data: getData,
      error: getError,
      // loading: getLoading
    },
    excute,
  ] = useAxios<any[]>({
    url: `/lecture-review/category/${'일반선택'}`,
    method: 'get',
  });
  console.log('selectDepart:', getData);
  return (
    <View style={{marginTop: 10}}>
      <Text style={{color: 'white'}}>일반선택</Text>

      {/* 요건 안됨 */}
      {getData &&
        getData.map(item => {
          console.log('items:', item);
          <ReviewCard reviewData={item} />;
        })}

      {/* 요건 됨 */}
      {getData && <ReviewCard reviewData={getData[0]} />}
    </View>
  );
};
export default LectureListNormal;
