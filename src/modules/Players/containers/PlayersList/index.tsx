import React from 'react';
import { Keyboard } from 'react-native';
import { useTranslation } from 'react-i18next';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Header from 'src/layout/components/Header';

import User from './components/User';

const PlayersList = () => {
  const { t } = useTranslation('players');

  return (
    <>
      <Header title={t('routeName')} />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <User />
      </TouchableWithoutFeedback>
    </>
  );
};

export default PlayersList;
