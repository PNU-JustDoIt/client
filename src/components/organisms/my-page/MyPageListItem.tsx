import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

// Styles
import MyPageListItemStyles from './styles/MyPageListItem.style';

export interface MyPageData {
  id: number;
  title: string;
  handler: () => any;
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

  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => {
          console.log(`마이페이지 ${myPageData.title} 버튼 클릭`);
          myPageData.handler();
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>{myPageData.title}</Text>
      </TouchableOpacity>
      <View style={styles.horizontalDivider} />
    </View>
  );
}
