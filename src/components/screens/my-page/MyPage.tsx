import React, {useContext, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import UserContext from '../../../utils/context/User.context';

// Organisms
import MyPageListItem, {
  MyPageData,
} from '../../organisms/my-page/MyPageListItem';
import ResignOverlay from '../../organisms/my-page/ResignOverlay';
import SignoutOverlay from '../../organisms/my-page/SignoutOverlay';

// Styles
import MyPageStyles from './styles/MyPage.style';

export default function MyPage(): JSX.Element {
  // MyPage Styles
  const styles = MyPageStyles;

  const userContext = useContext(UserContext);

  // 로그아웃 Overlay visible state
  const [signoutVisible, setSignoutVisible] = useState<boolean>(false);
  // 로그아웃 Overlay Handler
  const toggleSignoutOverlay = () => {
    setSignoutVisible(!signoutVisible);
  };

  // 회원탈퇴 Overlay visible state
  const [resignVisible, setResignVisible] = useState<boolean>(false);
  // 회원탈퇴 Overlay Handler
  const toggleResignOverlay = () => {
    setResignVisible(!resignVisible);
  };

  const myPageDataList: MyPageData[] = [
    {
      id: 0,
      title: '작성한 후기 보기',
      navigate_to: '나의후기',
    },
    {
      id: 1,
      title: '계정관리',
      navigate_to: '계정관리',
    },
    {
      id: 2,
      title: '로그아웃',
      handler: toggleSignoutOverlay,
    },
    {
      id: 3,
      title: '회원탈퇴',
      handler: toggleResignOverlay,
    },
  ];

  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>마이페이지</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={myPageDataList}
          renderItem={({item}) => <MyPageListItem myPageData={item} />}
        />
      </View>

      <SignoutOverlay
        isVisible={signoutVisible}
        onBackdropPress={toggleSignoutOverlay}
        signout={userContext.signout}
      />

      <ResignOverlay
        isVisible={resignVisible}
        onBackdropPress={toggleResignOverlay}
      />
    </View>
  );
}
