import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {StackParamList} from './src/navigations/stack-param-list/StackParamList';

// Screens
import SignInSelectPage from './src/components/screens/sign-in/SignInSelectPage';
import LocalSignInPage from './src/components/screens/sign-in/LocalSignInPage';
import InputPhoneNumberPage from './src/components/screens/sign-up/InputPhoneNumberPage';
import FindIdResultPage from './src/components/screens/find-id/FindIdResultPage';
import InputUserInfoPage from './src/components/screens/sign-up/InputUserInfoPage';

/* IOS stack 이동 animation options */
const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};

const Stack = createStackNavigator<StackParamList>();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={TransitionScreenOptions}>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    width: '100%',
    height: '100%',

    backgroundColor: 'black',
  },
  view: {
    width: '100%',
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 50,
    color: 'white',
  },
});

export default App;
