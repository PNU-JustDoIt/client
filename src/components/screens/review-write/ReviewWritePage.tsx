import React from 'react';
import {ScrollView, Text, View} from 'react-native';

export interface InputLabelProps {
  text: string;
}

const ReviewWritePage = (): JSX.Element => {
  const InputLabel = (props: InputLabelProps): JSX.Element => {
    const {text} = props;
    return (
      <Text
        style={{
          fontSize: 17,
          fontWeight: '600',
          fontStyle: 'normal',
          lineHeight: 20,
          letterSpacing: -0.34,
          textAlign: 'left',
          color: '#ffffff',

          marginBottom: 8,
        }}>
        {text}
      </Text>
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'red',
        marginLeft: '4.3%',
        marginRight: '4.3%',
      }}>
      <View
        style={{
          display: 'flex',
          backgroundColor: 'green',
        }}>
        <Text
          style={{
            alignSelf: 'center',
          }}>
          후기 작성하기
        </Text>
      </View>

      <InputLabel text="test" />
    </ScrollView>
  );
};

export default ReviewWritePage;
