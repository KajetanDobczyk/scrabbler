import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './data';
import { IWordSearch } from '../interfaces';

const dictionary = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.wordSearch.query = action.payload;
    },
    fetchWordDataStarted(state) {
      state.wordSearch.status = 'inProgress';
    },
    fetchWordDataSucceeded(state, action: PayloadAction<IWordSearch>) {
      state.wordSearch.data = action.payload;
      state.wordSearch.status = 'succeeded';
    },
    fetchWordDataFailed(state) {
      state.wordSearch.status = 'failed';
    },
  },
});

export const {
  setSearchQuery,
  fetchWordDataStarted,
  fetchWordDataSucceeded,
  fetchWordDataFailed,
} = dictionary.actions;

export default dictionary.reducer;
