import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Overlay} from 'react-native-elements/dist/overlay/Overlay';

// Styles
import SignoutOverlayStyles from './styles/SignoutOverlay.style';

export interface SignoutOverlayProps {
  isVisible: boolean;
  onBackdropPress: () => void;
  signout: () => Promise<void>;
}

export default function SignoutOverlay(
  props: SignoutOverlayProps,
): JSX.Element {
  // SignoutOverlay Styles
  const styles = SignoutOverlayStyles;

  const {isVisible, onBackdropPress, signout} = props;

  return (
    <Overlay
      overlayStyle={styles.root}
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}>
      <TouchableOpacity
        onPress={async () => {
          console.log('로그아웃 버튼 클릭');
          await signout();
        }}
        style={styles.signoutButton}>
        <Text style={styles.signoutButtonText}>로그아웃</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          console.log('취소 버튼 클릭');
          onBackdropPress();
        }}
        style={styles.cancelButton}>
        <Text style={styles.cancelButtonText}>취소</Text>
      </TouchableOpacity>
    </Overlay>
  );
}
