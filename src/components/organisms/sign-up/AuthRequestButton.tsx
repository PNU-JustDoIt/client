import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';

// Styles
import AuthRequestButtonStyles from './styles/AuthRequestButton.style';

export interface AuthRequestButtonProps {
  handleAuthNumber: () => void;
  handleisAuthRequested: (bool: boolean) => void;
  disabled: boolean;
}

export default function AuthRequestButton(
  props: AuthRequestButtonProps,
): JSX.Element {
  // AuthRequest Styles
  const styles = AuthRequestButtonStyles;

  const {handleAuthNumber, handleisAuthRequested, disabled} = props;

  return (
    <View>
      <TouchableOpacity
        style={styles.requestButton}
        disabled={disabled}
        onPress={() => {
          console.log('인증번호 받기 버튼 클릭');
          handleAuthNumber();
          handleisAuthRequested(true);
        }}>
        <Text style={styles.buttonText}>인증번호 받기</Text>
      </TouchableOpacity>
    </View>
  );
}
