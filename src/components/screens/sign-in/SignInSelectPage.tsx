import React from 'react';
import {View} from 'react-native';

// Organisms
import LocalLoginButton from '../../organisms/sign-in/LocalLoginButton';
import KakaoLoginButton from '../../organisms/sign-in/KakaoLoginButton';
import SignUpButton from '../../organisms/sign-in/SignUpButton';

// Styles
import SignInSelectPageStyles from './styles/SignInSelectPage.style';

export default function SignInSelectPage(): JSX.Element {
  // SignInSelectPage Styles
  const styles = SignInSelectPageStyles;

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.topContainer} />

        <View style={styles.middleContainer}>
          <LocalLoginButton />
          <KakaoLoginButton />
        </View>

        <View style={styles.bottomContainer}>
          <SignUpButton />
        </View>
      </View>
    </View>
  );
}
