import classic from './themes/classic';
import deluxe from './themes/deluxe';
import { IThemeName, Theme } from './interfaces';

export * from './helpers';

export const themes: Record<IThemeName, Theme> = {
  classic,
  deluxe,
};
