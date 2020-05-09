import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'src/layout/components/Header';
import { Screen } from 'src/layout/interfaces';

import { styles } from './styles';
import { selectIsTilesAmountDisplayed } from '../../store/selectors';
import { toggleIsTilesAmountDisplayed } from '../../store/slice';
import SettingRow from './components/SettingRow';

const Settings = () => {
  const dispatch = useDispatch();

  const isTilesAmountDisplayed = useSelector(selectIsTilesAmountDisplayed);

  return (
    <>
      <Header title={Screen.Settings} hideMenuButton />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <SettingRow
            label="Pokaż pozostałą ilość literek"
            value={isTilesAmountDisplayed}
            onChange={() => dispatch(toggleIsTilesAmountDisplayed())}
          />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Settings;
