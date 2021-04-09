import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import FlatButton from 'src/components/FlatButton';

import FinishedGameDetails from './components/FinishedGameDetails';
import { GameScreen, GameTabParamList } from '../../interfaces';
import * as S from './styles';
import { useTranslation } from 'react-i18next';

type Props = {
  navigation: StackNavigationProp<GameTabParamList, GameScreen.FinishedGame>;
};

const FinishedGame: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation('game');

  return (
    <S.FinishedGameWrapper>
      <S.Header>{t('finishedGame.header')}</S.Header>
      <FinishedGameDetails />
      <FlatButton
        label={t('actions.startNewGame')}
        onPress={() => navigation.navigate(GameScreen.NewGame)}
      />
    </S.FinishedGameWrapper>
  );
};

export default FinishedGame;
