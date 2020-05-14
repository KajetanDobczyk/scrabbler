import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import { PlayerId } from 'src/modules/Players/interfaces';
import {
  selectPlayers,
  selectCurrentPlayerId,
} from 'src/modules/Players/store/selectors';

import { styles } from './styles';

const TableHeader = () => {
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

export default TableHeader;
