import { IPlayersState } from './interfaces';

export const initialState: IPlayersState = {
  players: {
    0: {
      name: 'Gracz 1',
      points: 0,
      moves: [],
    },
    1: {
      name: 'Gracz 2',
      points: 0,
      moves: [],
    },
    2: {
      name: 'Gracz 3',
      points: 0,
      moves: [],
    },
    3: {
      name: 'Gracz 4',
      points: 0,
      moves: [],
    },
  },
  currentPlayerId: 0,
};
