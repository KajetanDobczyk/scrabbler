import { createSlice, PayloadAction, combineReducers } from '@reduxjs/toolkit';

import { initialState } from './data';
import { GameView } from '../../interfaces';

const config = createSlice({
  name: 'config',
  initialState,
  reducers: {
    startGame(state) {
      state.status = 'inProgress';
      state.view = 'points';
    },
    setGameView(state, action: PayloadAction<GameView>) {
      state.view = action.payload;
    },
  },
});

export const { startGame, setGameView } = config.actions;

export default config.reducer;
