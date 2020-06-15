import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IThemeName } from 'src/theme/interfaces';
import { themes } from 'src/theme';

import { initialState } from './data';

const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<IThemeName>) {
      state.theme = themes[action.payload];
    },
    toggleIsTilesAmountDisplayed(state) {
      state.isTilesAmountDisplayed = !state.isTilesAmountDisplayed;
    },
  },
});

export const { setTheme, toggleIsTilesAmountDisplayed } = settings.actions;

export default settings.reducer;
