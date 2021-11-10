import {configure} from 'axios-hooks';
import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import axios from './src/utils/axios';
import {StackParamList} from './src/navigations/stack-param-list/StackParamList';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/components/screens/home/HomeScreen';

const App = (): JSX.Element => {
  const Stack = createStackNavigator<StackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="메인 화면"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/* Global Axios Instance */
configure({axios: axios.axiosInstance});

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
