import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPlayerId, IPlayers } from 'src/modules/Players/interfaces';

type IPlayersState = {
  players: IPlayers;
  currentPlayerId: IPlayerId;
};

const initialState: IPlayersState = {
  players: {
    0: {
      name: 'Gracz 1',
      points: 0,
    },
    1: {
      name: 'Gracz 2',
      points: 0,
    },
    2: {
      name: 'Gracz 3',
      points: 0,
    },
    3: {
      name: 'Gracz 4',
      points: 0,
    },
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
