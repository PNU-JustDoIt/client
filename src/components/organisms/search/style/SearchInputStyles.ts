import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3c3c3c',
    borderRadius: 4,
    marginHorizontal: 5,
    display: 'flex',
    color: 'white',
  },
  overlayContainer: {
    flex: 1,
    paddingLeft: '4.3%',
    paddingRight: '4.3%',
    marginBottom: 8,
  },
  overlayStyle: {
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 0,
    padding: 0,
    position: 'absolute',
    top: 94,
  },
  /* 수업명 input box */
  lectureNameContainerStyle: {
    height: 50,
    borderRadius: 4,
    backgroundColor: '#404040',
  },
  lectureNameInputContainerStyle: {
    height: 50,
    borderRadius: 4,
    borderBottomWidth: 0,
  },
  lectureNameInputStyle: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 17,
    letterSpacing: -0.28,
    textAlign: 'left',
    color: '#ffffff',
  },
  lectureNameInputLeftIcon: {
    type: 'font-awesome',
    name: 'search',
    color: 'white',
    size: 16,
  },
  lectureNameInputLeftIconContainer: {
    marginRight: 8,
  },

  lectureInfoText: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 17,
    letterSpacing: -0.28,
    textAlign: 'left',
    color: '#ffffff',
  },

  /* Search Result 관련 */
  flatList: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: '#262626',
    maxHeight: 600,
  },
  ListRoot: {
    flex: 1,
    backgroundColor: '#262626',
    flexDirection: 'row',
    height: 50,
  },
  listLectureTextContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 28,
  },
  listLectureText: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff',
  },
  listLectureInfoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  listLectureInfoLeftText: {
    opacity: 0.6,
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff',
    marginRight: 8,
  },
  listLectureInfoRightText: {
    opacity: 0.8,
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff',
  },
});

export default styles;
