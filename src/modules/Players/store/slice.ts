import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPlayerId, IPlayer } from 'src/modules/Players/interfaces';

type IPlayersState = {
  players: Record<IPlayerId, IPlayer | null>;
  currentPlayerId: IPlayerId;
};

const initialState: IPlayersState = {
  players: {
    0: null,
    1: null,
    2: null,
    3: null,
  },
  currentPlayerId: 0,
};

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {
    changeCurrentPlayerId(state, action: PayloadAction<IPlayerId>) {
      state.currentPlayerId = action.payload;
    },
  },
});

export const { changeCurrentPlayerId } = board.actions;

export * from './selectors';

export default board.reducer;
