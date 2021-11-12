import React from 'react';
import {Platform, ScrollView, Text, View, TouchableOpacity} from 'react-native';

import {
  Input,
  Icon,
  makeStyles,
  Rating,
  AirbnbRating,
  CheckBox,
  ButtonGroup,
  Image,
} from 'react-native-elements';

import {
  launchImageLibrary,
  ImageLibraryOptions,
  Callback,
} from 'react-native-image-picker';

export interface InputLabelProps {
  text: string;
  subText?: string;
}

const useStyle = makeStyles(() => ({
  root: {
    flex: 1,
    backgroundColor: 'black',
  },
  blockMargin: {
    marginBottom: 43,
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

  ratingContainer: {
    alignItems: 'flex-start',
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

  subText: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: -0.28,
    textAlign: 'center',
    color: '#ffffff',
    textAlignVertical: 'center',
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
    backgroundColor: '#555555',
    borderStyle: 'solid',
    borderWidth: 0.7,
    borderColor: '#ffffff',
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
}));

const ReviewWritePage = (): JSX.Element => {
  const styles = useStyle();

  const InputLabel = (props: InputLabelProps): JSX.Element => {
    const {text, subText} = props;
    return (
      <Text
        style={{
          fontSize: 17,
          fontWeight: '600',
          fontStyle: 'normal',
          lineHeight: 20,
          letterSpacing: -0.34,
          textAlign: 'left',
          color: '#ffffff',

          marginBottom: 8,
        }}>
        {text}
        {subText && (
          <Text
            style={{
              opacity: 0.6,
              fontSize: 12,
              fontWeight: 'normal',
              fontStyle: 'normal',
              letterSpacing: -0.24,
              textAlign: 'left',
              color: '#ffffff',
            }}>
            {'\n' + subText}
          </Text>
        )}
      </Text>
    );
  };

  const InputLabelWithLectureInfo = (props: any): JSX.Element => {
    const {labelText, subLabelText, data} = props;

    return (
      <View style={[styles.blockMargin]}>
        <InputLabel text={labelText} subText={subLabelText} />
        <Text style={styles.lectureInfoText}>{data}</Text>
      </View>
    );
  };

  const RadioButtonGroup = (props: any): JSX.Element => {
    const {subText} = props;
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.subText}>{subText}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <CheckBox
            center
            title="있음"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={true}
            checkedColor="white"
            uncheckedColor="gray"
            containerStyle={[styles.radioButtonContainer]}
            textStyle={styles.radioButtonText}
          />
          <CheckBox
            title="없음"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={false}
            checkedColor="white"
            uncheckedColor="gray"
            containerStyle={styles.radioButtonContainer}
            textStyle={styles.radioButtonText}
          />
        </View>
      </View>
    );
  };

  const SubTextWithCountBox = (props: any): JSX.Element => {
    const {subText, desc} = props;
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 13,
        }}>
        <Text style={styles.subText}>
          {subText}
          {desc && (
            <Text
              style={{
                fontSize: 10,
                fontWeight: 'normal',
                fontStyle: 'normal',
                lineHeight: 12,
                letterSpacing: -0.4,
                textAlign: 'left',
                color: '#ffffff',
                opacity: 0.8,
              }}>
              &nbsp;&nbsp; {desc}
            </Text>
          )}
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Input
            defaultValue="0"
            keyboardType="phone-pad"
            maxLength={1}
            containerStyle={{
              width: 40,
              height: 21,
              marginRight: 12,
              borderRadius: 4,
              borderStyle: 'solid',
              borderWidth: 0.7,
              borderColor: '#ffffff',
            }}
            inputContainerStyle={{
              width: '100%',
              height: 21,
              borderBottomWidth: 0,
            }}
            selectionColor="white"
            inputStyle={{
              fontSize: 15,
              fontWeight: 'normal',
              fontStyle: 'normal',
              letterSpacing: 0,
              textAlign: 'center',
              color: '#ffffff',
            }}
          />
          <Text
            style={[styles.subText, Platform.OS === 'ios' && {marginTop: 2}]}>
            회
          </Text>
        </View>
      </View>
    );
  };

  const ConfirmImageSelector = (props: any): JSX.Element => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      maxHeight: 300,
      maxWidth: 300,
      selectionLimit: 1,
    };

    return (
      <View style={styles.imageSelectorContainer}>
        <TouchableOpacity
          onPress={() =>
            launchImageLibrary(options, res => {
              const selectedImage = res.assets;
              if (selectedImage && selectedImage[0].uri) {
                setLectureConfirmImage(selectedImage[0].uri);
              } else {
                console.log('[Error : 갤러리 내 이미지 선택]');
              }
            })
          }
          style={styles.galleryOpenButtonContainer}>
          <Icon
            name="image"
            type="material"
            color="#ffffff"
            tvParallaxProperties={undefined}
            size={50}
          />
          <Text style={styles.galleryOpenButtonText}>이미지 추가</Text>
        </TouchableOpacity>

        {lectureConfirmImage && (
          <View>
            <Image
              source={{
                uri: lectureConfirmImage,
              }}
              style={styles.selectedImage}
            />

            <TouchableOpacity
              onPress={() => setLectureConfirmImage(undefined)}
              style={styles.closeIconButton}>
              <Icon
                name="cancel"
                type="material"
                color="#ffffff"
                tvParallaxProperties={undefined}
                size={25}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  const [lectureConfirmImage, setLectureConfirmImage] =
    React.useState<string>();

  return (
    <ScrollView style={styles.root}>
      <View style={[styles.blockMargin]}>
        <InputLabel text="수업명" />
        <Input
          containerStyle={[styles.lectureNameContainerStyle]}
          inputContainerStyle={[styles.lectureNameInputContainerStyle]}
          inputStyle={[styles.lectureNameInputStyle]}
          selectionColor="white"
          leftIconContainerStyle={[styles.lectureNameInputLeftIconContainer]}
          leftIcon={styles.lectureNameInputLeftIcon}
        />
      </View>

      <InputLabelWithLectureInfo labelText="교과목 코드 · 분반" data="-" />
      <InputLabelWithLectureInfo labelText="교과구분" data="-" />
      <InputLabelWithLectureInfo labelText="학점 · 이론 · 실습" data="-" />

      <View style={styles.divider} />

      <View style={styles.blockMargin}>
        <InputLabel
          text="수강 인증"
          subText="수강 화면, 필기 내용, 출석표, 시간표 등 이미지로 인증해 주세요."
        />
        <ConfirmImageSelector />
      </View>

      <View style={[styles.blockMargin]}>
        <InputLabel text="수업 특징" />
        <Input
          containerStyle={styles.lectureDescriptionContainerStyle}
          inputContainerStyle={styles.lectureDescriptionInputContainerStyle}
          inputStyle={styles.lectureDescriptionInputStyle}
          selectionColor="white"
          multiline
          numberOfLines={2}
        />
      </View>

      <View style={[styles.blockMargin]}>
        <InputLabel text="교재 활용도" />
        <ButtonGroup
          selectMultiple
          selectedIndexes={[1, 2]}
          buttons={['필수', '높음', '보통', '낮음', '활용 X']}
          containerStyle={[styles.testContainerStyle, {width: '100%'}]}
          buttonContainerStyle={styles.testButtonContainerStyle}
          innerBorderStyle={styles.testInnerBorderStyle}
          buttonStyle={[styles.testButtonStyle]}
          selectedButtonStyle={[styles.testSelectedButtonStyle]}
        />
      </View>

      <View style={[styles.blockMargin]}>
        <InputLabel text="수업 체감난이도" />
        <View style={styles.ratingContainer}>
          <Rating
            type="custom"
            imageSize={26}
            ratingColor="white"
            ratingBackgroundColor="black"
            tintColor="black"
            startingValue={5}
          />
        </View>
      </View>

      <View style={[styles.blockMargin]}>
        <InputLabel text="과제 · 리포트" />
        <RadioButtonGroup subText="과제 · 리포트 유무" />
      </View>

      <View style={[styles.blockMargin]}>
        <InputLabel text="조별" />
        <RadioButtonGroup subText="조별 유무" />
      </View>

      <View style={[styles.blockMargin]}>
        <InputLabel text="학기 중 시험" />
        <SubTextWithCountBox subText="시험 총 횟수" desc="(중간 · 기말고사)" />
        <SubTextWithCountBox subText="퀴즈 · 기타 시험" />

        <View style={styles.testInfoContainer}>
          <Text style={styles.subText}>
            시험 유형
            <Text style={styles.testInfoSubText}>
              &nbsp;&nbsp; (중복 선택 가능)
            </Text>
          </Text>

          <ButtonGroup
            selectMultiple
            selectedIndexes={[1, 2]}
            buttons={['O/X형', '객관형', '단답형', '서술형']}
            containerStyle={styles.testContainerStyle}
            buttonContainerStyle={styles.testButtonContainerStyle}
            innerBorderStyle={styles.testInnerBorderStyle}
            buttonStyle={styles.testButtonStyle}
            selectedButtonStyle={styles.testSelectedButtonStyle}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ReviewWritePage;
