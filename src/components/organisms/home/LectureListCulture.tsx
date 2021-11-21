import useAxios from 'axios-hooks';
import React from 'react';
import {Text, View} from 'react-native';
import ReviewCard from '../shared/ReviewCard';

export interface LectureListCultureProps {
  buttonState: number;
  selectDepart: string;
  handleDepart: (state: string) => void;
}
const LectureListCulture = (props: LectureListCultureProps) => {
  const {buttonState, selectDepart, handleDepart} = props;

  const [
    {
      data: getData,
      error: getError,
      // loading: getLoading
    },
    excute,
  ] = useAxios<any[]>({
    url: `/lecture-review/category/${'교양필수'}`,
    method: 'get',
  });
  console.log('selectDepart:', getData);
  return (
    <View style={{marginTop: 10}}>
      <Text style={{color: 'white'}}>교양필수</Text>
      {getData &&
        getData.map(item => {
          return <ReviewCard reviewData={item} />;
        })}
    </View>
  );
};
export default LectureListCulture;
