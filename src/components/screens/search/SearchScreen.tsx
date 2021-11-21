import React from 'react';
import {View} from 'react-native';
import SearchInput from '../../organisms/search/SearchInput';
import {useNavigation} from '@react-navigation/native';
import SearchScreenStyles from './style/SearchScreenStyles';

const SearchScreen = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <View style={SearchScreenStyles.container}>
      {/* 상단 검색바 */}
      <View style={SearchScreenStyles.searchbar}>
        <SearchInput />
      </View>

      {/* 최근 검색어 */}
      <View style={SearchScreenStyles.history}></View>
    </View>
  );
};

export default SearchScreen;
