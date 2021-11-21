import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from 'react-native-elements';
import WriteFloatingButton from '../../atoms/floating-button/WriteFloatingButton';

export default function MyReviewPage(): JSX.Element {
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',

        backgroundColor: 'black',
      }}>
      <View
        style={{
          width: '100%',
          height: '100%',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 50,
            color: 'white',
            textAlign: 'center',
          }}>
          MyReviewPage Dummy
        </Text>

        <WriteFloatingButton />
      </View>
    </SafeAreaView>
  );
}
