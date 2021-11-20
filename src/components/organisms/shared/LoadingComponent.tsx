import React from 'react';
import {ActivityIndicator, View} from 'react-native';

// Styles
import LoadingComponentStyles from './styles/LoadingComponent.style';

export interface LoadingComponentProps {
  isLoading: boolean;
}

export default function LoadingComponent(
  props: LoadingComponentProps,
): JSX.Element {
  // LoadingComponent Styles
  const styles = LoadingComponentStyles;

  const {isLoading} = props;

  return (
    <View style={styles.root}>
      <ActivityIndicator animating={isLoading} size="large" color="#414141" />
    </View>
  );
}
