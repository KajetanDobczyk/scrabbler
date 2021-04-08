import React from 'react';
import { View, Text, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { selectTheme } from 'src/modules/Settings/store/selectors';
import Header from 'src/layout/components/Header';

import { styles } from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const PlayersList = () => {
  const { t } = useTranslation('players');
  const dispatch = useDispatch();

  const themedStyles = styles(useSelector(selectTheme));

  return (
    <>
      <Header title={t('routeName')} />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={themedStyles.container}>
          <Text>Players</Text>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default PlayersList;
