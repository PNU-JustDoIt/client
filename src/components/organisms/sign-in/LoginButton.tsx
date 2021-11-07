import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';

// Styles
import LoginButtonStyles from './styles/LoginButton.style';

export interface LoginButtonProps {
  userEmail: string;
  userPassword: string;
}

export default function LoginButton(props: LoginButtonProps): JSX.Element {
  // LoginButton Styles
  const styles = LoginButtonStyles;

  const {userEmail, userPassword} = props;

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          console.log('로그인 버튼 클릭');
          console.log('userEmail:', userEmail);
          console.log('userPassword:', userPassword);
        }}
        style={styles.loginButton}>
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
}
