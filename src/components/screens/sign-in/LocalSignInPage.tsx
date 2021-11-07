import React, {useState} from 'react';
import {Text, View} from 'react-native';

// Styles
import LocalSignInPageStyles from './styles/LocalSignInPage.style';

// Organisms
import IdInput from '../../organisms/sign-in/IdInput';
import PasswordInput from '../../organisms/sign-in/PasswordInput';
import LoginButton from '../../organisms/sign-in/LoginButton';
import FindButton from '../../organisms/sign-in/FindButton';

export default function LocalSignInPage(): JSX.Element {
  // LocalSignInPage Styles
  const styles = LocalSignInPageStyles;

  // 사용자가 입력한 이메일 주소
  const [userEmail, setUserEmail] = useState<string>('');
  const handleUserEmail = (e: any) => {
    setUserEmail(e);
  };

  // 사용자가 입력한 비밀번호
  const [userPassword, setUserPassword] = useState<string>('');
  const handleUserPassword = (e: any) => {
    setUserPassword(e);
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.titleText}>로그인</Text>
        </View>

        <View style={styles.middleContainer}>
          <IdInput userEmail={userEmail} handleUserEmail={handleUserEmail} />
          <PasswordInput
            userPassword={userPassword}
            handleUserPassword={handleUserPassword}
          />
        </View>

        <View style={styles.bottomContainer}>
          <LoginButton userEmail={userEmail} userPassword={userPassword} />
          <FindButton />
        </View>
      </View>
    </View>
  );
}
