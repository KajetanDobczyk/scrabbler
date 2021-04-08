import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/rootReducer';

export const selectPlayersState = (state: RootState) => state.players;

export const selectUser = createSelector(
  selectPlayersState,
  (players) => players.user,
);

export const selectIsUserLoggedIn = createSelector(selectUser, (user) =>
  Boolean(user.token),
);
