import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  PlayerId,
  IPlayedMove,
  IPlayersNames,
} from 'src/modules/Players/interfaces';

import { initialState } from './data';

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setupPlayers(state, action: PayloadAction<IPlayersNames>) {
      const playersNames = action.payload;

      state.players = (Object.keys(playersNames) as PlayerId[]).reduce(
        (acc, playerId) => ({
          ...acc,
          [playerId]: {
            name: playersNames[playerId],
            moves: [],
            points: 0,
          },
        }),
        {},
      );
    },
    changeCurrentPlayerId(state, action: PayloadAction<PlayerId>) {
      state.currentPlayerId = action.payload;
    },
    addCurrentPlayerMove(state, action: PayloadAction<IPlayedMove>) {
      state.players[state.currentPlayerId]?.moves.push(action.payload);

      state.currentPlayerId = (parseInt(state.currentPlayerId) <
      Object.keys(state.players).length - 1
        ? (parseInt(state.currentPlayerId) + 1).toString()
        : 0) as PlayerId;
    },
    removePlayerLastMove(state, action: PayloadAction<PlayerId>) {
      const playerId = action.payload;
      const player = state.players[playerId];

      if (player) {
        state.players[playerId]!.moves = player.moves.slice(0, -1);
      }
    },
  },
});

export const {
  setupPlayers,
  changeCurrentPlayerId,
  addCurrentPlayerMove,
  removePlayerLastMove,
} = board.actions;

export default board.reducer;
