import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/rootReducer';

export const selectSettingsState = (state: RootState) => state.settings;

export const selectThemeName = createSelector(
  selectSettingsState,
  (settingsState) => settingsState.theme.name,
);

export const selectLanguage = createSelector(
  selectSettingsState,
  (settingsState) => settingsState.language,
);

export const selectTheme = createSelector(
  selectSettingsState,
  (settingsState) => settingsState.theme.theme,
);

export const selectIsTilesAmountDisplayed = createSelector(
  selectSettingsState,
  (settingsState) => settingsState.isTilesAmountDisplayed,
);
