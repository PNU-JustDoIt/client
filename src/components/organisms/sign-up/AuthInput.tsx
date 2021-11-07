import React from 'react';
import {View} from 'react-native';
import {Input, Text} from 'react-native-elements';
import {Image} from 'react-native-elements/dist/image/Image';
import AuthCounter from './AuthCounter';

// Styles
import InputStyles from './styles/Input.styles';

export interface AuthInputProps {
  userAuth: string;
  handleUserAuth: (e: any) => void;
  isTimeout: boolean;
  handleIsTimeout: (bool: boolean) => void;
  isAuthenticated: boolean;
  handleIsAuthenticated: (bool: boolean) => void;
  disabled: boolean;
}
export default function AuthInput(props: AuthInputProps): JSX.Element {
  // Input Styles
  const styles = InputStyles;

  const {
    userAuth,
    handleUserAuth,
    isTimeout,
    handleIsTimeout,
    isAuthenticated,
    handleIsAuthenticated,
    disabled,
  } = props;

  return (
    <View style={disabled && styles.disabled}>
      <Text style={styles.labelStyle}>인증번호</Text>
      <Input
        // rightIcon={
        //   !disabled && <AuthCounter handleIsTimeout={handleIsTimeout} />
        // }
        rightIcon={
          !disabled && !isAuthenticated ? (
            <>
              <AuthCounter handleIsTimeout={handleIsTimeout} />
            </>
          ) : (
            <>
              <Image
                style={styles.checkedImage}
                source={require('../../../assets/images/sign-up/Checked.png')}
              />
            </>
          )
        }
        disabled={isTimeout || isAuthenticated}
        onChangeText={(e: any) => {
          handleUserAuth(e);
        }}
        value={userAuth}
        maxLength={4}
        placeholder="인증번호를 입력해주세요."
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
