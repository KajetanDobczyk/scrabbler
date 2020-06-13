import React from 'react';
import { View, Text } from 'react-native';

import { IPlayer } from 'src/modules/Players/interfaces';

import { styles } from './styles';

type Props = {
  player: IPlayer;
  points: number;
  isWinner: boolean;
};

const PlayerFinishedGameDetails: React.FC<Props> = ({
  player,
  points,
  isWinner,
}) => (
  <View style={isWinner ? [styles.container, styles.winner] : styles.container}>
    <Text style={styles.name}>{player.name}</Text>
    <Text style={styles.points}>{points}</Text>
  </View>
);

export default PlayerFinishedGameDetails;
