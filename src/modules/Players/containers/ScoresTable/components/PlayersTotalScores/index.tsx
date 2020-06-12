import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import { PlayerId } from 'src/modules/Players/interfaces';
import {
  selectPlayers,
  selectCurrentPlayerId,
} from 'src/modules/Players/store/selectors';
import { sumMovesPoints } from 'src/modules/Players/helpers';

import { styles } from './styles';

const PlayersTotalScores = () => {
  const players = useSelector(selectPlayers);
  const currentPlayerId = useSelector(selectCurrentPlayerId);

  return (
    <View style={styles.container}>
      {(Object.keys(players) as PlayerId[]).map((playerId, i) => (
        <View key={i} style={styles.pointsWrapper}>
          <Text
            style={
              currentPlayerId === playerId
                ? [styles.points, styles.currentPlayerPoints]
                : styles.points
            }
          >
            {sumMovesPoints(players[playerId]!.moves)}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default PlayersTotalScores;
