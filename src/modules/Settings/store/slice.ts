import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import i18next from 'i18next';

import { Language } from 'src/services/i18n/interfaces';
import { IThemeName } from 'src/theme/interfaces';
import { themes } from 'src/theme';

import { initialState } from './data';

const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<Language>) {
      i18next.changeLanguage(action.payload);
      state.language = action.payload;
    },
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

export const {
  setLanguage,
  setTheme,
  toggleIsTilesAmountDisplayed,
} = settings.actions;

export default settings.reducer;
