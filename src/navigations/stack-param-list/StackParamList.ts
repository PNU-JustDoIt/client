import {InputPhoneNumberPageParams} from '../interfaces/InputPhoneNumberPage.params';
import {InputUserInfoPageParams} from '../interfaces/InputUserInfoPage.params';
import {ReviewDetail} from '../interfaces/ReviewDetail.interface';

/**
 * @name root_stack_param_list
 * @description App.tsx 에서 사용하는 App 루트 stack param 리스트, ./interfaces 에 각 stack param 을 정의
 */
export type StackParamList = {
  테스트: any;
  '바텀 네비게이션': undefined;
  '메인 화면': undefined;
  '검색 화면': undefined;
  '로그인 방법 선택 페이지': any;
  '로컬 로그인': any;
  '회원가입 또는 아이디 찾기': InputPhoneNumberPageParams;
  '회원가입 정보 입력': InputUserInfoPageParams;
  '아이디 찾기 결과': InputUserInfoPageParams;

  '상세 후기 페이지': ReviewDetail;
  '후기 작성 페이지': any;

  마이페이지: any;
  나의후기: any;
  계정관리: any;

  '카카오 로그인': any;
  '비밀번호 찾기': any;
};
