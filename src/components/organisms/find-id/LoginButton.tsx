import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';

// Styles
import LoginButtonStyles from './styles/LoginButton.style';

export default function LoginButton(): JSX.Element {
  // LoginButton Styles
  const styles = LoginButtonStyles;

  const navigation = useNavigation<any>();

  return (
    <View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          console.log('로그인 하기 버튼 클릭');

          navigation.reset({
            routes: [{name: '로컬 로그인'}],
          });
        }}>
        <Text style={styles.loginButtonText}>로그인 하기</Text>
      </TouchableOpacity>
    </View>
  );
}
