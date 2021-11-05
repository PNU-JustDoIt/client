import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Text} from 'react-native-elements';

export interface PasswordInputProps {
  userPassword: string;
  handleUserPassword: (e: any) => void;
}

export default function PasswordInput(props: PasswordInputProps): JSX.Element {
  const {userPassword, handleUserPassword} = props;

  return (
    <View>
      <Text style={styles.labelStyle}>비밀번호</Text>
      <Input
        onChangeText={(e: any) => {
          handleUserPassword(e);
        }}
        value={userPassword}
        maxLength={50}
        placeholder="비밀번호를 입력해주세요."
        keyboardType="default"
        returnKeyType="done"
        secureTextEntry={true}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        containerStyle={styles.containerStyle}
        placeholderTextColor="#b5b5b5"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    opacity: 0.8,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0.17,
    textAlign: 'left',
    color: '#ffffff',
    paddingBottom: 8,
  },
  inputContainerStyle: {
    height: 40,
    borderRadius: 2,
    backgroundColor: '#212121',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#eaeaea',
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
  containerStyle: {
    height: 40,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 8,
  },
});
