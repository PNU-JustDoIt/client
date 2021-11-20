import useAxios from 'axios-hooks';
import React, {useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text, Input} from 'react-native-elements';
import UserContext from '../../../utils/context/User.context';

// Styles
import styles from './styles/NewPasswordInput.style';

export interface InputWithDupCheckProps {
  currentPassword: string;
  userInput: string;
  handleUserInput: (e: any) => void;
  handleError: () => number;
}

export default function InputWithDupCheck(
  props: InputWithDupCheckProps,
): JSX.Element {
  const {currentPassword, userInput, handleUserInput, handleError} = props;

  const userContext = useContext(UserContext);

  const errorMessage = (): string => {
    if (handleError() === -1) return '신규 비밀번호의 양식이 잘못되었습니다.';
    else if (currentPassword.length !== 0 && handleError() === -2)
      return '현재 비밀번호와 신규 비밀번호가 같습니다.';
    else if (handleError() === -3) return '';
    else return '';
  };

  const [{}, executeUpdateUserPassword] = useAxios<boolean>(
    {
      method: 'PUT',
      url: 'user/change-user-password',
    },
    {manual: true},
  );

  return (
    <View>
      <Text style={styles.labelStyle}>신규 비밀번호</Text>

      <View style={styles.container}>
        <Input
          onChangeText={(e: any) => {
            handleUserInput(e);
          }}
          value={userInput}
          maxLength={50}
          placeholder="8-50자 이내"
          keyboardType="default"
          secureTextEntry={true}
          returnKeyType="done"
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          containerStyle={styles.containerStyle}
          placeholderTextColor="#b5b5b5"
          errorMessage={errorMessage()}
          errorStyle={styles.error}
        />

        <TouchableOpacity
          style={styles.changeButton}
          disabled={handleError() !== 1}
          onPress={async () => {
            console.log('변경 버튼 클릭');

            executeUpdateUserPassword({
              data: {
                user_email: userContext.user?.user_email,
                current_password: currentPassword,
                new_password: userInput,
              },
            })
              .then(async res => {
                console.log('[executeUpdateUserPassword] res.data:', res.data);
                await userContext.signout();
              })
              .catch(err => {
                console.log('[executeUpdateUserPassword] err:', err);
              });
          }}>
          <Text style={styles.changeButtonText}>변경</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
