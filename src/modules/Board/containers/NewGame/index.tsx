import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import FlatButton from 'src/theme/components/FlatButton';
import { PlayerId, IPlayersNames } from 'src/modules/Players/interfaces';
import { startNewGame } from 'src/modules/Players/store/thunks';

import PlayerName from './components/PlayerName';
import { styles } from './styles';

const NewGame = () => {
  const dispatch = useDispatch();
  const [playersNames, setPlayersNames] = useState<IPlayersNames>({
    0: '',
    1: '',
  });

  const handleOnNameChange = (id: PlayerId) => (name: string) => {
    setPlayersNames({
      ...playersNames,
      [id]: name,
    });
  };

  const isAnyNameEmpty = !!Object.values(playersNames).find(
    (name) => name === '',
  );

  return (
    <View style={styles.container}>
      {(Object.keys(playersNames) as PlayerId[]).map((playerId) => (
        <PlayerName
          key={playerId}
          id={playerId}
          name={playersNames[playerId]!}
          onChange={handleOnNameChange}
        />
      ))}
      <FlatButton
        label="Rozpocznij grę"
        onPress={() => dispatch(startNewGame(playersNames))}
        disabled={isAnyNameEmpty}
      />
    </View>
  );
};

export default NewGame;
