import classicTheme from 'src/theme/themes/classic';

import { ISettingsState } from './interfaces';

export const initialState: ISettingsState = {
  language: 'pl',
  theme: {
    name: 'classic',
    theme: classicTheme,
  },
  isTilesAmountDisplayed: true,
};
