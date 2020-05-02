import { createSelector } from '@reduxjs/toolkit';
import last from 'lodash/last';

import { RootState } from 'src/redux/rootReducer';

import { PlayerId } from '../interfaces';

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

export const selectPreviousPlayerId = createSelector(
  selectCurrentPlayerId,
  selectPlayers,
  (currentPlayerId, players) =>
    (currentPlayerId > 0
      ? currentPlayerId - 1
      : last(Object.keys(players))) as PlayerId,
);

export const selectIsFirstMove = createSelector(selectPlayers, (players) =>
  Object.values(players).every((player) => !player?.moves.length),
);
