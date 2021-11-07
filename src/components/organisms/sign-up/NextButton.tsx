import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import {UserInfo} from '../../screens/sign-up/InputUserInfoPage';

// Styles
import NextButtonStyles from './styles/NextButton.style';

export interface NextButtonProps {
  userInfo: UserInfo;
  disabled: boolean;
}

export default function NextButton(props: NextButtonProps): JSX.Element {
  // NextButton Styles
  const styles = NextButtonStyles;

  const {userInfo, disabled} = props;

  const navigation = useNavigation<any>();

  console.log('userInfo: ', userInfo);

  return (
    <View>
      <TouchableOpacity
        style={disabled ? styles.disabled : styles.nextButton}
        disabled={disabled}
        onPress={() => {
          console.log('다음으로 버튼 클릭');

          /**
           * local user 생성 요청부 dummy
           */

          navigation.reset({
            routes: [{name: '로컬 로그인'}],
          });
        }}>
        <Text style={styles.nextButtonText}>다음으로</Text>
      </TouchableOpacity>
    </View>
  );
}
