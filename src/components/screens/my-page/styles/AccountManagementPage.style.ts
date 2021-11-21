import {StyleSheet} from 'react-native';

const AccountManagementPageStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',

    backgroundColor: 'black',
  },
  headerContainer: {
    width: '100%',
    height: 88,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',

    borderBottomColor: '#0161ff',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#212121',
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 42,
  },
  inputContainerWraper: {
    width: '87.5%',
    height: 'auto',
  },

  goBackButton: {
    width: 24,
    height: 24,
    position: 'absolute',
    bottom: 8,
    left: 16,
  },
  goBackButtonImage: {
    width: '100%',
    height: '100%',
  },
  headerText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff',

    position: 'absolute',
    bottom: 8,
  },
  saveButton: {
    width: '100%',
    height: 48,
    marginTop: 223,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 3,
    backgroundColor: '#0161ff',

    opacity: 1,
  },
  saveButtonDisabled: {
    width: '100%',
    height: 48,
    marginTop: 223,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 3,
    backgroundColor: '#454545',

    opacity: 0.58,
  },
  saveButtonText: {
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: -0.54,
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default AccountManagementPageStyles;
