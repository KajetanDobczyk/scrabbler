import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import { PlayerId } from 'src/modules/Players/interfaces';
import {
  selectCurrentPlayerId,
  selectPlayers,
} from 'src/modules/Game/store/players/selectors';

import { styles } from './styles';

const PlayersNames = () => {
  const currentPlayerId = useSelector(selectCurrentPlayerId);
  const players = useSelector(selectPlayers);

  return (
    <View style={styles.container}>
      {(Object.keys(players) as PlayerId[]).map((playerId) => (
        <Text
          key={playerId}
          style={
            playerId === currentPlayerId.toString()
              ? [styles.name, styles.currentName]
              : styles.name
          }
        >
          {players[playerId]!.name}
        </Text>
      ))}
    </View>
  );
};

export default PlayersNames;
