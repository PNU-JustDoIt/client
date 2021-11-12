import React from 'react';
import {Text, View, Image} from 'react-native';

const LectureShare = () => {
  return (
    <View style={{marginTop: 23.5}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 17, color: 'white'}}>섬세한 </Text>
        <Text
          style={{
            fontSize: 17,
            fontFamily: 'Roboto',
            color: 'rgb(10,100,255)',
          }}>
          강의평가
        </Text>
        <Text style={{fontSize: 17, color: 'white'}}>를</Text>
      </View>
      <View>
        <Text style={{fontSize: 17, color: 'white'}}>
          자유롭게 공유해 보세요.
        </Text>
      </View>
      <View style={{marginTop: 9}}>
        <Text style={{fontSize: 12, color: 'gray'}}>
          수강한 강의 후기를 공유하고, 필요한 후기도 찾아보세요!
        </Text>
      </View>
      {/* <Image
        source={require('../../../assets/images/home/homeshare.png')}
        style={{width: '100%', height: '112'}}
      /> */}
    </View>
  );
};
export default LectureShare;
