import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './data';
import { BoardLoadedPayload } from './interfaces';
import { rowFieldsAmount } from '../data';

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {
    boardLayoutLoaded(state, action: PayloadAction<BoardLoadedPayload>) {
      const { x, y, size } = action.payload;

      state.layout = {
        x,
        y,
        size: Math.round(size * 100) / 100,
        tileSize: Math.round((size / rowFieldsAmount) * 100) / 100,
      };
    },
  },
});

export const { boardLayoutLoaded } = board.actions;

export * from './selectors';

export default board.reducer;
