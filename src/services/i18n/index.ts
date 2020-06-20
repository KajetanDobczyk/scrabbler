import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEN from './locales/en/common.json';
import dictionaryEN from './locales/en/dictionary.json';
import gameEN from './locales/en/game.json';
import settingsEN from './locales/en/settings.json';

import commonPL from './locales/pl/common.json';
import dictionaryPL from './locales/pl/dictionary.json';
import gamePL from './locales/pl/game.json';
import settingsPL from './locales/pl/settings.json';

const resources = {
  en: {
    common: commonEN,
    dictionary: dictionaryEN,
    game: gameEN,
    settings: settingsEN,
  },
  pl: {
    common: commonPL,
    dictionary: dictionaryPL,
    game: gamePL,
    settings: settingsPL,
  },
};

i18n.use(initReactI18next).init({
  resources,
  defaultNS: 'common',
  lng: 'pl',
});

export default i18n;
