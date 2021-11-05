import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SignInPage from './src/components/screens/sign-in/SignInPage';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* <View style={styles.view}>
        <Text style={styles.textStyle}>PNU-JustDoIt</Text>
      </View> */}
      <SignInPage />
    </SafeAreaView>
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
