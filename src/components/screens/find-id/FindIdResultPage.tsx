import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import FindPasswordButton from '../../organisms/find-id/FindPasswordButton';
import LoginButton from '../../organisms/find-id/LoginButton';

// Styles
import FindIdResultPageStyles from './styles/FindIdResultPage.style';

export default function FindIdResultPage(): JSX.Element {
  // FindIdResultPage Styles
  const styles = FindIdResultPageStyles;

  /**
   * ID dummy
   */
  const result = 'yena****@na***.com';

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.titleText}>아이디 찾기</Text>
        </View>

        <View style={styles.middleContainer}>
          <Text style={styles.idText}>{`아이디: ${result}`}</Text>
          <Text style={styles.explainText}>고객님의 아이디입니다.</Text>
        </View>

        <View style={styles.bottomContainer}>
          <LoginButton />
          <FindPasswordButton />
        </View>
      </View>
    </View>
  );
}
