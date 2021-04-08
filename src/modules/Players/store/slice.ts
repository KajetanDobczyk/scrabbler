import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './data';
import { ILoginSucceededPayload } from './interfaces';

const players = createSlice({
  name: 'players',
  initialState,
  reducers: {
    loginStarted(state) {
      state.user.status = 'inProgress';
    },
    loginSucceeded(state, action: PayloadAction<ILoginSucceededPayload>) {
      const { data, token } = action.payload;

      state.user.data = data;
      state.user.token = token;
      state.user.status = 'succeeded';
    },
    loginFailed(state) {
      state.user.status = 'failed';
    },
  },
});

export const { loginStarted, loginSucceeded, loginFailed } = players.actions;

export default players.reducer;
