import {Button} from '@mui/material';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function SignInPage(): JSX.Element {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          {/*  */}
          <TouchableOpacity
            onPress={() => {
              console.log('로그인 버튼');
            }}
            style={{
              width: 300,
              height: 40,
              backgroundColor: 'yellow',
            }}>
            <Text style={{textAlign: 'center'}}>로그인 버튼</Text>
          </TouchableOpacity>
          {/*  */}
        </View>

        <View style={styles.middleContainer}>
          {/*  */}
          {/*  */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    width: '87.2%',
    height: '100%',
  },
  topContainer: {
    width: '100%',
    height: '39.4%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    width: '100%',
    height: '60.6%',
    backgroundColor: 'green',
  },
});
