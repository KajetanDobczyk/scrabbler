import i18n from 'src/services/i18n';

import { Screen } from './interfaces';

export const routesNames: Record<Screen, string> = {
  [Screen.Game]: i18n.t('game:routeName'),
  [Screen.Dictionary]: i18n.t('dictionary:routeName'),
  [Screen.Players]: i18n.t('players:routeName'),
  [Screen.Settings]: i18n.t('settings:routeName'),
};
