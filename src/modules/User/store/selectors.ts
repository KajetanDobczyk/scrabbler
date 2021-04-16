import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/rootReducer';

export const selectUserState = (state: RootState) => state.user;

export const selectUserData = createSelector(
  selectUserState,
  (user) => user.data,
);

export const selectIsUserLoggedIn = createSelector(
  selectUserState,
  (user) => user.isLoggedIn,
);
