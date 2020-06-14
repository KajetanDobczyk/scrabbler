import { createSelector } from '@reduxjs/toolkit';
import last from 'lodash/last';

import { RootState } from 'src/redux/rootReducer';
import { PlayerId } from 'src/modules/Players/interfaces';
import { tilesPoints } from 'src/modules/Dictionary/data';

export const selectPlayersState = (state: RootState) => state.game.players;

export const selectCurrentPlayerId = createSelector(
  selectPlayersState,
  (playersState) => playersState.currentPlayerId,
);

export const selectEndingPlayerId = createSelector(
  selectPlayersState,
  (playersState) => playersState.endingPlayerId,
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
    (parseInt(currentPlayerId) > 0
      ? (parseInt(currentPlayerId) - 1).toString()
      : last(Object.keys(players))) as PlayerId,
);

export const selectNextPlayerId = createSelector(
  selectCurrentPlayerId,
  selectPlayers,
  (currentPlayerId, players) =>
    (parseInt(currentPlayerId) < Object.keys(players).length - 1
      ? (parseInt(currentPlayerId) + 1).toString()
      : 0) as PlayerId,
);

export const selectIsFirstMove = createSelector(selectPlayers, (players) =>
  Object.values(players).every((player) => !player?.moves.length),
);

export const selectTotalFinalTilesPoints = createSelector(
  selectPlayers,
  (players) =>
    Object.values(players).reduce(
      (points, player) =>
        (points += player!.finalTiles.reduce(
          (acc, letter) => acc + tilesPoints[letter],
          0,
        )),
      0,
    ),
);
