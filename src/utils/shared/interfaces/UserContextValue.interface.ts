import {User} from './UserProfile.interface';

export interface UserContextValue {
  user: User; // user profile
  isLogined: boolean; // 로그인 여부

  saveAccessToken: (access_token: string) => Promise<void>;

  getProfile: () => Promise<void>;
  localLogin: (userEmail: string, userPassword: string) => Promise<boolean>;
  signout: () => Promise<void>;
  resign: () => Promise<void>;
}
