import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IThemeName } from 'src/theme/interfaces';
import { themes } from 'src/theme';

import { initialState } from './data';

const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<IThemeName>) {
      const themeName = action.payload;
      const theme = themes[action.payload];

      state.theme = {
        name: themeName,
        theme,
      };
    },
    toggleIsTilesAmountDisplayed(state) {
      state.isTilesAmountDisplayed = !state.isTilesAmountDisplayed;
    },
  },
});

export const { setTheme, toggleIsTilesAmountDisplayed } = settings.actions;

export default settings.reducer;
