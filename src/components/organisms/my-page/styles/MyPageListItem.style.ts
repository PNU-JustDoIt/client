import {StyleSheet} from 'react-native';

const MyPageListItemStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: 48.25,
    display: 'flex',

    backgroundColor: '#1c1c1c',
  },

  button: {
    width: '100%',
    height: 47.25,
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0.17,
    textAlign: 'left',
    color: '#f7f7f7',
    marginLeft: 24,
  },
  horizontalDivider: {
    opacity: 0.3,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#ffffff',
  },
});

export default MyPageListItemStyles;
