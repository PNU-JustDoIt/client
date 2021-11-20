import {CertifiedImageBase, LectureBase, UserBase} from './interfaces';

export interface FindLectureReviewDetail {
  review_id: number;

  lecture_id: LectureBase;
  user_id: UserBase;
  certifiedImage: CertifiedImageBase;

  review_description: string;
  review_using_books: string;
  review_difficulty: number;
  review_is_report: boolean;
  review_is_team_project: boolean;
  review_main_test_count: number;
  review_sub_test_count: number;
  review_test_category: string;
}
