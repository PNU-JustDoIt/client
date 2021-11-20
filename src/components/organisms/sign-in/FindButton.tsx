import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Image} from 'react-native-elements/dist/image/Image';
import {InputPhoneNumberPageParams} from '../../../navigations/interfaces/InputPhoneNumberPage.params';
import {StackParamList} from '../../../navigations/stack-param-list/StackParamList';

// Styles
import FindButtonStyles from './styles/FindButton.style';

export default function FindButton(): JSX.Element {
  // FindButton Styles
  const styles = FindButtonStyles;

  const navigation =
    useNavigation<
      NavigationProp<StackParamList, '회원가입 또는 아이디 찾기'>
    >();

  const params: InputPhoneNumberPageParams = {
    title: '아이디 찾기',
  };

  return (
    <View style={styles.findButtonContainer}>
      <TouchableOpacity
        onPress={() => {
          console.log('아이디 찾기 버튼 클릭');
          navigation.navigate('회원가입 또는 아이디 찾기', {
            title: '아이디 찾기',
          });
        }}
        style={styles.findIdButton}>
        <Text style={styles.findButtonText}>아이디 찾기</Text>
      </TouchableOpacity>

      <Image
        source={require('../../../assets/images/sign-in/VerticalDivider.png')}
        style={styles.verticalDividerImage}
      />

      <TouchableOpacity
        onPress={() => {
          console.log('비밀번호 찾기 버튼 클릭');
        }}
        style={styles.findPasswordButton}>
        <Text style={styles.findButtonText}>비밀번호 찾기</Text>
      </TouchableOpacity>
    </View>
  );
}
