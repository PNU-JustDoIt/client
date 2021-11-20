import useAxios from 'axios-hooks';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text, Rating} from 'react-native-elements';
import {FindLectureReviewDetail} from '../dto/find-lecture-review-detail.dto';

import useStyle from './ReviewDetailPage.style';

const ReviewDetailPage = () => {
  const styles = useStyle();

  const [{data: getData}] = useAxios<FindLectureReviewDetail>({
    url: `/lecture-review/${3}`, // review_id, 조회 결과 없을 경우 예외 페이지
    method: 'GET',
  });

  const handleTestCategory = (categories: string): JSX.Element[] => {
    const separated = categories.split(',');
    if (separated.length > 0)
      return separated.map((each, index) => (
        <View style={[styles.chip]} key={index}>
          <Text style={[styles.chipText]}>{each}</Text>
        </View>
      ));
    else return [<></>];
  };

  return (
    <>
      {getData ? (
        <View style={styles.root}>
          <View style={[styles.cardContainer]}>
            <Text style={styles.cardTitleText}>
              {getData.lecture_id.lecture_name}
            </Text>
            <View style={[styles.cardContentContainer]}>
              <Text style={[styles.cardPropertyText]}>교수명</Text>
              <Text style={[styles.cardDescriptionText]}>
                {getData.lecture_id.lecture_professor_name}
              </Text>
            </View>
            <View style={[styles.cardContentContainer]}>
              <Text style={[styles.cardPropertyText]}>교과구분</Text>
              <Text style={[styles.cardDescriptionText]}>
                {getData.lecture_id.lecature_category}
              </Text>
            </View>
            <View style={[styles.cardContentContainer]}>
              <Text style={[styles.cardPropertyText]}>학점 · 이론 · 실습</Text>
              <Text style={[styles.cardDescriptionText]}>
                {getData.lecture_id.lecture_grade +
                  '학점' +
                  ' · ' +
                  getData.lecture_id.lecture_theory +
                  ' · ' +
                  getData.lecture_id.lecture_training}
              </Text>
            </View>
          </View>

          <View style={[styles.cardContainer]}>
            <Text style={styles.cardTitleText}>강의평</Text>
            <View style={[styles.cardContentContainer]}>
              <Text style={[styles.cardPropertyText]}>과제 · 리포트</Text>
              <Text style={[styles.cardDescriptionText]}>
                {getData.review_is_report ? '있음' : '없음'}
              </Text>
            </View>
            <View style={[styles.cardContentContainer]}>
              <Text style={[styles.cardPropertyText]}>조별</Text>
              <Text style={[styles.cardDescriptionText]}>
                {getData.review_is_team_project ? '있음' : '없음'}
              </Text>
            </View>
            <View style={[styles.cardContentContainer]}>
              <Text style={[styles.cardPropertyText]}>시험 횟수</Text>
              <Text style={[styles.cardDescriptionText]}>
                {`${getData.review_main_test_count}회`}
              </Text>
            </View>
            <View style={[styles.cardContentContainer]}>
              <Text style={[styles.cardPropertyText]}>퀴즈</Text>
              <Text style={[styles.cardDescriptionText]}>
                <Text style={[styles.cardDescriptionText]}>
                  {`${getData.review_sub_test_count}회`}
                </Text>
              </Text>
            </View>

            <View style={[styles.cardContentContainer]}>
              <Text style={[styles.cardPropertyText]}>시험 유형</Text>
              <View style={[styles.chipContainer]}>
                {handleTestCategory(getData.review_test_category)}
              </View>
            </View>
          </View>

          <View style={[styles.cardContainer]}>
            <Text style={styles.cardTitleText}>수업 특징</Text>
            <Text style={[styles.cardDescriptionText, {marginBottom: 17}]}>
              {getData.review_description}
            </Text>

            <View style={[styles.cardContentContainer]}>
              <Text style={[styles.cardPropertyText]}>체감 난이도</Text>
              <Rating
                type="custom"
                imageSize={15}
                ratingColor="white"
                ratingBackgroundColor="black"
                tintColor="black"
                startingValue={getData.review_difficulty}
                readonly
              />
            </View>

            <View style={[styles.cardContentContainer]}>
              <Text style={[styles.cardPropertyText]}>교재 활용도</Text>
              <Text style={[styles.cardDescriptionText]}>
                {getData.review_using_books}
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.exceptionRoot}>
          <Text style={styles.exceptionWhiteText}>앗!</Text>
          <Text style={styles.exceptionWhiteText}>
            <Text style={{color: '#0161ff'}}>잠시</Text> 연결이 불안정해요!
          </Text>
          <TouchableOpacity
            style={styles.exceptionButton}
            onPress={() => console.log('뒤로가기')}>
            <Text style={styles.exceptionWhiteText}>다시 불러오기</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default ReviewDetailPage;
