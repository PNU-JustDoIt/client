import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {RouteProp, useRoute} from '@react-navigation/core';
import {StackParamList} from '../../../navigations/stack-param-list/StackParamList';

// Styles
import InputPhoneNumberPageStyles from './styles/InputPhoneNumberPage.style';

// Organisms
import AuthInput from '../../organisms/sign-up/AuthInput';
import AuthRequestButton from '../../organisms/sign-up/AuthRequestButton';
import AuthReRequestButton from '../../organisms/sign-up/AuthReRequestButton';
import DoneButton from '../../organisms/sign-up/DoneButton';
import PhoneInput from '../../organisms/sign-up/PhoneInput';
import useAxios from 'axios-hooks';

export default function InputPhoneNumberPage(): JSX.Element {
  // InputPhoneNumberPage Styles
  const styles = InputPhoneNumberPageStyles;

  const route =
    useRoute<RouteProp<StackParamList, '회원가입 또는 아이디 찾기'>>();
  const {title} = route.params;

  // 인증 번호
  const [AUTHENTICATION_NUMBER, SET_AUTHENTICATION_NUMBER] =
    useState<string>('');
  const handleAuthNumber = () => {
    executeGetAuthNumber()
      .then(res => {
        console.log('res.data:', res.data);
        SET_AUTHENTICATION_NUMBER(res.data);
      })
      .catch(err => {
        console.log('[handleAuthNumber] err:', err);
      });
  };

  // 인증 완료 여부
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const handleIsAuthenticated = (bool: boolean) => {
    setIsAuthenticated(bool);
  };

  // 인증 시간 만료 여부
  const [isTimeout, setIsTimeout] = useState<boolean>(false);
  const handleIsTimeout = (bool: boolean) => {
    setIsTimeout(bool);
  };

  // 인증번호 받기 버튼 클릭 여부
  const [isAuthRequested, setIsAuthRequested] = useState<boolean>(false);
  const handleisAuthRequested = (bool: boolean) => {
    setIsAuthRequested(bool);
  };

  // 사용자가 입력한 휴대전화 번호
  const [userPhone, setUserPhone] = useState<string>('');
  const handleUserPhone = (e: any) => {
    const refined = new String(e.replace(/[^0-9]/g, '')).replace(
      /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
      '$1-$2-$3',
    );

    setUserPhone(refined);
  };
  // 휴대전화 번호 정규식
  const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

  // 사용자가 입력한 인증 번호
  const [userAuth, setUserAuth] = useState<string>('');
  const handleUserAuth = (e: any) => {
    const refined = e.replace(/[^0-9]/g, '');
    setUserAuth(refined);

    if (parseInt(e) === parseInt(AUTHENTICATION_NUMBER)) {
      console.log('auth 성공');
      handleIsAuthenticated(true);
    } else {
      console.log('auth 실패');
    }
  };

  const [
    {
      data: getAuthNumberData,
      loading: getAuthNumberLoading,
      error: getAuthNumberError,
    },
    executeGetAuthNumber,
  ] = useAxios(
    {
      method: 'GET',
      url: 'user/get-auth-number',
    },
    {manual: true},
  );

  useEffect(() => {
    console.log('[useEffect] AUTHENTICATION_NUMBER:', AUTHENTICATION_NUMBER);
  }, [AUTHENTICATION_NUMBER]);

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>

        <View style={styles.middleContainer}>
          <PhoneInput
            userPhone={userPhone}
            handleUserPhone={handleUserPhone}
            phoneRegex={phoneRegex}
            disabled={isAuthRequested}
          />
          <AuthInput
            userAuth={userAuth}
            handleUserAuth={handleUserAuth}
            isTimeout={isTimeout}
            handleIsTimeout={handleIsTimeout}
            isAuthenticated={isAuthenticated}
            handleIsAuthenticated={handleIsAuthenticated}
            disabled={!isAuthRequested}
          />
          <AuthReRequestButton
            handleIsTimeout={handleIsTimeout}
            handleisAuthRequested={handleisAuthRequested}
            disabled={!isAuthRequested || !isTimeout}
          />
        </View>

        <View style={styles.bottomContainer}>
          {!isAuthRequested ? (
            <AuthRequestButton
              handleAuthNumber={handleAuthNumber}
              handleisAuthRequested={handleisAuthRequested}
              disabled={!phoneRegex.test(userPhone)}
            />
          ) : (
            <DoneButton
              mode={title === '회원가입' ? 'sign-up' : 'find-id'}
              userPhone={userPhone}
              disabled={!isAuthenticated}
            />
          )}
        </View>
      </View>
    </View>
  );
}
