import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements/dist/input/Input';

export default function SignInPage(): JSX.Element {
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
    // <View style={styles.root}>
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.titleText}>로그인</Text>
        </View>

        <View style={styles.middleContainer}>
          <Input
            onChangeText={(e: any) => {
              handleUserEmail(e);
            }}
            value={userEmail}
            maxLength={50}
            label="아이디 또는 이메일"
            placeholder="이메일을 입력해주세요."
            keyboardType="email-address"
            returnKeyType="done"
            labelStyle={styles.labelStyle}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            containerStyle={styles.containerStyle}
            placeholderTextColor="#b5b5b5"
          />

          <Input
            onChangeText={(e: any) => {
              handleUserPassword(e);
            }}
            value={userPassword}
            maxLength={50}
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            keyboardType="default"
            returnKeyType="done"
            secureTextEntry={true}
            labelStyle={styles.labelStyle}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            containerStyle={styles.containerStyle}
            placeholderTextColor="#b5b5b5"
          />
        </View>

        <View style={styles.bottomContainer}>
          {/*  */}
          {/*  */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    // display: 'flex',
    alignItems: 'center',

    backgroundColor: 'black',
  },
  container: {
    width: '87.2%',
    height: '100%',
  },
  topContainer: {
    // flex: '16.7%',
    height: '16.7%',
    justifyContent: 'center',

    backgroundColor: 'red',
  },
  middleContainer: {
    // flex: 27.7,
    height: '27.7%',

    backgroundColor: 'green',
  },
  bottomContainer: {
    // flex: 55.6,
    height: '55.6%',

    backgroundColor: 'blue',
  },

  titleText: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 21,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: -1.26,
    color: '#ffffff',
  },
  labelStyle: {
    opacity: 0.8,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0.17,
    textAlign: 'left',
    color: '#ffffff',
  },
  inputStyle: {
    opacity: 0.8,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0.17,
    textAlign: 'left',
    color: '#b5b5b5',
  },
  inputContainerStyle: {
    width: '100%',
    height: 40,
    borderRadius: 2,
    backgroundColor: '#212121',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#eaeaea',
  },
  containerStyle: {
    paddingLeft: 0,
    paddingRight: 0,

    // display: 'flex',
    // height: 'fit',

    // borderColor: 'white',
    // borderWidth: 1,
    // height: 0,

    // width: 300,
    // // flex: 1,
    // height: 40,
  },
});
