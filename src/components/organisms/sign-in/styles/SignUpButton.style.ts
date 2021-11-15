import {StyleSheet} from 'react-native';

const SignUpButtonStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: 25,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signUpButton: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButtonText: {
    opacity: 0.8,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0.17,
    textAlign: 'left',
    color: '#ffffff',
  },
});

export default SignUpButtonStyles;
