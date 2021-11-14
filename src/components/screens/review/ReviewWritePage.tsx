import React from 'react';
import {
  Platform,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {
  Input,
  Icon,
  Rating,
  CheckBox,
  ButtonGroup,
  Image,
} from 'react-native-elements';
import {Overlay} from 'react-native-elements/dist/overlay/Overlay';

import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';

import useEventTargetValue from '../../../utils/hooks/useEventTargetValue';
import {lectureData, LectureData} from './lectureData';

import useStyle from './ReviewWritePage.style';

export interface InputLabelProps {
  text: string;
  subText?: string;
}

const ReviewWritePage = (): JSX.Element => {
  const styles = useStyle();

  const InputLabel = (props: InputLabelProps): JSX.Element => {
    const {text, subText} = props;
    return (
      <Text style={styles.labelTitle}>
        {text}
        {subText && <Text style={styles.labelSubTitle}>{'\n' + subText}</Text>}
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

  const RadioButtonGroup = (props: {
    subText: string;
    radioValues: Array<boolean>;
    handleRadioValues: (newState: boolean, idx: number) => void;
    idx: number;
  }): JSX.Element => {
    const {subText, radioValues, handleRadioValues, idx} = props;
    const checked = radioValues[idx];

    return (
      <View style={styles.radioButtonRoot}>
        <Text style={styles.subText}>{subText}</Text>
        <View style={styles.radioButtonFlex}>
          <CheckBox
            center
            title="있음"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked}
            checkedColor="#0161ff"
            uncheckedColor="gray"
            containerStyle={[styles.radioButtonContainer]}
            textStyle={styles.radioButtonText}
            onPress={() => handleRadioValues(true, idx)}
          />
          <CheckBox
            title="없음"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={!checked}
            checkedColor="#0161ff"
            uncheckedColor="gray"
            containerStyle={styles.radioButtonContainer}
            textStyle={styles.radioButtonText}
            onPress={() => handleRadioValues(false, idx)}
          />
        </View>
      </View>
    );
  };

  const SubTextWithCountBox = (props: {
    subText: string;
    desc?: string;
    value: string;
    handleChange: (e: string) => void;
  }): JSX.Element => {
    const {subText, desc, value, handleChange} = props;

    return (
      <View style={styles.subTextRoot}>
        <Text style={styles.subText}>
          {subText}
          {desc && <Text style={styles.subTextDecs}>&nbsp;&nbsp; {desc}</Text>}
        </Text>
        <View style={styles.subTextInputRoot}>
          <Input
            keyboardType="phone-pad"
            maxLength={3}
            containerStyle={styles.subTextContainer}
            inputContainerStyle={styles.subTextInputContainer}
            selectionColor="white"
            inputStyle={styles.subTextInput}
            value={value}
            onChangeText={(e: string) => {
              if (/^\d+$/.test(e)) {
                handleChange(String(Number(e)));
              } else {
                handleChange('0');
              }
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

  /**
   * @name 검색할_수업명
   */
  const lectureNameInput = useEventTargetValue('');

  /**
   * @name 수강인증_이미지_URL
   */
  const [lectureConfirmImage, setLectureConfirmImage] =
    React.useState<string>();

  /**
   * @name 검색된_수업정보
   */
  const [searchedLectureInfo, setSearchedLectureInfo] = React.useState<{
    lectureName: string;
    codeAndGroup: string;
    category: string;
    gradeAndTheory: string;
  }>({
    lectureName: '',
    codeAndGroup: '-', //교과목 코드/분반,  ex) EA1301/061
    category: '-', // 교과구분, ex)  일선
    gradeAndTheory: '-', // 학점이론실습, ex) 3/3/2
  });

  /**
   * @name 수업특징
   */
  const lectureDescriptionInput = useEventTargetValue('');

  /**
   * @name 교재활용도
   */
  const BOOK_STATE_LIST = ['필수', '높음', '보통', '낮음', '활용 X']; // database 에 저장 요청 할 실제 값 배열, bookStateIndex 값으로 접근
  const [bookStateIndex, setBookStateIndex] = React.useState<number>(0);

  /**
   * @name 수업체감난이도
   */
  const [ratingValue, setRatingValue] = React.useState<number>(5);

  /**
   * @name 과제_및_조별유무
   */
  const [radioValues, setRadioValues] = React.useState<Array<boolean>>([
    false,
    false,
  ]);
  const handleRadioValues = (newState: boolean, idx: number) => {
    const newOne = radioValues;
    newOne[idx] = newState;
    setRadioValues([...newOne]);
  };

  /**
   * @name 학기중_시험_횟수
   */
  const [mainTestCount, setMainTestCount] = React.useState<string>('');
  const [subTestCount, setSubTestCount] = React.useState<string>('');

  /**
   * @name 시험_유형
   */
  const TEST_CATEGORY_STATE_LIST = ['O/X형', '객관형', '단답형', '서술형']; // database 에 저장 요청 할 실제 값 배열, bookStateIndex 값으로 접근
  const [testCategoryStateIndexs, setTestCategoryStateIndexs] = React.useState<
    number[]
  >([]);

  /**
   * @name 스크롤뷰_ref
   */
  const scrollRef = React.useRef<ScrollView>(null);
  const onPressTouch = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        y: 0,
        animated: false,
      });
    }
  };
  const [isVisible, setIsVisible] = React.useState(false);

  interface SearchFlatListProps {
    data: LectureData[];
  }

  const handleLectureData = (target: string): LectureData[] => {
    return lectureData.filter(each => each.lecture_name.includes(target));
  };

  const SearchResultFlatList = (props: SearchFlatListProps) => {
    const {data} = props;

    return (
      <FlatList
        data={data}
        style={styles.flatList}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.ListRoot}
              onPress={() => {
                const result = {
                  lectureName: item.lecture_name,
                  codeAndGroup: item.lecture_code + '-' + item.lecture_group, //교과목 코드/분반,  ex) EA1301/061
                  category: item.lecture_category, // 교과구분, ex)  일선
                  gradeAndTheory:
                    item.lecture_grade +
                    ' · ' +
                    item.lecture_theory +
                    ' · ' +
                    item.lecture_training, // 학점이론실습, ex) 3/3/2
                };
                setSearchedLectureInfo(result);
                lectureNameInput.setValue(result.lectureName);
                setIsVisible(false);
              }}>
              <View style={styles.listLectureTextContainer}>
                <Text style={styles.listLectureText}>{item.lecture_name}</Text>
              </View>
              <View style={styles.listLectureInfoContainer}>
                <Text style={styles.listLectureInfoLeftText}>
                  {item.lecture_code + '-' + item.lecture_group}
                </Text>
                <Text style={styles.listLectureInfoRightText}>
                  {item.lecture_professor_name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  return (
    <ScrollView scrollsToTop={true} ref={scrollRef}>
      <View style={styles.headerRoot}>
        <TouchableOpacity style={styles.headerIconContainer}>
          <Icon
            name="close"
            type="material"
            color="#ffffff"
            tvParallaxProperties={undefined}
            size={30}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>후기 작성하기</Text>
      </View>

      <Overlay
        isVisible={isVisible}
        onBackdropPress={() => {
          setIsVisible(false);
        }}
        overlayStyle={styles.overlay}>
        <View style={styles.overlayContainer}>
          <InputLabel text="수업명" />
          <Input
            containerStyle={[styles.lectureNameContainerStyle]}
            inputContainerStyle={[styles.lectureNameInputContainerStyle]}
            inputStyle={[styles.lectureNameInputStyle]}
            selectionColor="white"
            leftIconContainerStyle={[styles.lectureNameInputLeftIconContainer]}
            leftIcon={styles.lectureNameInputLeftIcon}
            value={lectureNameInput.value}
            onChangeText={lectureNameInput.handleTextChange}
          />
        </View>
        <SearchResultFlatList
          data={handleLectureData(lectureNameInput.value)}
        />
      </Overlay>

      <View style={[styles.root, styles.rootContainer]}>
        <View style={[styles.blockMargin]}>
          <InputLabel text="수업명" />
          <TouchableOpacity
            onPress={() => {
              onPressTouch();
              setIsVisible(true);
            }}>
            <Input
              disabled
              containerStyle={[styles.lectureNameContainerStyle]}
              inputContainerStyle={[styles.lectureNameInputContainerStyle]}
              inputStyle={[styles.lectureNameInputStyle]}
              selectionColor="white"
              leftIconContainerStyle={[
                styles.lectureNameInputLeftIconContainer,
              ]}
              leftIcon={styles.lectureNameInputLeftIcon}
              value={searchedLectureInfo.lectureName}
            />
          </TouchableOpacity>
        </View>

        <InputLabelWithLectureInfo
          labelText="교과목 코드 · 분반"
          data={searchedLectureInfo.codeAndGroup}
        />
        <InputLabelWithLectureInfo
          labelText="교과구분"
          data={searchedLectureInfo.category}
        />
        <InputLabelWithLectureInfo
          labelText="학점 · 이론 · 실습"
          data={searchedLectureInfo.gradeAndTheory}
        />
      </View>

      <View style={styles.divider} />

      <View style={[styles.root, styles.rootContainer]}>
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
            value={lectureDescriptionInput.value}
            onChangeText={lectureDescriptionInput.handleTextChange}
          />
        </View>

        <View style={[styles.blockMargin]}>
          <InputLabel text="교재 활용도" />
          <ButtonGroup
            selectedIndex={bookStateIndex}
            buttons={['필수', '높음', '보통', '낮음', '활용 X']}
            containerStyle={[styles.testContainerStyle, {width: '100%'}]}
            buttonContainerStyle={styles.testButtonContainerStyle}
            innerBorderStyle={styles.testInnerBorderStyle}
            buttonStyle={[styles.testButtonStyle]}
            selectedButtonStyle={[styles.testSelectedButtonStyle]}
            onPress={(idx: number) => setBookStateIndex(idx)}
          />
        </View>

        <View style={[styles.blockMargin]}>
          <InputLabel text="수업 체감난이도" />
          <View style={styles.ratingContainer}>
            <Rating
              type="custom"
              imageSize={28}
              ratingColor="#0161ff"
              ratingBackgroundColor="black"
              tintColor="black"
              startingValue={ratingValue}
              onFinishRating={(rating: number) => setRatingValue(rating)}
            />
          </View>
        </View>

        <View style={[styles.blockMargin]}>
          <InputLabel text="과제 · 리포트" />
          <RadioButtonGroup
            subText="과제 · 리포트 유무"
            idx={0}
            handleRadioValues={handleRadioValues}
            radioValues={radioValues}
          />
        </View>

        <View style={[styles.blockMargin]}>
          <InputLabel text="조별" />
          <RadioButtonGroup
            subText="조별 유무"
            idx={1}
            handleRadioValues={handleRadioValues}
            radioValues={radioValues}
          />
        </View>

        <View style={[styles.blockMargin]}>
          <InputLabel text="학기 중 시험" />
          <SubTextWithCountBox
            subText="시험 총 횟수"
            desc="(중간 · 기말고사)"
            value={mainTestCount}
            handleChange={(e: string) => setMainTestCount(e)}
          />
          <SubTextWithCountBox
            subText="퀴즈 · 기타 시험"
            value={subTestCount}
            handleChange={(e: string) => setSubTestCount(e)}
          />

          <View style={styles.testInfoContainer}>
            <Text style={styles.subText}>
              시험 유형
              <Text style={styles.testInfoSubText}>
                &nbsp;&nbsp; (중복 선택 가능)
              </Text>
            </Text>

            <ButtonGroup
              selectMultiple
              selectedIndexes={testCategoryStateIndexs}
              buttons={TEST_CATEGORY_STATE_LIST}
              containerStyle={styles.testContainerStyle}
              buttonContainerStyle={styles.testButtonContainerStyle}
              innerBorderStyle={styles.testInnerBorderStyle}
              buttonStyle={styles.testButtonStyle}
              selectedButtonStyle={styles.testSelectedButtonStyle}
              onPress={list => {
                setTestCategoryStateIndexs([...list]);
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.completeButtonRoot}
          onPress={() => {
            console.log(
              lectureNameInput.value,
              searchedLectureInfo,
              lectureConfirmImage,
              lectureDescriptionInput.value,
              bookStateIndex,
              ratingValue,
              radioValues,
              mainTestCount,
              subTestCount,
              testCategoryStateIndexs,
            );
          }}>
          <Text style={styles.completeButtonText}>완료</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ReviewWritePage;
