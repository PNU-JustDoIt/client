import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackParamList} from '../../../navigations/stack-param-list/StackParamList';

// Styles
import MyPageListItemStyles from './styles/MyPageListItem.style';

export interface MyPageData {
  id: number;
  title: string;
  handler?: () => void;
  navigate_to?: string;
}

export interface MyPageListItemProps {
  myPageData: MyPageData;
}

export default function MyPageListItem(
  props: MyPageListItemProps,
): JSX.Element {
  // MyPageListItem Styles
  const styles = MyPageListItemStyles;

  const {myPageData} = props;

  let navigation = useNavigation<NavigationProp<StackParamList, '나의후기'>>();

  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => {
          console.log(`마이페이지 ${myPageData.title} 버튼 클릭`);

          if (myPageData.handler !== undefined) {
            myPageData.handler();
          }

          const title = myPageData.navigate_to;
          if (title === '나의후기') navigation.navigate('나의후기');
          else if (title === '계정관리') navigation.navigate('계정관리');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>{myPageData.title}</Text>
      </TouchableOpacity>
      <View style={styles.horizontalDivider} />
    </View>
  );
}
