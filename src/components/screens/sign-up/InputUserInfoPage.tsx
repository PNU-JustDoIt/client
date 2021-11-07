import React, {useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// Styles
import InputUserInfoPageStyles from './styles/InputUserInfoPage.style';

// Organisms
import NextButton from '../../organisms/sign-up/NextButton';
import InputWithDupCheck from '../../organisms/sign-up/InputWithDupCheck';
import PasswordInput from '../../organisms/sign-up/PasswordInput';
import BirthdayInput from '../../organisms/sign-up/BirthdayInput';
import {RouteProp, useRoute} from '@react-navigation/core';
import {StackParamList} from '../../../navigations/stack-param-list/StackParamList';

export interface UserInfo {
  userPhone: string;
  userEmail: string;
  userNickname: string;
  userPassword: string;
  userBirthday: string;
}

export default function InputUserInfoPage(): JSX.Element {
  // InputUserInfoPage Styles
  const styles = InputUserInfoPageStyles;

  const route = useRoute<RouteProp<StackParamList, '회원가입 정보 입력'>>();
  const {userPhone} = route.params;

  // 사용자가 입력한 이메일 주소
  const [userEmail, setUserEmail] = useState<string>('');
  const handleUserEmail = (e: any) => {
    setUserEmail(e);
  };
  // 이메일 정규식: abcd@pusan.ac.kr
  const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@pusan.ac.kr/;
  // 이메일 중복검사 결과
  /**
   * 이메일 중복검사 결과 dummy
   */
  const isEmailDup = false;

  // 사용자가 입력한 닉네임
  const [userNickname, setUserNickname] = useState<string>('');
  const handleUserNickname = (e: any) => {
    setUserNickname(e);
  };
  // 닉네임 정규식
  const nicknameRegex = /^[가-힣0-9a-zA-Z]{2}/;
  // 닉네임 중복검사 결과
  /**
   * 닉네임 중복검사 결과 dummy
   */
  const isNicknameDup = false;

  // 사용자가 입력한 비밀번호
  const [userPassword, setUserPassword] = useState<string>('');
  const handleUserPassword = (e: any) => {
    setUserPassword(e);
  };

  // 사용자가 입력한 비밀번호 확인
  const [userPasswordCheck, setUserPasswordCheck] = useState<string>('');
  const handleUserPasswordCheck = (e: any) => {
    setUserPasswordCheck(e);
  };
  const handlePasswordError = (): boolean => {
    if (userPassword.length > 0 && userPassword.length < 8) return false;
    return true;
  };
  const handlePasswordCheckError = (): boolean => {
    if (userPassword !== userPasswordCheck && userPasswordCheck.length > 0)
      return false;
    return true;
  };

  // 사용자가 입력한 생년월일
  const [userBirthday, setUserBirthday] = useState<string>('');
  const handleUserBirthday = (e: any) => {
    // const refined = e.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');

    const refined = new String(e.replace(/[^0-9]/g, '')).replace(
      /(\d{4})(\d{2})(\d{2})/g,
      '$1-$2-$3',
    );
    setUserBirthday(refined);
  };
  // 생년월일 정규식: YYYY-MM-DD
  const birthdayRegex =
    /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;

  const nextButtonEnable = (): boolean => {
    const nextButtonEnable =
      emailRegex.test(userEmail) && // 이메일 유효성 체크
      !isEmailDup && // 이메일 중복 체크
      nicknameRegex.test(userNickname) && // 닉네임 유효성 체크
      !isNicknameDup && // 닉네임 중복 체크
      handlePasswordError() && // 비밀번호 유효성 체크
      handlePasswordCheckError() && // 비밀번호 재입력 유효성 체크
      birthdayRegex.test(userBirthday) // 생년월일 유효성 체크
        ? true
        : false;

    return nextButtonEnable;
  };

  const userInfo: UserInfo = {
    userPhone: userPhone,
    userBirthday: userBirthday,
    userEmail: userEmail,
    userNickname: userNickname,
    userPassword: userPassword,
  };

  return (
    <KeyboardAwareScrollView style={styles.root}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.titleText}>회원가입</Text>
          </View>

          <View style={styles.middleContainer}>
            <InputWithDupCheck
              userInput={userEmail}
              handleUserInput={handleUserEmail}
              regex={emailRegex}
              label="이메일"
              placeholder="이메일을 입력해주세요."
              keyboardType="email-address"
              maxLength={50}
            />

            <InputWithDupCheck
              userInput={userNickname}
              handleUserInput={handleUserNickname}
              regex={nicknameRegex}
              label="닉네임"
              placeholder="2~10자로 입력해주세요."
              keyboardType="default"
              maxLength={10}
            />

            <PasswordInput
              mode={'first-input'}
              handleError={handlePasswordError}
              userInput={userPassword}
              handleUserInput={handleUserPassword}
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
            />

            <PasswordInput
              mode={'re-input'}
              handleError={handlePasswordCheckError}
              userInput={userPasswordCheck}
              handleUserInput={handleUserPasswordCheck}
              label="비밀번호 재입력"
              placeholder="비밀번호를 다시 입력해주세요."
            />

            <BirthdayInput
              userInput={userBirthday}
              handleUserInput={handleUserBirthday}
              regex={birthdayRegex}
              label="생년월일"
              placeholder="예) 2021-01-01"
            />
          </View>

          <View style={styles.bottomContainer}>
            <NextButton userInfo={userInfo} disabled={!nextButtonEnable()} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
}
