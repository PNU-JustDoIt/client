import {StyleSheet} from 'react-native';

const NextButtonStyles = StyleSheet.create({
  disabled: {
    width: '100%',
    height: 48,
    borderRadius: 3,
    backgroundColor: '#454545',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000000',
    justifyContent: 'center',
    opacity: 0.5,
  },

  nextButton: {
    width: '100%',
    height: 48,
    borderRadius: 3,
    backgroundColor: '#454545',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000000',
    justifyContent: 'center',
  },
  nextButtonText: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default NextButtonStyles;
