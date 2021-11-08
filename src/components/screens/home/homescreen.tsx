import React from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeTabScreen from '../../organisms/home/upper-container/HomeTabScreen';
const homescreen = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigatior>
      <Tab.Screen name="교양/일반선택" component={HomeTabScreen} prop={} />
      <Tab.Screen name="일반선택" component={HomeTabScreen} />
      <Tab.Screen name="겨" component={HomeTabScreen} />
      <Tab.Screen name="일반선택" component={HomeTabScreen} />
    </Tab.Navigatior>
  );
};
