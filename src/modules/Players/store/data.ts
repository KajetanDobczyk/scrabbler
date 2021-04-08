import { IPlayersState } from './interfaces';

export const initialState: IPlayersState = {
  user: {
    status: 'idle',
    data: null,
    token: null,
  },
};
