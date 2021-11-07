import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';

// Styles
import AuthReRequestButtonStyles from './styles/AuthReRequestButton.style';

export interface AuthReRequestButtonProps {
  handleIsTimeout: (bool: boolean) => void;
  handleisAuthRequested: (bool: boolean) => void;
  disabled: boolean;
}

export default function AuthReRequestButton(
  props: AuthReRequestButtonProps,
): JSX.Element {
  // AuthReRequest Styles
  const styles = AuthReRequestButtonStyles;

  const {handleIsTimeout, handleisAuthRequested, disabled} = props;

  return (
    <View style={disabled ? styles.disabled : styles.root}>
      <TouchableOpacity
        onPress={() => {
          console.log('인증번호 다시받기 버튼 클릭');
          handleIsTimeout(false);
          handleisAuthRequested(false);
        }}
        style={styles.reRequestButton}>
        <Text style={styles.buttonText}>인증번호 다시받기</Text>
      </TouchableOpacity>
    </View>
  );
}
