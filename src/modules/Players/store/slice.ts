import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PlayerId, IPlayersNames } from 'src/modules/Players/interfaces';

import { initialState } from './data';
import { IAddPlayerMove } from './interfaces';

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setupPlayers(state, action: PayloadAction<IPlayersNames>) {
      const playersNames = Object.values(action.payload).filter(
        (name) => name !== '',
      );

      state.players = playersNames.reduce(
        (acc, name, i) => ({
          ...acc,
          [i]: {
            name,
            moves: [],
            points: 0,
          },
        }),
        {},
      );
    },
    addPlayerMove(state, action: PayloadAction<IAddPlayerMove>) {
      const { playerId, move } = action.payload;

      state.players[playerId]?.moves.push(move);
    },
    setCurrentPlayerId(state, action: PayloadAction<PlayerId>) {
      state.currentPlayerId = action.payload;
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
  addPlayerMove,
  setCurrentPlayerId,
  removePlayerLastMove,
} = board.actions;

export default board.reducer;
