import {configure} from 'axios-hooks';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ReviewWritePage from './src/components/screens/review-write/ReviewWritePage';
import axios from './src/utils/axios';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* <View style={styles.view}>
        <Text style={styles.textStyle}>PNU-JustDoIt</Text>
      </View> */}

      <ReviewWritePage />
    </SafeAreaView>
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
