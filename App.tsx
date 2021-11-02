import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.view}>
        <Text style={styles.textStyle}>PNU-JustDoIt</Text>
      </View>
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
