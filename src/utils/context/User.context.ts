import useAxios from 'axios-hooks';
import {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {LocalLoginRes} from '../shared/dto/local-login-res.dto';
import {User} from '../shared/interfaces/UserProfile.interface';
import {UserContextValue} from '../shared/interfaces/UserContextValue.interface';

const defaultUser: User = undefined;

const UserContext = createContext<UserContextValue>({
  user: defaultUser,
  isLogined: false,
  saveAccessToken: (access_token: string) => Promise.resolve(),
  getProfile: () => Promise.resolve(),
  localLogin: (userEmail: string, userPassword: string) =>
    Promise.resolve(false),
});

export function useUser(): UserContextValue {
  const [user, setUser] = useState<User>(defaultUser);
  const [isLogined, setIsLogined] = useState<boolean>(false);

  /**
   * Auto-Login 처리
   */
  useEffect(() => {
    console.log('useEffect');
    async function autoSignIn() {
      if ((!user || user === null) && !isLogined) {
        console.log(
          '유저가 없거나 유저가 널인 경우 + 로그인 되어 있지 않은 경우',
        );

        await getAccessToken().then(async res => {
          if (res !== '') {
            console.log("accessToken 이 '' 가 아닌 경우 (존재하는 경우)");
            console.log('res:', res);
            await getProfile();
            // getProfile();
          }
        });
      }
    }

    autoSignIn();
  }, []);

  /**
   * @name 엑세스_토큰_저장
   * @param access_token
   */
  const saveAccessToken = async (access_token: string): Promise<void> => {
    console.log('saveAccessToken 진행중...');
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.setItem('accessToken', access_token);
    console.log('saveAccessToken 완료');
  };

  /**
   * @name 엑세스_토큰_불러오기
   * @returns accessToken:string
   */
  async function getAccessToken(): Promise<string> {
    const accessToken = await AsyncStorage.getItem('accessToken');

    if (accessToken && accessToken !== null) {
      console.log('[getAccessToken] accessToken:', accessToken);
      return accessToken;
    } else return '';
  }

  /**
   * @name 유저_프로파일_요청
   */
  const [
    {data: getProfileData, loading: getProfileLoading, error: getProfileError},
    executeGetProfile,
  ] = useAxios(
    {
      method: 'GET',
      url: 'auth/profile',
      headers: {
        Authorization: 'Bearer' + AsyncStorage.getItem('accessToken'),
      },
    },
    {manual: true},
  );

  /**
   * @name 유저_프로파일_요청_핸들러
   */
  const getProfile = async (): Promise<void> => {
    console.log('getProfile 진행중...');

    const accessToken = await getAccessToken();

    console.log('[getProfile] accessToken:', accessToken);

    const userProfile = await executeGetProfile({
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    });

    if (userProfile.data) {
      setUser(userProfile.data);
      setIsLogined(true);
      console.log('getProfile Success');
    } else {
      console.log('getProfile Failed');
    }

    console.log('getProfile 완료');
  };

  /**
   * @name 로컬_로그인_요청
   */
  const [
    {data: getData, loading: getLoading, error: getError},
    executeLocalLogin,
  ] = useAxios<LocalLoginRes>(
    {
      method: 'POST',
      url: 'auth/login',
    },
    {
      manual: true,
    },
  );

  /**
   
   * @param userEmail
   * @param userPassword
   */

  /**
   * @name 로컬_로그인_요청_핸들러
   * @param userEmail
   * @param userPassword
   * @returns boolean
   *    1. 로컬 로그인 성공 -> return true;
   *    2. 로컬 로그인 실패 -> return false;
   */
  const localLogin = async (
    userEmail: string,
    userPassword: string,
  ): Promise<boolean> => {
    console.log('userEmail:', userEmail);
    console.log('userPassword:', userPassword);

    const localLoginRes: LocalLoginRes = (
      await executeLocalLogin({
        data: {
          username: userEmail,
          password: userPassword,
        },
      })
    ).data;

    console.log('localLoginRes:', localLoginRes);

    if (localLoginRes) {
      console.log('saveAccessToken 진입 전');
      await saveAccessToken(localLoginRes.access_token);

      console.log('getProfile 진입 전');
      await getProfile();

      return true;
    }

    return false;
  };

  return {
    user,
    isLogined,

    saveAccessToken,

    getProfile,
    localLogin,
  };
}

export default UserContext;
