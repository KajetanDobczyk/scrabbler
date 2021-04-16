import { IUserState } from './interfaces';

export const initialState: IUserState = {
  status: 'idle',
  data: null,
  token: null,
};
