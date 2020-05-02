import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PlayerId, IPlayedMove } from 'src/modules/Players/interfaces';

import { initialState } from './data';

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {
    changeCurrentPlayerId(state, action: PayloadAction<PlayerId>) {
      state.currentPlayerId = action.payload;
    },
    addCurrentPlayerMove(state, action: PayloadAction<IPlayedMove>) {
      state.players[state.currentPlayerId]?.moves.push(action.payload);

      state.currentPlayerId = (state.currentPlayerId <
      Object.keys(state.players).length - 1
        ? state.currentPlayerId + 1
        : 0) as PlayerId;
    },
  },
});

export const { changeCurrentPlayerId, addCurrentPlayerMove } = board.actions;

export default board.reducer;
