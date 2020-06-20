import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Picker,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Header from 'src/layout/components/Header';
import { Screen } from 'src/layout/interfaces';
import SegmentedControlTab from 'src/shared/components/SegmentedControlTab';
import Toggle from 'src/shared/components/Toggle';
import { Language, LanguageName } from 'src/services/i18n/interfaces';

import { styles } from './styles';
import {
  selectIsTilesAmountDisplayed,
  selectTheme,
  selectThemeName,
  selectLanguage,
} from '../../store/selectors';
import {
  toggleIsTilesAmountDisplayed,
  setTheme,
  setLanguage,
} from '../../store/slice';

const Settings = () => {
  const { t } = useTranslation('settings');
  const dispatch = useDispatch();

  const language = useSelector(selectLanguage);
  const themeName = useSelector(selectThemeName);
  const isTilesAmountDisplayed = useSelector(selectIsTilesAmountDisplayed);
  const themedStyles = styles(useSelector(selectTheme));

  const handleSelectLanguage = (language: Language) => {
    dispatch(setLanguage(language));
  };

  const handleSelectTheme = (index: number) => {
    dispatch(setTheme(index === 0 ? 'classic' : 'deluxe'));
  };

  return (
    <>
      <Header title={Screen.Settings} hideMenuButton />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={themedStyles.container}>
          <View style={themedStyles.settingRow}>
            <Text style={themedStyles.label}>{t('language')}</Text>
            <Picker
              selectedValue={language}
              onValueChange={handleSelectLanguage}
            >
              <Picker.Item label={LanguageName.en} value="en" />
              <Picker.Item label={LanguageName.pl} value="pl" />
            </Picker>
          </View>
          <View style={themedStyles.settingRow}>
            <Text style={themedStyles.label}>{t('colorVersion')}</Text>
            <SegmentedControlTab
              values={['Classic', 'Deluxe']}
              selectedIndex={themeName === 'classic' ? 0 : 1}
              onTabPress={handleSelectTheme}
            />
          </View>
          <View style={themedStyles.settingRow}>
            <Toggle
              label={t('showTilesAmountLeft')}
              value={isTilesAmountDisplayed}
              onChange={() => dispatch(toggleIsTilesAmountDisplayed())}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Settings;
