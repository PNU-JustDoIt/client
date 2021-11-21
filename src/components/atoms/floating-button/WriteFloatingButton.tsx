import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FAB, Icon} from 'react-native-elements';

export default function WriteFloatingButton(): JSX.Element {
  const navigation = useNavigation();
  return (
    <FAB
      placement="right"
      icon={
        <Icon
          name="create"
          type="material"
          color="#ffffff"
          tvParallaxProperties={undefined}
        />
      }
      onPress={() => {
        navigation.navigate('후기 작성 페이지');
      }}
      color="#0161ff"
    />
  );
}
