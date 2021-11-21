import {GenderType} from './GenderType.interface';

export interface UserProfile {
  user_id: number;
  user_email: string;
  user_nickname: string;
  user_phone: string;
}

export type User = UserProfile | undefined;
