import { Theme, IThemeName } from 'src/theme/interfaces';

export type ISettingsState = {
  theme: {
    name: IThemeName;
    theme: Theme;
  };
  isTilesAmountDisplayed: boolean;
};
