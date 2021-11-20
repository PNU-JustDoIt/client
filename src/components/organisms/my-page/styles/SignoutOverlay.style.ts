import {StyleSheet} from 'react-native';

const SignoutOverlayStyles = StyleSheet.create({
  root: {
    width: '95.7%',
    height: 119,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    position: 'absolute',
    bottom: 48,
    backgroundColor: 'transparent',
  },

  signoutButton: {
    width: '100%',
    height: 56,
    marginBottom: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: '#363636',
  },
  signoutButtonText: {
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: -0.54,
    textAlign: 'center',
    color: '#ffffff',
  },
  cancelButton: {
    height: 56,
    borderRadius: 14,
    backgroundColor: '#5c5c5c',
    marginBottom: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: -0.54,
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default SignoutOverlayStyles;
