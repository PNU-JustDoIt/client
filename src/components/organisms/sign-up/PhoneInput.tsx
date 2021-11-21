import React from 'react';
import {View} from 'react-native';
import {Image, Input, Text} from 'react-native-elements';

// Styles
import InputStyles from './styles/Input.styles';

export interface PhoneInputProps {
  userPhone: string;
  handleUserPhone: (e: any) => void;
  phoneRegex: RegExp;
  disabled: boolean;
}
export default function PhoneInput(props: PhoneInputProps): JSX.Element {
  // Input Styles
  const styles = InputStyles;

  const {userPhone, handleUserPhone, phoneRegex, disabled} = props;

  return (
    <View>
      <Text style={styles.labelStyle}>휴대전화</Text>
      <Input
        disabled={disabled}
        rightIcon={
          phoneRegex.test(userPhone) && (
            <Image
              style={styles.checkedImage}
              source={require('../../../assets/images/sign-up/Checked.png')}
            />
          )
        }
        onChangeText={(e: any) => {
          handleUserPhone(e);
        }}
        value={userPhone}
        maxLength={13}
        placeholder="000-0000-0000"
        keyboardType="number-pad"
        returnKeyType="done"
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        containerStyle={styles.containerStyle}
        placeholderTextColor="#b5b5b5"
      />
    </View>
  );
}
