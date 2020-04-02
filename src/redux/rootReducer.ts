import { combineReducers } from '@reduxjs/toolkit';

import boardReducer from 'src/modules/Board/store/slice';
import playersReducer from 'src/modules/Players/store/slice';

const rootReducer = combineReducers({
  board: boardReducer,
  players: playersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
