import React from 'react';
import {View} from 'react-native';
import {Input, Text} from 'react-native-elements';

// Styles
import PasswordInputStyles from './styles/PasswordInput.style';

export interface PasswordInputProps {
  mode: 'first-input' | 're-input';
  handleError: () => boolean;

  userInput: string;
  handleUserInput: (e: any) => void;

  label: string;
  placeholder: string;
}

export default function PasswordInput(props: PasswordInputProps): JSX.Element {
  // Input Styles
  const styles = PasswordInputStyles;

  const {mode, handleError, userInput, handleUserInput, label, placeholder} =
    props;

  const errorMessage = (): string => {
    if (handleError()) return '';
    else {
      if (mode === 'first-input') return '비밀번호는 8자리 이상이어야 합니다.';
      else if (mode === 're-input') return '비밀번호가 일치하지 않습니다.';
      else return '';
    }
  };

  return (
    <View>
      <Text style={styles.labelStyle}>{label}</Text>

      <View>
        <Input
          onChangeText={(e: any) => {
            handleUserInput(e);
          }}
          value={userInput}
          maxLength={50}
          placeholder={placeholder}
          keyboardType="default"
          secureTextEntry={true}
          returnKeyType="done"
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          containerStyle={styles.containerStyle}
          placeholderTextColor="#b5b5b5"
          errorMessage={errorMessage()}
          errorStyle={styles.error}
        />
      </View>
    </View>
  );
}
