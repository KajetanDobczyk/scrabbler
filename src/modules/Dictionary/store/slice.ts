import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './data';

const dictionary = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.search.query = action.payload;
    },
  },
});

export const { setSearchQuery } = dictionary.actions;

export default dictionary.reducer;
