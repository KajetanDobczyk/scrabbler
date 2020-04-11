import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import { selectPlayers } from 'src/modules/Players/store/slice';

import { styles } from './styles';

const PlayersScoresFooter = () => {
  const players = useSelector(selectPlayers);

  return (
    <View style={styles.container}>
      {Object.values(players).map((player, i) => (
        <View
          key={i}
          style={EStyleSheet.child(
            styles,
            'playerFooter',
            i,
            Object.values(players).length,
          )}
        >
          <Text style={styles.playerPoints}>{player?.points}</Text>
        </View>
      ))}
    </View>
  );
};

export default PlayersScoresFooter;
