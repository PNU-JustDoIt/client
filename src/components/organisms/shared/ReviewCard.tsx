import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, View, Text} from 'react-native';
import {Rating} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './style/ReviewCardStyles';

const STAR_IMAGE = require('../../../assets/icons/review/star.png');

export interface Mode {
  isWriter?: boolean;
}

const ReviewCard = (props: Mode) => {
  const {isWriter} = props;
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
          const routeProps = {
            review_id: 1,
          };

          navigation.navigate('상세 후기 페이지', routeProps);
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.profname}>교수명</Text>
          <View>
            <View style={styles.categorybox}>
              <Text style={styles.category}>교양선택</Text>
            </View>
            {/* <Image
            source={require('../../../assets/icons/review/delete.png')}
            style={styles.delete}
          /> */}
          </View>
        </View>

        <Text style={styles.lectname}>강의명</Text>
      </TouchableOpacity>

      <Rating
        readonly
        type="custom"
        ratingImage={STAR_IMAGE}
        imageSize={20}
        ratingColor="white"
        ratingBackgroundColor="grey"
        tintColor="#1c1c1c"
        startingValue={2} // startingValue 에 값 입력
        style={styles.star}
      />
    </View>
  );
};
export default ReviewCard;
