import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {MyReview} from '../../organisms/my-review/dto/my-review.dto';

// Organisms
import MyReviewListItem from '../../organisms/my-review/MyReviewListItem';

// Styles
import MyReviewPageStyles from './styles/MyReviewPage.style';

export default function MyReviewPage(): JSX.Element {
  // MyReviewPage Styles
  const styles = MyReviewPageStyles;

  /**
   * 후기 정보 dummy
   */
  const reviewDataList: MyReview[] = [
    {
      review_id: 1,
      lecture_category: '일반선택',
      lecture_name: '행복의 심리학',
      lecture_grade: 3,
      lecture_theory: 3,
      lecture_training: 0,
      professor_name: '서수일',
      review_description:
        '교수님이 친절하시고, 흐름만 이해하면 시험은 무난하다.',
      review_difficulty: 4,
      review_is_report: true,
      review_is_team_project: true,
      review_main_test_count: 2,
      review_sub_test_count: 1,
      review_test_category: 'O/X형,서술형',
      review_using_books: '교재필수',
    },
    {
      review_id: 2,
      lecture_category: '일반선택',
      lecture_name: '분노의 심리학',
      lecture_grade: 3,
      lecture_theory: 3,
      lecture_training: 0,
      professor_name: '서수이',
      review_description:
        '교수님이 친절하시고, 흐름만 이해하면 시험은 무난하다.',
      review_difficulty: 2,
      review_is_report: true,
      review_is_team_project: true,
      review_main_test_count: 2,
      review_sub_test_count: 1,
      review_test_category: 'O/X형,서술형',
      review_using_books: '교재필수',
    },
    {
      review_id: 3,
      lecture_category: '일반선택',
      lecture_name: '슬픔의 심리학',
      lecture_grade: 3,
      lecture_theory: 3,
      lecture_training: 0,
      professor_name: '서수삼',
      review_description:
        '교수님이 친절하시고, 흐름만 이해하면 시험은 무난하다.',
      review_difficulty: 5,
      review_is_report: true,
      review_is_team_project: true,
      review_main_test_count: 2,
      review_sub_test_count: 1,
      review_test_category: 'O/X형,서술형',
      review_using_books: '교재필수',
    },
    {
      review_id: 4,
      lecture_category: '일반선택',
      lecture_name: '기쁨의 심리학',
      lecture_grade: 3,
      lecture_theory: 3,
      lecture_training: 0,
      professor_name: '서수삼',
      review_description:
        '교수님이 친절하시고, 흐름만 이해하면 시험은 무난하다.',
      review_difficulty: 3,
      review_is_report: true,
      review_is_team_project: true,
      review_main_test_count: 2,
      review_sub_test_count: 1,
      review_test_category: 'O/X형,서술형',
      review_using_books: '교재필수',
    },
  ];

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>나의 후기</Text>
      </View>

      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.review_id.toString()}
          data={reviewDataList}
          renderItem={({item}) => <MyReviewListItem reviewData={item} />}
        />
      </View>
    </SafeAreaView>
  );
}
