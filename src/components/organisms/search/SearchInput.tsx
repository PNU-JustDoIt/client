import {style} from '@mui/system';
import {NavigationProp, useNavigation} from '@react-navigation/core';
import useAxios from 'axios-hooks';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Input, Overlay, Text} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import {Searchbar} from 'react-native-paper';
import {StackParamList} from '../../../navigations/stack-param-list/StackParamList';
import useEventTargetValue from '../../../utils/hooks/useEventTargetValue';
import styles from './style/SearchInputStyles';

export default function SearchInput(): JSX.Element {
  const reviewNameInput = useEventTargetValue();
  const [{data: getData, loading: getLoading}] = useAxios({
    url: '/lecture-review/get-reviews',
    method: 'POST',
  });

  const [overlay, setOverlay] = React.useState(false);

  const navigation =
    useNavigation<NavigationProp<StackParamList, '상세 후기 페이지'>>();

  const handleLectureData = (target: string): any[] => {
    if (getData) {
      return getData.filter((each: any) =>
        each.lecture_id.lecture_name.includes(target),
      );
    } else return [];
  };

  const [searchResult, setSearchResult] = React.useState({
    lecture_name: '',
    review_id: -1,
  });

  return (
    <View>
      <TouchableOpacity
        onPress={() => setOverlay(true)}
        style={[{paddingLeft: '4.3%', paddingRight: '4.3%'}]}>
        <Input
          disabled
          containerStyle={[styles.lectureNameContainerStyle]}
          inputContainerStyle={[styles.lectureNameInputContainerStyle]}
          inputStyle={[styles.lectureNameInputStyle]}
          selectionColor="white"
          leftIconContainerStyle={[styles.lectureNameInputLeftIconContainer]}
          leftIcon={styles.lectureNameInputLeftIcon}
          placeholder="과목명을 입력하세요."
          placeholderTextColor="#c4c4c4"
          value={searchResult.lecture_name}
        />
      </TouchableOpacity>

      {getData && !getLoading && (
        <Overlay
          isVisible={overlay}
          onBackdropPress={() => setOverlay(false)}
          overlayStyle={[styles.overlayStyle]}>
          <View style={[styles.overlayContainer]}>
            <Input
              containerStyle={[styles.lectureNameContainerStyle]}
              inputContainerStyle={[styles.lectureNameInputContainerStyle]}
              inputStyle={[styles.lectureNameInputStyle]}
              selectionColor="white"
              leftIconContainerStyle={[
                styles.lectureNameInputLeftIconContainer,
              ]}
              leftIcon={styles.lectureNameInputLeftIcon}
              value={reviewNameInput.value}
              onChangeText={reviewNameInput.handleTextChange}
              placeholder="과목명을 입력하세요."
              placeholderTextColor="#c4c4c4"
            />
          </View>

          <FlatList
            data={handleLectureData(reviewNameInput.value)}
            style={styles.flatList}
            ItemSeparatorComponent={() => (
              <View style={[{borderWidth: 1, borderColor: '#3c3c3c'}]} />
            )}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.ListRoot,
                    {
                      flexDirection: 'column',
                      marginTop: 8,
                      marginBottom: 8,
                    },
                  ]}
                  onPress={() => {
                    // reviewNameInput.setValue(item.lecture_id.lecture_name);
                    setSearchResult({
                      lecture_name: item.lecture_id.lecture_name,
                      review_id: item.review_id,
                    });
                    navigation.navigate('상세 후기 페이지', {
                      review_id: item.review_id,
                    });
                    setOverlay(false);
                  }}>
                  <View style={[{flexDirection: 'row', flex: 1}]}>
                    <View style={styles.listLectureTextContainer}>
                      <Text style={styles.listLectureText}>
                        {item.lecture_id.lecture_name}
                      </Text>
                    </View>
                    <View style={styles.listLectureInfoContainer}>
                      <Text style={styles.listLectureInfoLeftText}>
                        {item.lecture_id.lecture_code +
                          '-' +
                          item.lecture_id.lecture_group}
                      </Text>
                      <Text style={styles.listLectureInfoRightText}>
                        {item.lecture_id.lecture_professor_name}
                      </Text>
                    </View>
                  </View>

                  <View style={[{flexDirection: 'row', flex: 1}]}>
                    <Text
                      style={[
                        {color: '#ffffff', paddingLeft: 28, opacity: 0.6},
                      ]}>
                      {item.user_id.user_nickname}
                    </Text>

                    <Text
                      style={[
                        {color: '#ffffff', paddingLeft: 28, opacity: 0.6},
                      ]}>
                      {item.user_id.user_email}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </Overlay>
      )}
    </View>
  );
}
