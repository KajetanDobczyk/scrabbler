import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'src/layout/components/Header';
import { Screen } from 'src/layout/interfaces';

import { styles } from './styles';
import {
  selectIsTilesAmountDisplayed,
  selectTheme,
} from '../../store/selectors';
import { toggleIsTilesAmountDisplayed } from '../../store/slice';
import Toggle from './components/Toggle';

const Settings = () => {
  const dispatch = useDispatch();

  const isTilesAmountDisplayed = useSelector(selectIsTilesAmountDisplayed);
  const themedStyles = styles(useSelector(selectTheme));

  return (
    <>
      <Header title={Screen.Settings} hideMenuButton />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={themedStyles.container}>
          <Toggle
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
