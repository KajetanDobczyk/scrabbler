import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/rootReducer';

export const selectPlayersState = (state: RootState) => state.players;

export const selectCurrentPlayer = createSelector(
  selectPlayersState,
  playersState => playersState.currentPlayer,
);
