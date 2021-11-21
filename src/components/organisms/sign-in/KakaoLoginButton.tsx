import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';

// Styles
import KakaoLoginButtonStyles from './styles/KakaoLoginButton.style';

export default function KakaoLoginButton(): JSX.Element {
  // KakaoLoginButton Styles
  const styles = KakaoLoginButtonStyles;

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          console.log('카카오 로그인 버튼 클릭');
        }}
        style={styles.kakaoLoginButton}>
        <Text style={styles.kakaoLoginButtonText}>카카오 로그인</Text>
      </TouchableOpacity>
    </View>
  );
}
