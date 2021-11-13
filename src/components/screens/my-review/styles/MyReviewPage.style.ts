import {StyleSheet} from 'react-native';

const MyReviewPageStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',

    backgroundColor: 'black',
  },
  titleContainer: {
    width: '100%',
    paddingTop: 56,
    alignItems: 'center',

    borderBottomColor: '#0161ff',
    borderBottomWidth: 1,
  },
  container: {
    width: '100%',
    height: '100%',
  },

  titleText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff',
    marginBottom: 8,
  },
});

export default MyReviewPageStyles;
