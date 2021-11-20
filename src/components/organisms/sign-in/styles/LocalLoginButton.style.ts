import {StyleSheet} from 'react-native';

const LocalLoginButtonStyles = StyleSheet.create({
  localLoginButton: {
    width: '100%',
    height: 48,
    borderRadius: 3,
    backgroundColor: '#454545',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  localLoginButtonText: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default LocalLoginButtonStyles;
