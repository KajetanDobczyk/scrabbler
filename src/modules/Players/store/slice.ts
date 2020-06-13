import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  PlayerId,
  IPlayersNames,
  IFinalPlayersTiles,
} from 'src/modules/Players/interfaces';
import { gameMiddleState, gameEndingState } from 'src/redux/mocks';

import { initialState } from './data';
import { IAddPlayerMove } from './interfaces';

const players = createSlice({
  name: 'players',
  initialState,
  // initialState: gameEndingState.players,
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
            finalTiles: [],
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
    setEndingPlayerId(state, action: PayloadAction<PlayerId>) {
      state.endingPlayerId = action.payload;
    },
    removePlayerLastMove(state, action: PayloadAction<PlayerId>) {
      const playerId = action.payload;
      const player = state.players[playerId];

      if (player) {
        state.players[playerId]!.moves = player.moves.slice(0, -1);
      }
    },
    updateFinalPlayersTiles(state, action: PayloadAction<IFinalPlayersTiles>) {
      const finalPlayersTiles = action.payload;

      (Object.keys(finalPlayersTiles) as PlayerId[]).map((playerId) => {
        state.players[playerId]!.finalTiles = finalPlayersTiles[playerId];
      });
    },
  },
});

export const {
  setupPlayers,
  addPlayerMove,
  setCurrentPlayerId,
  setEndingPlayerId,
  removePlayerLastMove,
  updateFinalPlayersTiles,
} = players.actions;

export default players.reducer;
