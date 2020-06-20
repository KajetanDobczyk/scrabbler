import { Theme, IThemeName } from 'src/theme/interfaces';
import { Language } from 'src/services/i18n/interfaces';

export type ISettingsState = {
  language: Language;
  theme: {
    name: IThemeName;
    theme: Theme;
  };
  isTilesAmountDisplayed: boolean;
};
