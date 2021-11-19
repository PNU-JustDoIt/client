import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    padding: 20,
    alignSelf: 'center',
    width: width * 0.93,
    height: height * 0.12,
    backgroundColor: '#1c1c1c',
    marginTop: height*0.012,
    borderRadius: 5,
  },
  profname: {
      textAlign: 'left',
      fontSize: 12,
      color: 'white',
  },
  lectname: {
      textAlign: 'left',
      fontWeight: 'bold',
      fontSize: 17,
      color: 'white',
  },
  star: {
      alignItems: 'flex-start',
      marginTop: 8,
  },
  categorybox: {
      marginLeft: width*0.57,
      backgroundColor: '#2c3749',
      paddingVertical: height*0.005,
      borderRadius: 10,
  },
  category: {
      marginHorizontal: width*0.03,
      textAlign: 'center',
      color: '#0161ff'
  },
  delete: {
      aspectRatio: 3.5,
      resizeMode: 'contain',
  }
});

export default styles;
