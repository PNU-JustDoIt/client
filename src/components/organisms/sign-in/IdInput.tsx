import React from 'react';
import {View} from 'react-native';
import {Input, Text} from 'react-native-elements';

// Styles
import IdInputStyles from './styles/IdInput.styles';

export interface IdInputProps {
  userEmail: string;
  handleUserEmail: (e: any) => void;
}

export default function IdInput(props: IdInputProps): JSX.Element {
  // IdInput Styles
  const styles = IdInputStyles;

  const {userEmail, handleUserEmail} = props;

  return (
    <View>
      <Text style={styles.labelStyle}>아이디 또는 이메일</Text>
      <Input
        onChangeText={(e: any) => {
          handleUserEmail(e);
        }}
        value={userEmail}
        maxLength={50}
        placeholder="이메일을 입력해주세요."
        keyboardType="email-address"
        returnKeyType="done"
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        containerStyle={styles.containerStyle}
        placeholderTextColor="#b5b5b5"
      />
    </View>
  );
}
