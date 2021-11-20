import {StyleSheet} from 'react-native';

export const LocalSignInPageStyles = StyleSheet.create({
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
    marginTop: 56,
    justifyContent: 'center',
  },
  middleContainer: {
    marginTop: 56,
  },
  bottomContainer: {
    marginTop: 40,
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

export default LocalSignInPageStyles;
