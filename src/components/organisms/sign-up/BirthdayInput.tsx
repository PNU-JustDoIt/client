import React from 'react';
import {View} from 'react-native';
import {Input, Text} from 'react-native-elements';

// Styles
import BirthdayInputStyles from './styles/BirthdayInput.style';

export interface BirthdayInputProps {
  userInput: string;
  handleUserInput: (e: any) => void;
  regex: RegExp;

  label: string;
  placeholder: string;
}

export default function BirthdayInput(props: BirthdayInputProps): JSX.Element {
  // Input Styles
  const styles = BirthdayInputStyles;

  const {userInput, handleUserInput, regex, label, placeholder} = props;

  const errorMessage = (): string => {
    if (regex.test(userInput)) return '';
    else return '올바른 형식의 생년월일이 아닙니다.';
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
          maxLength={10}
          placeholder={placeholder}
          keyboardType="numeric"
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
