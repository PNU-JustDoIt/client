import {GenderType} from './GenderType.interface';

export interface UserProfile {
  user_id: number;
  user_email: string;
  user_name: string;
  user_nickname: string;
  user_gender: GenderType;
  user_birthday: Date;
  user_phone: string;
}

export type User = UserProfile | undefined;
