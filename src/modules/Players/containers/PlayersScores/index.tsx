import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import { selectPlayers } from '../../store/slice';
import { styles } from './styles';

const PlayersScores = () => {
  const players = useSelector(selectPlayers);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {Object.values(players).map((player, i) => (
          <View
            style={EStyleSheet.child(
              styles,
              'playerHeader',
              i,
              Object.values(players).length,
            )}
          >
            <Text style={styles.playerName}>{player?.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default PlayersScores;
