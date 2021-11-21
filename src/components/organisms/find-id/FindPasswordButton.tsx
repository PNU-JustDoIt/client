import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';

// Styles
import FindPasswordButtonStyles from './styles/FindPasswordButton.style';

export default function FindPasswordButton(): JSX.Element {
  // FindPasswordButton Styles
  const styles = FindPasswordButtonStyles;

  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.findPasswordButton}
        onPress={() => {
          console.log('비밀번호 찾기 버튼 클릭');
        }}>
        <Text style={styles.findPasswordButtonText}>비밀번호 찾기</Text>
      </TouchableOpacity>
    </View>
  );
}
