import {StyleSheet} from 'react-native';

const InputPhoneNumberPageStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',

    backgroundColor: 'black',
  },
  container: {
    width: '87.2%',
    height: '100%',
  },
  topContainer: {
    paddingTop: 56,
    paddingBottom: 61,
    alignItems: 'center',
  },
  middleContainer: {
    height: 195,
  },
  bottomContainer: {
    marginTop: 20,
  },

  titleText: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 21,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: -1.26,
    color: '#ffffff',
  },
});

export default InputPhoneNumberPageStyles;
