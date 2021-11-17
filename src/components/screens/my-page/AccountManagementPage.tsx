import {useNavigation} from '@react-navigation/core';
import useAxios from 'axios-hooks';
import React, {useContext, useState} from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import {Text} from 'react-native-elements';
import {Image} from 'react-native-elements/dist/image/Image';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import UserContext from '../../../utils/context/User.context';
import NewPasswordInput from '../../organisms/my-page/NewPasswordInput';
import InputWithDupCheck from '../../organisms/sign-up/InputWithDupCheck';
import PasswordInput from '../../organisms/sign-up/PasswordInput';

// Styles
import styles from './styles/AccountManagementPage.style';

export default function AccountManagementPage(): JSX.Element {
  const navigation = useNavigation();

  const userContext = useContext(UserContext);

  // 사용자가 입력한 닉네임
  const [userNickname, setUserNickname] = useState<string>('');
  const handleUserNickname = (e: any) => {
    setUserNickname(e);
  };
  // 닉네임 정규식
  const nicknameRegex = /^[가-힣0-9a-zA-Z]{2}/;
  // 닉네임 중복검사 결과
  const [isNicknameUsable, setIsNicknameUsable] = useState<boolean | null>(
    null,
  );
  const [, executeNicknameDupCheck] = useAxios<boolean>(
    {
      method: 'POST',
      url: 'user/nickname-dup-check',
    },
    {
      manual: true,
    },
  );
  // 닉네임 중복검사 핸들러
  const handleNicknameDupCheck = (user_nickname: string) => {
    executeNicknameDupCheck({
      data: {
        user_nickname: user_nickname,
      },
    })
      .then(res => {
        if (!res.data) {
          Alert.alert(
            '이미 사용중인 닉네임입니다.',
            '새로운 닉네임을 입력해주세요.',
            [{text: '확인'}],
            {cancelable: false},
          );
          setUserNickname('');
          setIsNicknameUsable(false);
        } else {
          Alert.alert('사용 가능한 닉네임입니다.', '', [{text: '확인'}], {
            cancelable: false,
          });
          setIsNicknameUsable(true);
        }
      })
      .catch(err => {
        console.log('[handleNicknameDupCheck err]', err);
      });
  };

  // 사용자가 입력한 비밀번호
  const [userPassword, setUserPassword] = useState<string>('');
  const handleUserPassword = (e: any) => {
    setUserPassword(e);
  };

  // 사용자가 입력한 새 비밀번호
  const [userNewPassword, setUserNewPassword] = useState<string>('');
  const handleUserNewPassword = (e: any) => {
    setUserNewPassword(e);
  };
  const handlePasswordError = (): boolean => {
    if (userPassword.length > 0 && userPassword.length < 8) return false;
    return true;
  };
  const handleNewPasswordError = (): number => {
    if (userNewPassword.length > 0 && userNewPassword.length < 8) return -1;
    if (userPassword === userNewPassword) return -2;
    if (userNewPassword.length === 0) return -3;

    return 1;
  };

  const saveButtonDisabled = !nicknameRegex.test(userNickname);

  const [{}, executeUpdateUserNickname] = useAxios<boolean>(
    {
      method: 'PUT',
      url: 'user/change-user-nickname',
    },
    {manual: true},
  );

  return (
    <KeyboardAwareScrollView style={styles.root}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log('[계정관리 Header] go back 버튼 클릭');
            navigation.goBack();
          }}
          style={styles.goBackButton}>
          <Image
            style={styles.goBackButtonImage}
            source={require('../../../assets/icons/GoBack.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>계정관리</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputContainerWraper}>
          <InputWithDupCheck
            userInput={userNickname}
            handleUserInput={handleUserNickname}
            regex={nicknameRegex}
            handleDupCheck={handleNicknameDupCheck}
            label="닉네임"
            placeholder="2~10자로 입력해주세요."
            keyboardType="default"
            maxLength={10}
          />

          <PasswordInput
            mode={'first-input'}
            handleError={handlePasswordError}
            userInput={userPassword}
            handleUserInput={handleUserPassword}
            label="현재 비밀번호"
            placeholder="비밀번호를 입력해주세요."
          />

          <NewPasswordInput
            currentPassword={userPassword}
            userInput={userNewPassword}
            handleUserInput={handleUserNewPassword}
            handleError={handleNewPasswordError}
          />

          <TouchableOpacity
            disabled={saveButtonDisabled}
            onPress={async () => {
              console.log('저장 버튼 클릭');
              if (nicknameRegex.test(userNickname)) {
                executeUpdateUserNickname({
                  data: {
                    user_email: userContext.user?.user_email,
                    new_nickname: userNickname,
                  },
                })
                  .then(res => {
                    console.log(
                      '[executeUpdateUserNickname] res.data:',
                      res.data,
                    );

                    Alert.alert(
                      '닉네임 변경에 성공했습니다.',
                      '',
                      [{text: '확인'}],
                      {
                        cancelable: false,
                      },
                    );

                    navigation.goBack();
                  })
                  .catch(err => {
                    console.log('[executeUpdateUserNickname] err:', err);
                    Alert.alert(
                      '닉네임 변경에 실패했습니다.',
                      '',
                      [{text: '확인'}],
                      {
                        cancelable: false,
                      },
                    );
                  });
              }
            }}
            style={
              !saveButtonDisabled
                ? styles.saveButton
                : styles.saveButtonDisabled
            }>
            <Text style={styles.saveButtonText}>저장</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
