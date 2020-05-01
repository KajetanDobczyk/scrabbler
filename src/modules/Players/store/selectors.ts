import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/rootReducer';

export const selectPlayersState = (state: RootState) => state.players;

export const selectCurrentPlayerId = createSelector(
  selectPlayersState,
  (playersState) => playersState.currentPlayerId,
);

export const selectPlayers = createSelector(
  selectPlayersState,
  (playersState) => playersState.players,
);

export const selectCurrentPlayerName = createSelector(
  selectCurrentPlayerId,
  selectPlayers,
  (currentPlayerId, players) => players[currentPlayerId]?.name,
);

export const selectIsFirstMove = createSelector(selectPlayers, (players) =>
  Object.values(players).every((player) => !player?.moves.length),
);
