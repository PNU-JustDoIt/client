import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeTabScreen from '../../organisms/home/HomeTabScreen';
const Tab = createMaterialTopTabNavigator();
const HomeScreen = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Text>강의평가 피드</Text>
      <Tab.Navigator>
        <Tab.Screen name="교양선택">{() => <HomeTabScreen />}</Tab.Screen>
      </Tab.Navigator>
    </SafeAreaView>
  );
};
export default HomeScreen;
