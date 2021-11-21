import {StyleSheet} from 'react-native';

const InputWithDupCheckStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

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
  checkedImage: {
    width: 19,
    height: 19,
    marginRight: 11,
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
    width: '73%',
    height: 40,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 16,
  },
  dupCheckButton: {
    width: '25%',
    height: 40,
    borderRadius: 2,
    backgroundColor: '#0161ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dupCheckButtonText: {
    opacity: 0.8,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0.17,
    textAlign: 'left',
    color: '#ffffff',
  },
});

export default InputWithDupCheckStyles;
