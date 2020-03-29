import { combineReducers } from '@reduxjs/toolkit';

import boardReducer from 'src/containers/Board/store/slice';

const rootReducer = combineReducers({
  board: boardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
