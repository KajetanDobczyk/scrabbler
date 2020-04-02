import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPlayerId, IPlayer } from 'src/modules/Players/interfaces';

type IPlayersState = {
  players: Record<IPlayerId, IPlayer | null>;
  currentPlayer: IPlayerId;
};

const initialState: IPlayersState = {
  players: {
    0: null,
    1: null,
    2: null,
    3: null,
  },
  currentPlayer: 0,
};

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {
    changeCurrentPlayer(state, action: PayloadAction<IPlayerId>) {
      state.currentPlayer = action.payload;
    },
  },
});

export const { changeCurrentPlayer } = board.actions;

export * from './selectors';

export default board.reducer;
