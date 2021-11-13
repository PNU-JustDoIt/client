import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from 'react-native-elements';
import {MyReview} from './dto/my-review.dto';

// Atoms
import MyReviewListItemDivider from '../../atoms/my-review/MyReviewListItemDivider';

// Styles
import MyReviewListItemStyles from './styles/MyReviewListItem.styles';

export interface MyReviewListItemProps {
  reviewData: MyReview;
}

export default function MyReviewListItem(
  props: MyReviewListItemProps,
): JSX.Element {
  // MyReviewListItem Styles
  const styles = MyReviewListItemStyles;

  const {reviewData} = props;

  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => {
          console.log(`나의 후기 ${reviewData.review_id}번 버튼 클릭`);
        }}
        style={styles.reviewButton}>
        {/* 교수명, 과목명, 별점 그룹 */}
        <View style={styles.lectureInfoLeftContainer}>
          <Text style={styles.professorNameText}>
            {reviewData.professor_name}
          </Text>

          <Text style={styles.lectureNameText}>{reviewData.lecture_name}</Text>

          <Rating
            type="custom"
            readonly={true}
            ratingCount={5}
            startingValue={reviewData.review_difficulty}
            imageSize={13.4}
            tintColor="black"
            ratingColor="white"
            ratingBackgroundColor="black"
            style={styles.rating}
          />
        </View>

        {/* 과목 분류, 삭제 버튼 그룹 */}
        <View style={styles.lectureInfoRightContainer}>
          <View style={styles.lectureCategoryContainer}>
            <Text style={styles.lectureCategoryText}>
              {reviewData.lecture_category}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              console.log(`나의 후기 ${reviewData.review_id}번 삭제 버튼 클릭`);
            }}
            style={styles.deleteReivewButton}>
            <Image
              source={require('../../../assets/images/my-review/DeleteButton.png')}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {/* Divider */}
      <MyReviewListItemDivider />
    </View>
  );
}
