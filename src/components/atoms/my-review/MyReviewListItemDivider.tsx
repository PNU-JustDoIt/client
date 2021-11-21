import React from 'react';
import {View} from 'react-native';

// Styles
import MyReviewListItemDividerStyles from './styles/MyReviewListItemDivider.style';

export default function MyReviewListItemDivider(): JSX.Element {
  // MyReviewListItemDivider Styles
  const styles = MyReviewListItemDividerStyles;
  return <View style={styles.root} />;
}
