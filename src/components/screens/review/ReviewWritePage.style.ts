import {makeStyles} from 'react-native-elements';
export const HEADER_HEIGHT = 96;

const useStyle = makeStyles(() => ({
  root: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 16,
  },
  rootContainer: {
    paddingLeft: '4.3%',
    paddingRight: '4.3%',
  },
  blockMargin: {
    marginBottom: 43,
  },
  /* Header 관련 */
  headerRoot: {
    flex: 1,
    height: HEADER_HEIGHT,
    backgroundColor: '#212121',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerIconContainer: {
    position: 'absolute',
    left: 14,
    bottom: 13,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff',
    marginBottom: 15,
  },

  /* search Overlay 관련 */
  overlay: {
    width: '100%',
    backgroundColor: 'black',
    position: 'absolute',
    top: HEADER_HEIGHT,
    borderRadius: 0,
    padding: 0,
    paddingTop: 16,
  },
  overlayContainer: {
    flex: 1,
    paddingLeft: '4.3%',
    paddingRight: '4.3%',
    marginBottom: 8,
  },

  /* Input Label 관련 */
  labelTitle: {
    fontSize: 17,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: -0.34,
    textAlign: 'left',
    color: '#ffffff',

    marginBottom: 8,
  },
  labelSubTitle: {
    opacity: 0.6,
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: -0.24,
    textAlign: 'left',
    color: '#ffffff',
  },

  /* 수업명 input box */
  lectureNameContainerStyle: {
    height: 40,
    borderRadius: 4,
    backgroundColor: '#404040',
  },
  lectureNameInputContainerStyle: {
    height: 40,
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

  divider: {
    height: 0,
    borderStyle: 'solid',
    borderWidth: 0.7,
    borderColor: '#585858',

    marginBottom: 32,
  },

  /* 수업특징 multi line input box */
  lectureDescriptionContainerStyle: {
    maxHeight: 100,
    borderRadius: 4,
    backgroundColor: '#404040',
    padding: 0,
  },
  lectureDescriptionInputContainerStyle: {
    height: 100,
    borderRadius: 4,
    borderBottomWidth: 0,
  },
  lectureDescriptionInputStyle: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 17,
    letterSpacing: -0.28,
    textAlign: 'left',
    color: '#ffffff',

    textAlignVertical: 'top',
  },

  /* Rating 관련 */
  ratingContainer: {
    alignItems: 'flex-start',
  },

  /* Radio button Group 관련 */
  radioButtonRoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioButtonFlex: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  radioButtonContainer: {
    padding: 0,
    margin: 0,
    borderWidth: 0,
    backgroundColor: 'black',
    marginLeft: 0,
    marginRight: 0,
  },
  radioButtonText: {
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 23,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff',
  },

  /* SubText With Count 관련 */
  subTextRoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 13,
  },
  subText: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: -0.28,
    textAlign: 'center',
    color: '#ffffff',
    textAlignVertical: 'center',
  },
  subTextDecs: {
    fontSize: 10,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 12,
    letterSpacing: -0.4,
    textAlign: 'left',
    color: '#ffffff',
    opacity: 0.8,
  },
  subTextInputRoot: {
    flexDirection: 'row',
  },
  subTextContainer: {
    width: 60,
    height: 21,
    marginRight: 12,
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 0.7,
    borderColor: '#ffffff',
  },
  subTextInputContainer: {
    width: '100%',
    height: 21,
    borderBottomWidth: 0,
  },
  subTextInput: {
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },

  testInfoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 13,
  },
  testInfoSubText: {
    fontSize: 10,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: -0.4,
    textAlign: 'left',
    color: '#ffffff',
    opacity: 0.8,
  },
  testContainerStyle: {
    marginLeft: 0,
    marginRight: 0,
    height: 32,
    backgroundColor: 'black',
    borderWidth: 0,
    marginTop: 13,
    width: '95%',
  },
  testButtonContainerStyle: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  testInnerBorderStyle: {
    width: 0,
  },
  testButtonStyle: {
    width: 64,
    borderRadius: 7,
    borderStyle: 'solid',
    borderWidth: 0.7,
    borderColor: '#ffffff',
  },
  testSelectedButtonStyle: {
    width: 64,
    borderRadius: 7,
    backgroundColor: '#0161ff',
    borderStyle: 'solid',
    borderWidth: 0.7,
    borderColor: '#0161ff',
  },

  /* 이미지 선택 관련 스타일 */
  imageSelectorContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 8,
  },
  galleryOpenButtonContainer: {
    height: 100,
    width: 100,
    marginRight: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#2b2b2b',
  },
  galleryOpenButtonText: {
    fontSize: 11,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: -0.33,
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 6,
  },
  selectedImage: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  closeIconButton: {
    position: 'absolute',
    right: -10,
    top: -10,
    zIndex: 10,
  },

  /* 완료 버튼 */
  completeButtonRoot: {
    flex: 1,
    height: 48,
    borderRadius: 5,
    backgroundColor: '#0161ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 30,
  },
  completeButtonText: {
    fontSize: 17,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff',
  },
}));

export default useStyle;
