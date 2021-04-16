import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './data';
import { ILoginSucceededPayload } from './interfaces';

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStarted(state) {
      state.status = 'inProgress';
    },
    loginSucceeded(state, action: PayloadAction<ILoginSucceededPayload>) {
      const { data, token } = action.payload;

      state.data = data;
      state.token = token;
      state.status = 'succeeded';
    },
    loginFailed(state) {
      state.status = 'failed';
    },
  },
});

export const { loginStarted, loginSucceeded, loginFailed } = user.actions;

export default user.reducer;
