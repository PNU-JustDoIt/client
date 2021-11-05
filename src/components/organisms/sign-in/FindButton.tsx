import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Image} from 'react-native-elements/dist/image/Image';

// Styles
import FindButtonStyles from './styles/FindButton.styles';

export default function FindButton(): JSX.Element {
  // FindButton Styles
  const styles = FindButtonStyles;

  return (
    <View style={styles.findButtonContainer}>
      <TouchableOpacity
        onPress={() => {
          console.log('아이디 찾기 버튼 클릭');
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
