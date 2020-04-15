import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PlayerId } from 'src/modules/Players/interfaces';
import { IBoardTile } from 'src/modules/Board/interfaces';

import { initialState } from './data';

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {
    changeCurrentPlayerId(state, action: PayloadAction<PlayerId>) {
      state.currentPlayerId = action.payload;
    },
    addCurrentPlayerMove(state, action: PayloadAction<IBoardTile[]>) {
      state.players[state.currentPlayerId]?.moves.push({
        tiles: action.payload,
      });

      state.currentPlayerId = (state.currentPlayerId + 1 <= 3
        ? state.currentPlayerId + 1
        : 0) as PlayerId;
    },
  },
});

export const { changeCurrentPlayerId, addCurrentPlayerMove } = board.actions;

export * from './selectors';

export default board.reducer;
