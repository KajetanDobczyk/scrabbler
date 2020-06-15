import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'src/layout/components/Header';
import { Screen } from 'src/layout/interfaces';
import SegmentedControlTab from 'src/shared/components/SegmentedControlTab';
import Toggle from 'src/shared/components/Toggle';

import { styles } from './styles';
import {
  selectIsTilesAmountDisplayed,
  selectTheme,
  selectThemeName,
} from '../../store/selectors';
import { toggleIsTilesAmountDisplayed, setTheme } from '../../store/slice';

const Settings = () => {
  const dispatch = useDispatch();

  const isTilesAmountDisplayed = useSelector(selectIsTilesAmountDisplayed);
  const themeName = useSelector(selectThemeName);
  const themedStyles = styles(useSelector(selectTheme));

  const handleSelectTheme = (index: number) => {
    dispatch(setTheme(index === 0 ? 'classic' : 'deluxe'));
  };

  return (
    <>
      <Header title={Screen.Settings} hideMenuButton />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={themedStyles.container}>
          <View style={themedStyles.settingRow}>
            <Text style={themedStyles.label}>Wersja kolorystyczna</Text>
            <SegmentedControlTab
              values={['Classic', 'Deluxe']}
              selectedIndex={themeName === 'classic' ? 0 : 1}
              onTabPress={handleSelectTheme}
            />
          </View>
          <View style={themedStyles.settingRow}>
            <Toggle
              label="Pokaż pozostałą ilość literek"
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
