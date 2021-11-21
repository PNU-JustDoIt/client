import React from 'react';
// navigator
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StackParamList} from './src/navigations/stack-param-list/StackParamList';

//axios
import axios from './src/utils/axios';
import {configure} from 'axios-hooks';

// Screens
import BottomNav from './src/navigations/bottom-nav/BottomNav';
import HomeScreen from './src/components/screens/home/HomeScreen';
import SearchScreen from './src/components/screens/search/SearchScreen';
import SignInSelectPage from './src/components/screens/sign-in/SignInSelectPage';
import LocalSignInPage from './src/components/screens/sign-in/LocalSignInPage';
import InputPhoneNumberPage from './src/components/screens/sign-up/InputPhoneNumberPage';
import FindIdResultPage from './src/components/screens/find-id/FindIdResultPage';
import InputUserInfoPage from './src/components/screens/sign-up/InputUserInfoPage';
import UserContext, {useUser} from './src/utils/context/User.context';
import MyPage from './src/components/screens/my-page/MyPage';
import AccountManagementPage from './src/components/screens/my-page/AccountManagementPage';
import MyReviewPage from './src/components/screens/my-review/MyReviewPage';
import ReviewDetailPage from './src/components/screens/review/review-detail/ReviewDetailPage';
import ReviewWritePage from './src/components/screens/review/review-write/ReviewWritePage';

/* IOS stack 이동 animation options */
const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};

const Stack = createStackNavigator<StackParamList>();

/* Global Axios Instance */
configure({axios: axios.axiosInstance});

const App = (): JSX.Element => {
  /* User Context */
  const {
    user,
    isLogined,
    saveAccessToken,
    getProfile,
    localLogin,
    signout,
    resign,
  } = useUser();

  return (
    <UserContext.Provider
      value={{
        user,
        isLogined,
        saveAccessToken,
        getProfile,
        localLogin,
        signout,
        resign,
      }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={TransitionScreenOptions}>
          <>
            {isLogined ? (
              <>
                <Stack.Screen
                  name="바텀 네비게이션"
                  component={BottomNav}
                  options={{
                    headerShown: false,
                    headerTitle: ' ',
                  }}
                />

                <Stack.Screen
                  name="후기 작성 페이지"
                  component={ReviewWritePage}
                  options={{
                    headerShown: false,
                    headerTitle: ' ',
                  }}
                />

                <Stack.Screen
                  name="상세 후기 페이지"
                  component={ReviewDetailPage}
                  options={{
                    headerTitle: '강의 평가',
                    headerStyle: {
                      backgroundColor: '#212121',
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      color: 'white',
                    },
                  }}
                />

                <Stack.Screen
                  name="나의후기"
                  component={MyReviewPage}
                  options={{
                    headerShown: false,
                    headerTitle: ' ',
                  }}
                />

                <Stack.Screen
                  name="계정관리"
                  component={AccountManagementPage}
                  options={{
                    headerShown: false,
                    headerTitle: '계정관리',
                  }}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="로그인 방법 선택 페이지"
                  component={SignInSelectPage}
                  options={{
                    headerShown: false,
                    headerTitle: ' ',
                  }}
                />

                <Stack.Screen
                  name="로컬 로그인"
                  component={LocalSignInPage}
                  options={{
                    headerShown: false,
                    headerTitle: ' ',
                  }}
                />

                <Stack.Screen
                  name="회원가입 또는 아이디 찾기"
                  component={InputPhoneNumberPage}
                  options={{
                    headerShown: false,
                    headerTitle: ' ',
                  }}
                />

                <Stack.Screen
                  name="회원가입 정보 입력"
                  component={InputUserInfoPage}
                  options={{
                    headerShown: false,
                    headerTitle: ' ',
                  }}
                />

                <Stack.Screen
                  name="아이디 찾기 결과"
                  component={FindIdResultPage}
                  options={{
                    headerShown: false,
                    headerTitle: ' ',
                  }}
                />
              </>
            )}
          </>
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
