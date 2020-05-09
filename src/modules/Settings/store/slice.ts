import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './data';

const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleIsTilesAmountDisplayed(state) {
      state.isTilesAmountDisplayed = !state.isTilesAmountDisplayed;
    },
  },
});

export const { toggleIsTilesAmountDisplayed } = settings.actions;

export default settings.reducer;
