import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {FAB, Icon} from 'react-native-elements';
import {StackParamList} from '../../../navigations/stack-param-list/StackParamList';

export default function WriteFloatingButton(): JSX.Element {
  const navigation =
    useNavigation<NavigationProp<StackParamList, '후기 작성 페이지'>>();

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
