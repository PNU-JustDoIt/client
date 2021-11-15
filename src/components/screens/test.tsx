import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';

export default function Test(): JSX.Element {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: 50,
          textAlign: 'center',
        }}>
        로그인 성공 화면
      </Text>
    </View>
  );
}
