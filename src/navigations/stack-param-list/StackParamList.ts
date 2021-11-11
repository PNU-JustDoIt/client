import {InputPhoneNumberPageParams} from '../interfaces/InputPhoneNumberPage.params';
import {InputUserInfoPageParams} from '../interfaces/InputUserInfoPage.params';

/**
 * @name root_stack_param_list
 * @description App.tsx 에서 사용하는 App 루트 stack param 리스트, ./interfaces 에 각 stack param 을 정의
 */
export type StackParamList = {
  '로그인 방법 선택 페이지': any;
  '로컬 로그인': any;
  '회원가입 또는 아이디 찾기': InputPhoneNumberPageParams;
  '회원가입 정보 입력': InputUserInfoPageParams;
  '아이디 찾기 결과': InputUserInfoPageParams;

  테스트: any;
  '카카오 로그인': any;
  '비밀번호 찾기': any;
};
