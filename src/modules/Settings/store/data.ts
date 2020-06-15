import classicTheme from 'src/theme/classic';

import { ISettingsState } from './interfaces';

export const initialState: ISettingsState = {
  theme: classicTheme,
  isTilesAmountDisplayed: true,
};
