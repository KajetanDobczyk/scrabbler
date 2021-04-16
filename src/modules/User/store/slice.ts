import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './data';
import { IUserData } from './interfaces';

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStarted(state) {
      state.status = 'inProgress';
    },
    loginSucceeded(state, action: PayloadAction<IUserData>) {
      state.data = action.payload;
      state.status = 'succeeded';
      state.isLoggedIn = true;
    },
    loginFailed(state) {
      state.status = 'failed';
    },
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
    logoutSucceeded(state) {
      state.status = 'idle';
      state.data = null;
      state.isLoggedIn = false;
    },
  },
});

export const {
  loginStarted,
  loginSucceeded,
  loginFailed,
  setIsLoggedIn,
  logoutSucceeded,
} = user.actions;

export default user.reducer;
