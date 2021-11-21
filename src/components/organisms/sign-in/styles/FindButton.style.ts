import {StyleSheet} from 'react-native';

const FindButtonStyles = StyleSheet.create({
  findButtonContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  findIdButton: {
    paddingRight: 16,
  },
  verticalDividerImage: {
    width: 8,
    height: 16,
  },
  findPasswordButton: {
    paddingLeft: 16,
  },
  findButtonText: {
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

export default FindButtonStyles;
