import React from 'react';
import {Button, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeTabScreen from '../../organisms/home/HomeTabScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CollegeSelectList from '../../organisms/home/CollegeSelectList';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = (): JSX.Element => {
  /*test*/
  const [buttonState, setButtonState] = React.useState<number>(0);
  const [selectDepart, setSelectDepart] = React.useState<string>('');
  const handleSelected = (state: number) => {
    if (state === buttonState) {
      setButtonState(0);
    } else {
      setButtonState(state);
    }
  };
  const handleDepart = (state: string) => {
    setSelectDepart(state);
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{marginVertical: 56}}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
          강의평가 피드
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          position: 'relative',
          borderBottomColor: '#0161ff',
          borderBottomWidth: 1,
        }}>
        <View style={{width: '30%'}}>
          <TouchableOpacity
            style={{
              height: 40,
              justifyContent: 'center',
            }}
            onPress={() => handleSelected(1)}>
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
            onPress={() => handleSelected(2)}>
            <Text style={{textAlign: 'center', color: 'white'}}>일반선택</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: '25%'}}>
          <TouchableOpacity
            style={{
              height: 40,
              justifyContent: 'center',
            }}
            onPress={() => handleSelected(3)}>
            <Text style={{textAlign: 'center', color: 'white'}}>교양필수</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: '20%'}}>
          <TouchableOpacity
            style={{
              height: 40,
              justifyContent: 'center',
            }}
            onPress={() => handleSelected(4)}>
            <Text style={{textAlign: 'center', color: 'white'}}>전공</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CollegeSelectList
        buttonState={buttonState}
        handleSelected={handleSelected}
        selectDepart={selectDepart}
        handleDepart={handleDepart}
      />

      <HomeTabScreen
        buttonState={buttonState}
        selectDepart={selectDepart}
        handleDepart={handleDepart}
      />
    </ScrollView>
  );
};
export default HomeScreen;
