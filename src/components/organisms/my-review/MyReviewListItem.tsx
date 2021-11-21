import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from 'react-native-elements';
import {MyReview} from './dto/my-review.dto';
import {NavigationProp, useNavigation} from '@react-navigation/core';
import {StackParamList} from '../../../navigations/stack-param-list/StackParamList';
import useAxios, {RefetchOptions} from 'axios-hooks';
import UserContext from '../../../utils/context/User.context';

// Atoms
import MyReviewListItemDivider from '../../atoms/my-review/MyReviewListItemDivider';

// Styles
import MyReviewListItemStyles from './styles/MyReviewListItem.styles';
import {AxiosPromise, AxiosRequestConfig} from 'axios';

export interface MyReviewListItemProps {
  reviewData: MyReview;
  getMyReview: (
    config?: AxiosRequestConfig<any> | undefined,
    options?: RefetchOptions | undefined,
  ) => AxiosPromise<MyReview[]>;
}

export default function MyReviewListItem(
  props: MyReviewListItemProps,
): JSX.Element {
  // MyReviewListItem Styles
  const styles = MyReviewListItemStyles;
  const {reviewData, getMyReview} = props;
  const navigation =
    useNavigation<NavigationProp<StackParamList, '상세 후기 페이지'>>();

  const userContext = useContext(UserContext);

  const [, executeDelete] = useAxios(
    {
      method: 'DELETE',
      url: 'lecture-review/delete-review/:user_id/:review_id',
      params: {
        user_id: userContext.user?.user_id,
      },
    },
    {
      manual: true,
    },
  );

  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('상세 후기 페이지', {
            review_id: reviewData.review_id,
          });
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
              executeDelete({
                params: {
                  review_id: reviewData.review_id,
                },
              })
                .then(res => {
                  console.log('[executeDelete] res.data:', res.data);
                  getMyReview();
                })
                .catch(err => {
                  console.log('[executeDelete] err:', err);
                });
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
