import {NavigationProp, RouteProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import {InputPhoneNumberPageParams} from '../../../navigations/interfaces/InputPhoneNumberPage.params';
import {StackParamList} from '../../../navigations/stack-param-list/StackParamList';

// Styles
import SignUpButtonStyles from './styles/SignUpButton.style';

export default function SignUpButton(): JSX.Element {
  // SignUpButton Styles
  const styles = SignUpButtonStyles;

  const navigation =
    useNavigation<
      NavigationProp<StackParamList, '회원가입 또는 아이디 찾기'>
    >();

  const params: InputPhoneNumberPageParams = {
    title: '회원가입',
  };

  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => {
          console.log('회원가입 버튼 클릭');
          navigation.navigate('회원가입 또는 아이디 찾기', params);
        }}>
        <Text style={styles.signUpButtonText}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
}
