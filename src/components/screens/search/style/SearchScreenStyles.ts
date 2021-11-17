import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const SearchScreenStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
	},
	searchbar: {
		marginTop: height*0.1,
	},
	history: {
	},
});

export default SearchScreenStyles;