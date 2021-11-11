import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import {CreateUserReq} from './dto/create-user-req.dto';

// Styles
import NextButtonStyles from './styles/NextButton.style';

export interface NextButtonProps {
  userData: CreateUserReq;
  handleCreateLocalUser: (userData: CreateUserReq) => Promise<boolean>;
  disabled: boolean;
  resetUserInput: () => void;
}

export default function NextButton(props: NextButtonProps): JSX.Element {
  // NextButton Styles
  const styles = NextButtonStyles;

  const {userData, handleCreateLocalUser, disabled, resetUserInput} = props;

  const navigation = useNavigation<any>();

  return (
    <View>
      <TouchableOpacity
        style={disabled ? styles.disabled : styles.nextButton}
        disabled={disabled}
        onPress={async () => {
          console.log('다음으로 버튼 클릭');

          const res = await handleCreateLocalUser(userData);

          if (res) {
            Alert.alert('회원가입이 완료되었습니다.', '', [{text: '확인'}], {
              cancelable: false,
            });
            navigation.reset({
              routes: [{name: '로컬 로그인'}],
            });
          } else {
            Alert.alert('회원가입에 실패했습니다.', '', [{text: '확인'}], {
              cancelable: false,
            });
            resetUserInput();
          }
        }}>
        <Text style={styles.nextButtonText}>다음으로</Text>
      </TouchableOpacity>
    </View>
  );
}
