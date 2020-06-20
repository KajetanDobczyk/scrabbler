import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEN from '../locales/en/common.json';
import commonPL from '../locales/pl/common.json';

const resources = {
  pl: {
    common: commonPL,
  },
  en: {
    common: commonEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  defaultNS: 'common',
  lng: 'pl',
});

export default i18n;
