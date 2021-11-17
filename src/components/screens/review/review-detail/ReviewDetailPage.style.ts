import {makeStyles} from 'react-native-elements';

const useStyle = makeStyles(() => ({
  root: {
    flex: 1,
    backgroundColor: 'black',
    paddingLeft: '4.3%',
    paddingRight: '4.3%',
    paddingTop: 16,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#9d9d9d',
    marginBottom: 8,
  },
  cardTitleText: {
    fontSize: 17,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 23,
    letterSpacing: -0.34,
    textAlign: 'left',
    color: '#ffffff',
    marginBottom: 14,
  },
  cardContentContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
  },
  cardPropertyText: {
    width: 94,
    opacity: 0.7,
    fontSize: 13,
    fontWeight: '300',
    fontStyle: 'normal',
    letterSpacing: -0.65,
    textAlign: 'left',
    color: '#ffffff',
    marginRight: 18,
  },
  cardDescriptionText: {
    fontSize: 13,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: -0.65,
    textAlign: 'left',
    color: '#ffffff',
  },

  chipContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  chip: {
    width: 48,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderStyle: 'solid',
    borderWidth: 0.7,
    borderColor: '#ffffff',
    marginRight: 8,
  },
  chipText: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: -0.24,
    textAlign: 'left',
    color: '#ffffff',
  },
}));

export default useStyle;
