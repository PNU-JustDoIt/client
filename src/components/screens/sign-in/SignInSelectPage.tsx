import React from 'react';
import {StyleSheet, View} from 'react-native';

// Organisms
import LocalLoginButton from '../../organisms/sign-in/LocalLoginButton';
import KakaoLoginButton from '../../organisms/sign-in/KakaoLoginButton';
import SignUpButton from '../../organisms/sign-in/SignUpButton';
import {useNavigation} from '@react-navigation/native';

export default function SignInSelectPage(): JSX.Element {
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

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',

    backgroundColor: 'black',
  },
  container: {
    width: '87.2%',
  },
  topContainer: {
    width: '100%',
    height: '17.7%',
  },
  middleContainer: {
    width: '100%',
    height: '21.7%',
  },
  bottomContainer: {
    width: '100%',
    height: '60.6%',

    opacity: 0.56,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderColor: '#b5b5b5',
  },

  verticalDividerImage: {
    width: '100%',
    height: 1,
  },
});
