import {RouteProp, useRoute} from '@react-navigation/core';
import useAxios from 'axios-hooks';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {StackParamList} from '../../../navigations/stack-param-list/StackParamList';
import FindPasswordButton from '../../organisms/find-id/FindPasswordButton';
import LoginButton from '../../organisms/find-id/LoginButton';

// Styles
import FindIdResultPageStyles from './styles/FindIdResultPage.style';

export default function FindIdResultPage(): JSX.Element {
  // FindIdResultPage Styles
  const styles = FindIdResultPageStyles;

  const route = useRoute<RouteProp<StackParamList, '아이디 찾기 결과'>>();
  const {userPhone} = route.params;

  const [result, setResult] = useState<string>('');
  const [{data: getData, loading: getLoading, error: getError}, fetchId] =
    useAxios(
      {
        method: 'GET',
        url: `user/find-userid-by-userphone/${userPhone}`,
      },
      {manual: true},
    );
  const handleFetchId = () => {
    fetchId()
      .then(res => {
        console.log('res.data:', res.data);
        setResult(res.data);
      })
      .catch(err => {
        console.log('err:', err);
      });
  };

  useEffect(() => {
    handleFetchId();
  }, [getData]);

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.titleText}>아이디 찾기</Text>
        </View>

        <View style={styles.middleContainer}>
          {!getLoading && !getError && getData && getData !== null ? (
            <Text style={styles.idText}>{`아이디: ${result}`}</Text>
          ) : (
            <Text style={styles.idText}>{`아이디를 찾을 수 없습니다.`}</Text>
          )}
          <Text style={styles.explainText}>고객님의 아이디입니다.</Text>
        </View>

        <View style={styles.bottomContainer}>
          <LoginButton />
          <FindPasswordButton />
        </View>
      </View>
    </View>
  );
}
