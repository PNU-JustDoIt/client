import React from 'react';
import {Text, View} from 'react-native';

const LectureShare = () => {
  return (
    <View style={{marginTop: 23.5}}>
      <View>
        <Text style={{fontSize: 17, color: 'white'}}>섬세한 강의평가를</Text>
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
    </View>
  );
};
export default LectureShare;
