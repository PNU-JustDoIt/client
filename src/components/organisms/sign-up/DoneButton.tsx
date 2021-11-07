import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import {InputUserInfoPageParams} from '../../../navigations/interfaces/InputUserInfoPage.params';
import {StackParamList} from '../../../navigations/stack-param-list/StackParamList';

// Styles
import DoneButtonStyles from './styles/DoneButton.style';

export interface DoneButtonProps {
  mode: 'sign-up' | 'find-id';
  userPhone: string;
  disabled: boolean;
}

export default function DoneButton(props: DoneButtonProps): JSX.Element {
  // DoneButton Styles
  const styles = DoneButtonStyles;

  const {mode, userPhone, disabled} = props;

  const navigation =
    useNavigation<NavigationProp<StackParamList, '회원가입 정보 입력'>>();

  const params: InputUserInfoPageParams = {
    userPhone: userPhone,
  };

  return (
    <View>
      <TouchableOpacity
        style={disabled ? styles.disabled : styles.doneButton}
        disabled={disabled}
        onPress={() => {
          console.log('완료 버튼 클릭');
          if (mode === 'sign-up') {
            navigation.navigate('회원가입 정보 입력', params);
          }
          if (mode === 'find-id') {
            navigation.navigate('아이디 찾기 결과', params);
          }
        }}>
        <Text style={styles.doneButtonText}>완료</Text>
      </TouchableOpacity>
    </View>
  );
}
