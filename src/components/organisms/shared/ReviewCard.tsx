import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-elements';
import {ReviewDetail} from '../../../navigations/interfaces/ReviewDetail.interface';
import styles from './style/ReviewCardStyles';

const STAR_IMAGE = require('../../../assets/icons/review/star.png');

export interface Mode {
  reviewData: any;
}

const ReviewCard = (props: Mode) => {
  const {reviewData} = props;

  const navigation = useNavigation<any>();

  console.log('[ReviewCard] review:', reviewData);

  const reviewParams: ReviewDetail = {
    review_id: reviewData.review_id,
  };
  return (
    <TouchableOpacity
      // key={key}
      style={styles.card}
      onPress={() => navigation.navigate('상세 후기 페이지', reviewParams)}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.profname}>{reviewData.professor_name}</Text>
        <View>
          <View style={styles.categorybox}>
            <Text style={styles.category}>{reviewData.lecture_category}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.lectname}>{reviewData.lecture_name}</Text>

      <Rating
        readonly
        type="custom"
        ratingImage={STAR_IMAGE}
        imageSize={20}
        ratingColor="white"
        ratingBackgroundColor="grey"
        tintColor="#1c1c1c"
        // startingValue 에 값 입력
        startingValue={reviewData.review_difficulty * 2}
        style={styles.star}
      />
    </TouchableOpacity>
  );
};
export default ReviewCard;
