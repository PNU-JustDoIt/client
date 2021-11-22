import useAxios from 'axios-hooks';
import React from 'react';
import {Text, View} from 'react-native';
import ReviewCard from '../shared/ReviewCard';

export interface LectureListCultureProps {
  buttonState: number;
  selectDepart: string;
  handleDepart: (state: string) => void;
}
const LectureListCultureSelect = (props: LectureListCultureProps) => {
  const {buttonState, selectDepart, handleDepart} = props;

  const [
    {
      data: getData,
      error: getError,
      // loading: getLoading
    },
    excute,
  ] = useAxios<any[]>({
    url: `/lecture-review/category/${selectDepart}`,
    method: 'get',
  });
  console.log('selectDepart:', getData);
  return (
    <View style={{marginTop: 10}}>
      <Text style={{color: 'white'}}>교양선택</Text>
      {getData &&
        getData.map((item, i) => {
          return <ReviewCard reviewData={item} key={item.review_id} />;
        })}
    </View>
  );
};
export default LectureListCultureSelect;
