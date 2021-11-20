import {useNavigation} from '@react-navigation/core';
import React, {useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import UserContext from '../../../utils/context/User.context';

// Styles
import LoginButtonStyles from './styles/LoginButton.style';

export interface LoginButtonProps {
  userEmail: string;
  userPassword: string;
  handleIsLoading: (bool: boolean) => void;
}

export default function LoginButton(props: LoginButtonProps): JSX.Element {
  // LoginButton Styles
  const styles = LoginButtonStyles;

  const {userEmail, userPassword, handleIsLoading} = props;

  const userContext = useContext(UserContext);

  const navigation = useNavigation<any>();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          console.log('로그인 버튼 클릭');

          handleIsLoading(true);

          userContext
            .localLogin(userEmail, userPassword)
            .then(res => {
              console.log('localLogin: res:', res);

              handleIsLoading(false);
              navigation.navigate('마이페이지');
            })
            .catch(err => {
              console.log('localLogin: err:', err);
              /**
               * 로그인 실패 Modal
               */
              handleIsLoading(false);
            });
        }}
        style={styles.loginButton}>
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
}
