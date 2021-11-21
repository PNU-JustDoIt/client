import {useNavigation} from '@react-navigation/native';
import useAxios from 'axios-hooks';
import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-elements';
import {ReviewDetail} from '../../../navigations/interfaces/ReviewDetail.interface';
import styles from './style/ReviewCardStyles';

const STAR_IMAGE = require('../../../assets/icons/review/star.png');

export interface Mode {
  //isWriter: boolean;
  reviewData: any;
}

const ReviewCard = (props: Mode) => {
  const navigation = useNavigation<any>();
  const {reviewData} = props;
  console.log('review:', reviewData);
  const reviewParams: ReviewDetail = {
    review_id: reviewData.review_id,
  };
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('상세 후기 페이지', reviewParams)}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.profname}>
          {reviewData.lecture_id.lecture_professor_name}
        </Text>
        <View>
          <View style={styles.categorybox}>
            <Text style={styles.category}>
              {reviewData.lecture_id.lecature_category}
            </Text>
          </View>
          {/* <Image
                        source={require('../../../assets/icons/review/delete.png')}
                        style={styles.delete}
                    /> */}
        </View>
      </View>

      <Text style={styles.lectname}>{reviewData.lecture_id.lecture_name}</Text>

      <Rating
        readonly
        type="custom"
        ratingImage={STAR_IMAGE}
        imageSize={20}
        ratingColor="white"
        ratingBackgroundColor="grey"
        tintColor="#1c1c1c"
        // startingValue 에 값 입력
        startingValue={reviewData.lecture_id.review_difficulty}
        style={styles.star}
      />
    </TouchableOpacity>
  );
};
export default ReviewCard;
