import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import FlatButton from 'src/theme/components/FlatButton';
import { PlayerId, IPlayersNames } from 'src/modules/Players/interfaces';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import { GameScreen, GameTabParamList } from '../../interfaces';
import { startNewGame } from '../../store/players/thunks';
import PlayerName from './components/PlayerName';
import { styles } from './styles';

type Props = {
  navigation: StackNavigationProp<GameTabParamList, GameScreen.NewGame>;
};

const NewGame: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation('game');
  const dispatch = useDispatch();

  const themedStyles = styles(useSelector(selectTheme));

  const [playersNames, setPlayersNames] = useState<IPlayersNames>({
    0: '',
    1: '',
    2: '',
    3: '',
  });

  const handleOnNameChange = (id: PlayerId) => (name: string) => {
    setPlayersNames({
      ...playersNames,
      [id]: name,
    });
  };

  const startGame = () => {
    dispatch(startNewGame(playersNames));
    navigation.navigate(GameScreen.Game);
  };

  const areAtLeastTwoPlayersPresent =
    Object.values(playersNames).filter((name) => name !== '').length >= 2;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={themedStyles.container}>
        <Text style={themedStyles.header}>{t('newGame.playersNames')}</Text>
        <View>
          {(Object.keys(playersNames) as PlayerId[]).map((playerId, i) => (
            <PlayerName
              key={playerId}
              id={playerId}
              name={playersNames[playerId]!}
              onChange={handleOnNameChange}
            />
          ))}
        </View>
        <FlatButton
          label={t('actions.start')}
          onPress={startGame}
          disabled={!areAtLeastTwoPlayersPresent}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewGame;
