export interface CertifiedImageBase {
  certified_image_id: number;
  certified_image_url: string;
}

/* 
name : lecture interface 
description : lecture entity와 관련된 interface
summary : attribute number: 19,
*/
export interface LectureBase {
  lecture_id: number;

  lecture_name: string;
  lecture_code: string;
  lecture_group: string;
  lecture_semester: string;
  lecture_college_name: string;
  lecture_department_name: string;
  lecture_year: number;
  lecature_category: string;

  lecture_grade: number;
  lecture_theory: number;
  lecture_training: number;
  lecture_professor_name: string;
  lecture_limit: number;
  lecture_time_table: string;
  lecture_language: string;
  lecture_is_team: boolean;
  lecture_liberal_category: string;
  lecture_is_remote: boolean;
}

/**
 * @interface UserBase
 * user-entity base interface
 *
 * 1. user_id: number
 * 2. user_email: string
 * 3. user_password: string;
 * 4. user_nickname: string
 * 5. user_phone: string (010-1234-5678)
 *
 */
export interface UserBase {
  user_id: number;
  user_email: string;
  user_password: string;
  user_nickname: string;
  user_phone: string;
}
