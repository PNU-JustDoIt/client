import {StyleSheet} from 'react-native';

const PasswordInput = StyleSheet.create({
  labelStyle: {
    opacity: 0.8,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0.17,
    textAlign: 'left',
    color: '#ffffff',
    marginBottom: 8,
  },
  inputContainerStyle: {
    height: 40,
    borderRadius: 2,
    backgroundColor: '#212121',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#eaeaea',
  },
  inputStyle: {
    opacity: 0.8,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0.17,
    textAlign: 'left',
    color: '#b5b5b5',
  },
  containerStyle: {
    height: 40,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 16,
  },
  error: {
    marginLeft: 0,
    marginRight: 0,
    textAlign: 'right',
  },
});

export default PasswordInput;
