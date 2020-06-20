import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import FlatButton from 'src/theme/components/FlatButton';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import FinishedGameDetails from './components/FinishedGameDetails';
import { GameScreen, GameTabParamList } from '../../interfaces';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';

type Props = {
  navigation: StackNavigationProp<GameTabParamList, GameScreen.FinishedGame>;
};

const FinishedGame: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation('game');
  const themedStyles = styles(useSelector(selectTheme));

  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.header}>{t('finishedGame.header')}</Text>
      <FinishedGameDetails />
      <FlatButton
        label={t('actions.startNewGame')}
        onPress={() => navigation.navigate(GameScreen.NewGame)}
      />
    </View>
  );
};

export default FinishedGame;
