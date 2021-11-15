import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// Styles
import InputUserInfoPageStyles from './styles/InputUserInfoPage.style';

// Organisms
import NextButton from '../../organisms/sign-up/NextButton';
import InputWithDupCheck from '../../organisms/sign-up/InputWithDupCheck';
import PasswordInput from '../../organisms/sign-up/PasswordInput';
import {RouteProp, useRoute} from '@react-navigation/core';
import {StackParamList} from '../../../navigations/stack-param-list/StackParamList';
import useAxios from 'axios-hooks';
import {CreateUserReq} from '../../organisms/sign-up/dto/create-user-req.dto';
import {CreateUserRes} from '../../organisms/sign-up/dto/create-user-res.dto';

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
  const [isEmailUsable, setIsEmailUsable] = useState<boolean | null>(null);
  const [, executeEmailDupCheck] = useAxios<boolean>(
    {
      method: 'POST',
      url: 'user/email-dup-check',
    },
    {
      manual: true,
    },
  );
  // 이메일 중복검사 핸들러
  const handleEmailDupCheck = (user_email: string) => {
    executeEmailDupCheck({
      data: {
        user_email: user_email,
      },
    })
      .then(res => {
        if (!res.data) {
          Alert.alert(
            '이미 사용중인 이메일입니다.',
            '새로운 이메일을 입력해주세요.',
            [{text: '확인'}],
            {cancelable: false},
          );
          setUserEmail('');
          setIsEmailUsable(false);
        } else {
          Alert.alert('사용 가능한 이메일입니다.', '', [{text: '확인'}], {
            cancelable: false,
          });
          setIsEmailUsable(true);
        }
      })
      .catch(err => {
        console.log('[handleEmailDupCheck err]', err);
      });
  };

  // 사용자가 입력한 닉네임
  const [userNickname, setUserNickname] = useState<string>('');
  const handleUserNickname = (e: any) => {
    setUserNickname(e);
  };
  // 닉네임 정규식
  const nicknameRegex = /^[가-힣0-9a-zA-Z]{2}/;
  // 닉네임 중복검사 결과
  const [isNicknameUsable, setIsNicknameUsable] = useState<boolean | null>(
    null,
  );
  const [, executeNicknameDupCheck] = useAxios<boolean>(
    {
      method: 'POST',
      url: 'user/nickname-dup-check',
    },
    {
      manual: true,
    },
  );
  // 닉네임 중복검사 핸들러
  const handleNicknameDupCheck = (user_nickname: string) => {
    executeNicknameDupCheck({
      data: {
        user_nickname: user_nickname,
      },
    })
      .then(res => {
        if (!res.data) {
          Alert.alert(
            '이미 사용중인 닉네임입니다.',
            '새로운 닉네임을 입력해주세요.',
            [{text: '확인'}],
            {cancelable: false},
          );
          setUserNickname('');
          setIsNicknameUsable(false);
        } else {
          Alert.alert('사용 가능한 닉네임입니다.', '', [{text: '확인'}], {
            cancelable: false,
          });
          setIsNicknameUsable(true);
        }
      })
      .catch(err => {
        console.log('[handleNicknameDupCheck err]', err);
      });
  };

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

  const [, executeCreateLocalUser] = useAxios<CreateUserRes>(
    {
      method: 'POST',
      url: 'user/create-local-user',
    },
    {manual: true},
  );
  // 회원가입 요청 핸들러
  const handleCreateLocalUser = async (
    userData: CreateUserReq,
  ): Promise<boolean> => {
    return executeCreateLocalUser({
      data: {
        user_email: userData.user_email,
        user_phone: userData.user_phone,
        user_password: userData.user_password,
        user_nickname: userData.user_nickname,
      },
    })
      .then(res => {
        console.log('handleCreateLocalUser res:', res.data);
        return true;
      })
      .catch(err => {
        console.log('handleCreateLocalUser err:', err);
        return false;
      });
  };

  // 유저 입력값 전체 초기화 핸들러
  const resetUserInput = () => {
    setUserEmail('');
    setUserNickname('');
    setUserPassword('');
    setUserPasswordCheck('');
  };

  const nextButtonEnable = (): boolean => {
    const nextButtonEnable =
      emailRegex.test(userEmail) && // 이메일 유효성 체크
      isEmailUsable && // 이메일 중복 체크
      nicknameRegex.test(userNickname) && // 닉네임 유효성 체크
      isNicknameUsable && // 닉네임 중복 체크
      handlePasswordError() && // 비밀번호 유효성 체크
      handlePasswordCheckError() && // 비밀번호 재입력 유효성 체크
      userPassword === userPasswordCheck // 비밀번호 일치 여부
        ? true
        : false;

    return nextButtonEnable;
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
              handleDupCheck={handleEmailDupCheck}
              label="이메일"
              placeholder="이메일을 입력해주세요."
              keyboardType="email-address"
              maxLength={50}
            />

            <InputWithDupCheck
              userInput={userNickname}
              handleUserInput={handleUserNickname}
              regex={nicknameRegex}
              handleDupCheck={handleNicknameDupCheck}
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
          </View>

          <View style={styles.bottomContainer}>
            <NextButton
              userData={{
                user_email: userEmail,
                user_phone: userPhone,
                user_password: userPassword,
                user_nickname: userNickname,
              }}
              handleCreateLocalUser={handleCreateLocalUser}
              resetUserInput={resetUserInput}
              disabled={!nextButtonEnable()}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
}
