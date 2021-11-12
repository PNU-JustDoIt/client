import React from 'react';
import {Button, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeTabScreen from '../../organisms/home/HomeTabScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {College} from '../../../navigations/interfaces/College.interface';
import dummyCollege from './College.Data';
import { ListItem } from 'react-native-elements';
import dummyCulture from './Culture.Data';
import dummyDepart from './Depart.Data';
import CollegeSelectList from '../../organisms/home/CollegeSelectList';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = (): JSX.Element => {
  const [buttonState, setButtonState] = React.useState<number>(0);

  const handleSelected = (state:number) => {
    setButtonState(state);
  };
  console.log(buttonState);
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
          position:'relative',
        }}>
        <View style={{width: '30%'}}>
          <TouchableOpacity
            style={{
              height: 40,
              justifyContent: 'center',
            }}
            onPress={()=>handleSelected(1)}>
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
            }}
            onPress={()=>handleSelected(2)}>
            <Text style={{textAlign: 'center', color: 'white'}}>일반선택</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: '25%'}}>
          <TouchableOpacity
            style={{
              height: 40,
              justifyContent: 'center',
            }}
            onPress={()=>handleSelected(3)}>
            <Text style={{textAlign: 'center', color: 'white'}}>교양필수</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: '20%'}}>
          <TouchableOpacity
            style={{
              height: 40,
              justifyContent: 'center',
            }}
            onPress={()=>handleSelected(4)}>
            <Text style={{textAlign: 'center', color: 'white'}}>전공</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CollegeSelectList buttonState={buttonState} handleSelected={handleSelected}/>
      
      <HomeTabScreen />
    </SafeAreaView>
  );
};
export default HomeScreen;
