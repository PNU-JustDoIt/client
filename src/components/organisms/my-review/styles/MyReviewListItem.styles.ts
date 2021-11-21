import {StyleSheet} from 'react-native';

const MyReviewListItemStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: 120,
    display: 'flex',
    alignItems: 'center',
  },

  reviewButton: {
    width: '100%',
    height: 112,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
  },

  lectureInfoLeftContainer: {
    width: '76.6%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  lectureInfoRightContainer: {
    width: '23.4%',
    height: '100%',
    flexDirection: 'row',
  },
  lectureCategoryContainer: {
    width: 56,
    height: 21,
    marginTop: 29,
    justifyContent: 'center',
    alignItems: 'center',

    opacity: 0.2,
    borderRadius: 20,
    backgroundColor: '#6fa6ff',
  },

  professorNameText: {
    opacity: 0.6,
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: -0.24,
    textAlign: 'left',
    color: '#ffffff',
    marginBottom: 4,
  },
  lectureNameText: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: -0.32,
    textAlign: 'left',
    color: '#ffffff',
    marginBottom: 10.2,
  },
  rating: {
    alignItems: 'flex-start',
  },
  lectureCategoryText: {
    opacity: 1,
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: -0.24,
    textAlign: 'left',
    color: '#0161ff',
  },
  deleteReivewButton: {
    width: 16,
    height: 16,
    marginTop: 32,
    marginLeft: 16,
  },
});

export default MyReviewListItemStyles;
