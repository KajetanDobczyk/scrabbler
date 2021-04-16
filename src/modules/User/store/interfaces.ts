import { FetchStatus } from 'src/api/interfaces';

export interface IUserState {
  status: FetchStatus;
  data: IUserData | null;
  token: string | null;
}

export interface IUserData {
  name: string;
  id: string;
  photoUrl: string;
}

export interface ILoginSucceededPayload {
  data: IUserData;
  token: string;
}
