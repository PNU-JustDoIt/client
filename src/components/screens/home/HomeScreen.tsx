import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeTabScreen from '../../organisms/home/HomeTabScreen';
const Tab = createMaterialTopTabNavigator();

const HomeScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{marginVertical: 56}}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
          강의평가 피드
        </Text>
      </View>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeTabScreen} />
        <Tab.Screen name="Settings" component={HomeTabScreen} />
      </Tab.Navigator> */}
      {/* <HomeTabScreen /> */}
    </SafeAreaView>
  );
};
export default HomeScreen;
