import {User} from '../interfaces/UserProfile.interface';

export interface LocalLoginRes {
  user: User;
  access_token: string;
}
