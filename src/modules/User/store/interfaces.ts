import { FetchStatus } from 'src/api/interfaces';

export interface IUserState {
  status: FetchStatus;
  data: IUserData | null;
  isLoggedIn: boolean;
}

export interface IUserData {
  name: string;
  id: string;
  photoUrl: string;
}
