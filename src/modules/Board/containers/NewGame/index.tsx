import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
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
    2: '',
    3: '',
  });

  const handleOnNameChange = (id: PlayerId) => (name: string) => {
    setPlayersNames({
      ...playersNames,
      [id]: name,
    });
  };

  const areAtLeastTwoPlayersPresent =
    Object.values(playersNames).filter((name) => name !== '').length >= 2;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.header}>Podaj imiona graczy</Text>
      {(Object.keys(playersNames) as PlayerId[]).map((playerId, i) => (
        <PlayerName
          key={playerId}
          id={playerId}
          name={playersNames[playerId]!}
          onChange={handleOnNameChange}
          autoFocus={i === 0}
        />
      ))}
      <FlatButton
        label="Rozpocznij grę"
        onPress={() => dispatch(startNewGame(playersNames))}
        disabled={!areAtLeastTwoPlayersPresent}
      />
    </ScrollView>
  );
};

export default NewGame;
