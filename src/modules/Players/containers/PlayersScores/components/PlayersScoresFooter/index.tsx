import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { styles } from './styles';
import { IPlayers } from 'src/modules/Players/interfaces';

type Props = {
  players: IPlayers;
};

const PlayersScoresFooter: React.FC<Props> = ({ players }) => (
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

export default PlayersScoresFooter;
