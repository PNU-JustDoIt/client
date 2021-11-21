import {StyleSheet} from 'react-native';

const SignInSelectPageStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',

    backgroundColor: 'black',
  },
  container: {
    width: '87.2%',
  },
  topContainer: {
    width: '100%',
    height: '17.7%',
  },
  middleContainer: {
    width: '100%',
    height: '21.7%',
  },
  bottomContainer: {
    width: '100%',
    height: '60.6%',

    opacity: 0.56,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderColor: '#b5b5b5',
  },

  verticalDividerImage: {
    width: '100%',
    height: 1,
  },
});

export default SignInSelectPageStyles;
