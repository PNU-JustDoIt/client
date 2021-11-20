import {StyleSheet} from 'react-native';

const ResignOverlayStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: 164,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',

    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: '#2b2b2b',
  },
  container: {
    width: '87.2%',
    height: '100%',
    alignItems: 'center',
  },
  expainContainer: {
    width: '100%',
    marginTop: 22,
    marginBottom: 11,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  deleteButtonContainer: {
    width: '100%',
    borderRadius: 3,
    backgroundColor: '#0161ff',
  },
  deleteButtonContainerDisabled: {
    width: '100%',
    borderRadius: 3,
    backgroundColor: '#0161ff',

    opacity: 0.6,
  },

  agreeButton: {
    width: 24,
    height: 24,
  },
  agreeButtonImage: {
    marginRight: 7,
  },
  explainText: {
    width: '91.7%',
    opacity: 0.6,
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff',
  },
  deleteButton: {
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default ResignOverlayStyles;
