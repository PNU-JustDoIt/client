import {StyleSheet} from 'react-native';

const AuthRequestButtonStyles = StyleSheet.create({
  requestButton: {
    width: '100%',
    height: 48,
    borderRadius: 3,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ebebeb',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default AuthRequestButtonStyles;
