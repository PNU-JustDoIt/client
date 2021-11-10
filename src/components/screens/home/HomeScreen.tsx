import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeTabScreen from '../../organisms/home/HomeTabScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Tab = createMaterialTopTabNavigator();

const HomeScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{marginVertical: 56}}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
          강의평가 피드
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}>
        <View style={{width: '30%'}}>
          <TouchableOpacity
            style={{
              height: 40,
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', color: 'white'}}>
              교양/일반선택
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{width: '25%'}}>
          <TouchableOpacity
            style={{
              height: 40,
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', color: 'white'}}>일반선택</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: '25%'}}>
          <TouchableOpacity
            style={{
              height: 40,
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', color: 'white'}}>교양필수</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: '20%'}}>
          <TouchableOpacity
            style={{
              height: 40,
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', color: 'white'}}>전공</Text>
          </TouchableOpacity>
        </View>
      </View>
      <HomeTabScreen />
    </SafeAreaView>
  );
};
export default HomeScreen;
