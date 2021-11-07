import {StyleSheet} from 'react-native';

const InputUserInfoPageStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',

    backgroundColor: 'black',
  },
  scrollView: {
    alignItems: 'center',
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
    height: 'auto',
  },
  bottomContainer: {
    height: 'auto',
    marginTop: 8,
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

export default InputUserInfoPageStyles;
