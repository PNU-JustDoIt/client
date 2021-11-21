import React, { useState } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styles from './style/SearchInputStyles';

export default function SearchInput(): JSX.Element {
	const [value, setValue] = useState('');

	return (
		<View>
			<Searchbar
				style={styles.searchBar}
				inputStyle={styles.searchBar}
				iconColor='white'
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={setValue}
				placeholder="과목명을 입력하세요."
				placeholderTextColor='#c4c4c4'
				returnKeyType="search"
				returnKeyLabel="search"
				value={value}
			/>
		</View>
	);
}