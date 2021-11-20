import {StyleSheet} from 'react-native';

const LoginButtonStyles = StyleSheet.create({
  loginButton: {
    width: '100%',
    height: 48,
    borderRadius: 3,
    backgroundColor: '#0161ff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default LoginButtonStyles;
