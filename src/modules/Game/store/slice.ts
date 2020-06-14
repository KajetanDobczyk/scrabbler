import { combineReducers } from '@reduxjs/toolkit';

import configReducer from './config/slice';
import boardReducer from './board/slice';
import playersReducer from './players/slice';

export default combineReducers({
  config: configReducer,
  board: boardReducer,
  players: playersReducer,
});
