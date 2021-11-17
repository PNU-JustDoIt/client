import React from 'react';
import {View} from 'react-native';
import {Text, Chip, Rating} from 'react-native-elements';

import useStyle from './ReviewDetailPage.style';

const ReviewDetailPage = () => {
  const styles = useStyle();

  return (
    <View style={styles.root}>
      <View style={[styles.cardContainer]}>
        <Text style={styles.cardTitleText}>행복의 심리학</Text>
        <View style={[styles.cardContentContainer]}>
          <Text style={[styles.cardPropertyText]}>교수명</Text>
          <Text style={[styles.cardDescriptionText]}>이기준</Text>
        </View>
        <View style={[styles.cardContentContainer]}>
          <Text style={[styles.cardPropertyText]}>교과구분</Text>
          <Text style={[styles.cardDescriptionText]}>이기준</Text>
        </View>
        <View style={[styles.cardContentContainer]}>
          <Text style={[styles.cardPropertyText]}>학점 · 이론 · 실습</Text>
          <Text style={[styles.cardDescriptionText]}>이기준</Text>
        </View>
      </View>

      <View style={[styles.cardContainer]}>
        <Text style={styles.cardTitleText}>강의평</Text>
        <View style={[styles.cardContentContainer]}>
          <Text style={[styles.cardPropertyText]}>과제 · 리포트</Text>
          <Text style={[styles.cardDescriptionText]}>이기준</Text>
        </View>
        <View style={[styles.cardContentContainer]}>
          <Text style={[styles.cardPropertyText]}>조별</Text>
          <Text style={[styles.cardDescriptionText]}>이기준</Text>
        </View>
        <View style={[styles.cardContentContainer]}>
          <Text style={[styles.cardPropertyText]}>시험 횟수</Text>
          <Text style={[styles.cardDescriptionText]}>이기준</Text>
        </View>
        <View style={[styles.cardContentContainer]}>
          <Text style={[styles.cardPropertyText]}>퀴즈</Text>
          <Text style={[styles.cardDescriptionText]}>이기준</Text>
        </View>

        <View style={[styles.cardContentContainer]}>
          <Text style={[styles.cardPropertyText]}>시험 유형</Text>
          <View style={[styles.chipContainer]}>
            <View style={[styles.chip]}>
              <Text style={[styles.chipText]}>O/X형</Text>
            </View>
            <View style={[styles.chip]}>
              <Text style={[styles.chipText]}>O/X형</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.cardContainer]}>
        <Text style={styles.cardTitleText}>수업 특징</Text>
        <Text style={[styles.cardDescriptionText, {marginBottom: 17}]}>
          교수님이 친절하시고, 흐름만 이해하면 시험은 무난하다. 교수님이
          친절하시고, 흐름만 이해하면 시험은 무난하다. 교수님이 친절하시고,
          흐름만 이해하면 시험은 무난하다.
        </Text>

        <View style={[styles.cardContentContainer]}>
          <Text style={[styles.cardPropertyText]}>체감 난이도</Text>
          <Rating
            type="custom"
            imageSize={15}
            ratingColor="white"
            ratingBackgroundColor="black"
            tintColor="black"
            startingValue={3}
            // onFinishRating={(rating: number) => setRatingValue(rating)}
          />
        </View>

        <View style={[styles.cardContentContainer]}>
          <Text style={[styles.cardPropertyText]}>교재 활용도</Text>
          <Text style={[styles.cardDescriptionText]}>이기준</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewDetailPage;
