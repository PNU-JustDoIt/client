import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';

// Styles
import AuthRequestButtonStyles from './styles/AuthRequestButton.style';

export interface AuthRequestButtonProps {
  userPhone: string;
  // handleSendSMS: (userPhone: string) => Promise<string | null>;
  handleSendSMS: (userPhone: string) => void;
  handleisAuthRequested: (bool: boolean) => void;
  disabled: boolean;
}

export default function AuthRequestButton(
  props: AuthRequestButtonProps,
): JSX.Element {
  // AuthRequest Styles
  const styles = AuthRequestButtonStyles;

  const {userPhone, handleSendSMS, handleisAuthRequested, disabled} = props;

  return (
    <View>
      <TouchableOpacity
        style={styles.requestButton}
        disabled={disabled}
        onPress={async () => {
          console.log('인증번호 받기 버튼 클릭');
          await handleSendSMS(userPhone);
          handleisAuthRequested(true);
        }}>
        <Text style={styles.buttonText}>인증번호 받기</Text>
      </TouchableOpacity>
    </View>
  );
}
