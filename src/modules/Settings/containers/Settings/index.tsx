import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Picker } from '@react-native-community/picker';

import Header from 'src/layout/components/Header';
import { Screen } from 'src/layout/interfaces';
import SegmentedControlTab from 'src/components/SegmentedControlTab';
import Toggle from 'src/components/Toggle';
import { Language, LanguageName } from 'src/services/i18n/interfaces';
import FlatButton from 'src/components/FlatButton';
import { logout } from 'src/modules/User/store/thunks';

import {
  selectIsTilesAmountDisplayed,
  selectThemeName,
  selectLanguage,
} from '../../store/selectors';
import {
  toggleIsTilesAmountDisplayed,
  setTheme,
  setLanguage,
} from '../../store/slice';
import * as S from './styles';

const Settings = () => {
  const { t } = useTranslation('settings');
  const dispatch = useDispatch();

  const language = useSelector(selectLanguage);
  const themeName = useSelector(selectThemeName);
  const isTilesAmountDisplayed = useSelector(selectIsTilesAmountDisplayed);

  const handleSelectLanguage = (language: Language) => {
    dispatch(setLanguage(language));
  };

  const handleSelectTheme = (index: number) => {
    dispatch(setTheme(index === 0 ? 'classic' : 'deluxe'));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Header title={Screen.Settings} hideMenuButton />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <S.Container>
          <S.SettingsRow>
            <S.Label>{t('language')}</S.Label>
            <Picker
              selectedValue={language}
              onValueChange={handleSelectLanguage}
            >
              <Picker.Item label={LanguageName.en} value="en" />
              <Picker.Item label={LanguageName.pl} value="pl" />
            </Picker>
          </S.SettingsRow>
          <S.SettingsRow>
            <S.Label>{t('colorVersion')}</S.Label>
            <SegmentedControlTab
              values={['Classic', 'Deluxe']}
              selectedIndex={themeName === 'classic' ? 0 : 1}
              onTabPress={handleSelectTheme}
            />
          </S.SettingsRow>
          <S.SettingsRow>
            <Toggle
              label={t('showTilesAmountLeft')}
              value={isTilesAmountDisplayed}
              onChange={() => dispatch(toggleIsTilesAmountDisplayed())}
            />
          </S.SettingsRow>
          <S.SettingsRow>
            <FlatButton label={t('user.logout')} onPress={handleLogout} />
          </S.SettingsRow>
        </S.Container>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Settings;
