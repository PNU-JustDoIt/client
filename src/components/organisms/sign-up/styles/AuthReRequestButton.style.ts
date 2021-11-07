import {StyleSheet} from 'react-native';

const AuthReRequestButtonStyles = StyleSheet.create({
  disabled: {
    display: 'none',
  },

  root: {
    width: '100%',
    alignItems: 'flex-end',
  },
  reRequestButton: {
    width: '40%',
    height: 20,
    alignItems: 'flex-end',
  },
  buttonText: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#969696',
  },
});

export default AuthReRequestButtonStyles;
