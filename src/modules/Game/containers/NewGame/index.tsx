import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import FlatButton from 'src/theme/components/FlatButton';
import { PlayerId, IPlayersNames } from 'src/modules/Players/interfaces';
import { startNewGame } from 'src/modules/Players/store/thunks';

import { GameScreen, GameTabParamList } from '../../interfaces';
import PlayerName from './components/PlayerName';
import { styles } from './styles';

type Props = {
  navigation: StackNavigationProp<GameTabParamList, GameScreen.NewGame>;
};

const NewGame: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
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
      <View style={styles.container}>
        <Text style={styles.header}>Podaj imiona graczy</Text>
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
          label="Rozpocznij grę"
          onPress={startGame}
          disabled={!areAtLeastTwoPlayersPresent}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewGame;
