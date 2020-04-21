import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { styles } from './styles';
import { IPlayers } from 'src/modules/Players/interfaces';

type Props = {
  players: IPlayers;
};

const TurnsHistory: React.FC<Props> = ({ players }) => (
  <View style={styles.container}>
    {Object.values(players).map((player, i) => (
      <View
        key={i}
        style={EStyleSheet.child(
          styles,
          'playerMoves',
          i,
          Object.values(players).length,
        )}
      >
        {player?.moves.map((move, i) => (
          <Text key={i}>{move.words.map((word) => word.word).join(', ')}</Text>
        ))}
      </View>
    ))}
  </View>
);

export default TurnsHistory;
