import {StyleSheet} from 'react-native';

const FindPasswordButtonStyles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  findPasswordButton: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  findPasswordButtonText: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#969696',
    textDecorationLine: 'underline',
  },
});

export default FindPasswordButtonStyles;
