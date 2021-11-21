import React from 'react';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BottomNavStyles from './style/BottomNavStyle';

// screens (수정)
import HomeScreen from '../../components/screens/home/HomeScreen';
import SearchScreen from '../../components/screens/search/SearchScreen';
// import MyReview from '../../components/screens/';
// import MyPage from '../../components/screens/';

const Tab = createBottomTabNavigator();

const BottomNav = (): JSX.Element => {
  return (
    <Tab.Navigator
      initialRouteName="홈"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#000000',
        tabBarStyle: BottomNavStyles.tabBar,
        tabBarLabelStyle: BottomNavStyles.label,
        tabBarIcon: ({focused}) => {
          if (route.name === '홈') {
            return (
              <View>
                <Image
                  style={BottomNavStyles.tabImage}
                  source={
                    focused
                      ? require('../../assets/icons/tabs/home_active.png')
                      : require('../../assets/icons/tabs/home_inactive.png')
                  }
                />
              </View>
            );
          } else if (route.name === '검색') {
            return (
              <View>
                <Image
                  style={BottomNavStyles.tabImage}
                  source={
                    focused
                      ? require('../../assets/icons/tabs/search_active.png')
                      : require('../../assets/icons/tabs/search_inactive.png')
                  }
                />
              </View>
            );
            // }else if(route.name === '나의 후기'){
            //     return (<View>
            //         <Image
            //             style = {BottomNavStyles.tabImage}
            //             source = {
            //                 focused
            //                     ? require('../../assets/icons/tabs/myreview_active.png')
            //                     : require('../../assets/icons/tabs/myreview_inactive.png')
            //             }
            //         />
            //     </View>);
            // }else if(route.name === '마이페이지'){
            //     return (<View>
            //         <Image
            //             style = {BottomNavStyles.tabImage}
            //             source = {
            //                 focused
            //                     ? require('../../assets/icons/tabs/mypage_active.png')
            //                     : require('../../assets/icons/tabs/mypage_inactive.png')
            //             }
            //         />
            //     </View>);
          }
        },
      })}>
      <Tab.Screen
        name="홈"
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <Tab.Screen
        name="검색"
        options={{headerShown: false}}
        component={SearchScreen}
      />
      {/* <Tab.Screen name="나의 후기" component={MyReview} /> */}
      {/* <Tab.Screen name="마이페이지" component={MyPage} /> */}
    </Tab.Navigator>
  );
};

export default BottomNav;
