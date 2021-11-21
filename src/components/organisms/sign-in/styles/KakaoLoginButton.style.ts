import {StyleSheet} from 'react-native';

const KakaoLoginButtonStyles = StyleSheet.create({
  kakaoLoginButton: {
    width: '100%',
    height: 48,
    borderRadius: 4,
    backgroundColor: '#fee500',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kakaoLoginButtonText: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: -0.8,
    textAlign: 'left',
    color: '#191600',
  },
});

export default KakaoLoginButtonStyles;
