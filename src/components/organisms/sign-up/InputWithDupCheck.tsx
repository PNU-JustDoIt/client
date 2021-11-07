import React from 'react';
import {KeyboardTypeOptions, TouchableOpacity, View} from 'react-native';
import {Text, Input} from 'react-native-elements';
import {Image} from 'react-native-elements/dist/image/Image';

// Styles
import InputWithDupCheckStyles from './styles/InputWithDupCheck.style';

export interface InputWithDupCheckProps {
  userInput: string;
  handleUserInput: (e: any) => void;
  regex: RegExp;

  label: string;
  placeholder: string;
  keyboardType: KeyboardTypeOptions | undefined;
  maxLength: number;
}

export default function InputWithDupCheck(
  props: InputWithDupCheckProps,
): JSX.Element {
  // InputWithDupCheck Styles
  const styles = InputWithDupCheckStyles;

  const {
    userInput,
    handleUserInput,
    regex,
    label,
    placeholder,
    keyboardType,
    maxLength,
  } = props;

  /**
   * 이메일, 닉네임의 경우 중복확인 후 rightIcon 출력하는 것으로 변경해야 함.
   */
  return (
    <View>
      <Text style={styles.labelStyle}>{label}</Text>

      <View style={styles.container}>
        <Input
          rightIcon={
            regex.test(userInput) && (
              <Image
                style={styles.checkedImage}
                source={require('../../../assets/images/sign-up/Checked.png')}
              />
            )
          }
          onChangeText={(e: any) => {
            handleUserInput(e);
          }}
          value={userInput}
          maxLength={maxLength}
          placeholder={placeholder}
          keyboardType={keyboardType}
          returnKeyType="done"
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          containerStyle={styles.containerStyle}
          placeholderTextColor="#b5b5b5"
        />

        <TouchableOpacity
          style={styles.dupCheckButton}
          onPress={() => {
            console.log('중복확인 버튼 클릭');
          }}>
          <Text style={styles.dupCheckButtonText}>중복확인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
