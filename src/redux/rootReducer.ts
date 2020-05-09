import { combineReducers } from '@reduxjs/toolkit';

import boardReducer from 'src/modules/Board/store/slice';
import playersReducer from 'src/modules/Players/store/slice';
import dictionaryReducer from 'src/modules/Dictionary/store/slice';
import settingsReducer from 'src/modules/Settings/store/slice';

const rootReducer = combineReducers({
  board: boardReducer,
  players: playersReducer,
  dictionary: dictionaryReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
