import {StyleSheet} from 'react-native';

const FindIdResultPageStyles = StyleSheet.create({
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
    height: '22.9%',
    paddingTop: 56,
    alignItems: 'center',
  },
  middleContainer: {
    height: '63.1%',
  },
  bottomContainer: {
    height: '14%',
  },

  titleText: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 21,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: -1.26,
    textAlign: 'center',
    color: '#ffffff',
  },
  idText: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 21,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: -1.26,
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 22,
  },
  explainText: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#969696',
  },
});

export default FindIdResultPageStyles;
