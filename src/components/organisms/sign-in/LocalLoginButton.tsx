import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';

// Styles
import LocalLoginButtonStyles from './styles/LocalLoginButton.style';

export default function LocalLoginButton(): JSX.Element {
  // LocalLoginButton Styles
  const styles = LocalLoginButtonStyles;

  const navigation = useNavigation<any>();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          console.log('로그인 버튼 클릭');
          navigation.navigate('로컬 로그인');
        }}
        style={styles.localLoginButton}>
        <Text style={styles.localLoginButtonText}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
}
